import { Resend } from "resend";
import { NextRequest } from "next/server";
import {
  getOgdenContactEmailHtml,
  getOgdenContactEmailText,
} from "@/lib/emails/ogden-contact-email";
import { SITE_CONTACT_EMAIL } from "@/lib/site-contact";
import { isSpamHoneypot } from "@/lib/spam";
import { isValidEmail, isValidPhone } from "@/lib/validations";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const payload = await req.json();
    const body =
      typeof payload === "object" && payload !== null
        ? (payload as Record<string, unknown>)
        : {};
    const getField = (field: string) =>
      typeof body[field] === "string" ? body[field].trim() : "";
    const name = getField("name");
    const email = getField("email");
    const phone = getField("phone");
    const message = getField("message");
    const company = getField("company");

    if (isSpamHoneypot(company)) {
      return new Response(JSON.stringify({ success: false, spam: true }), {
        status: 400,
      });
    }

    if (!name || !email || !message || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        {
          status: 400,
        },
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid phone number" }),
        { status: 400 },
      );
    }

    const submittedAt = new Date();
    const emailInput = { name, email, phone, message, submittedAt };
    const subjectName = name.replace(/[\r\n]+/g, " ");
    const { data, error } = await resend.emails.send({
      from: "leads@edcwebdesign.com",
      to: process.env.RESEND_TO_EMAIL || SITE_CONTACT_EMAIL,
      replyTo: email,
      subject: `New Ogden Construction inquiry from ${subjectName}`,
      html: getOgdenContactEmailHtml(emailInput),
      text: getOgdenContactEmailText(emailInput),
    });

    if (error) {
      throw error;
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
