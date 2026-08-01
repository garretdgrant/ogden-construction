type OgdenContactEmailInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt?: Date;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const formatSubmittedAt = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
  }).format(date);

export function getOgdenContactEmailHtml({
  name,
  email,
  phone,
  message,
  submittedAt = new Date(),
}: OgdenContactEmailInput): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");
  const safeSubmittedAt = escapeHtml(formatSubmittedAt(submittedAt));
  const emailHref = `mailto:${safeEmail}`;
  const phoneHref = `tel:${escapeHtml(phone.replace(/[^\d+]/g, ""))}`;
  const previewText = escapeHtml(
    `New Ogden Construction project inquiry from ${name}.`,
  );

  return `<!DOCTYPE html>
<html lang="en" style="color-scheme:light only; supported-color-schemes:light;">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light" />
    <title>New project inquiry from ${safeName}</title>
    <!--[if mso]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style>
      body, table, td, a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table, td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      a {
        color: #854d0e;
      }

      @media only screen and (max-width: 640px) {
        .email-wrap {
          width: 100% !important;
        }

        .email-pad {
          padding-left: 22px !important;
          padding-right: 22px !important;
        }

        .email-title {
          font-size: 30px !important;
          line-height: 34px !important;
        }

        .email-action {
          box-sizing: border-box !important;
          display: block !important;
          width: 100% !important;
        }

        .email-action-secondary {
          margin-left: 0 !important;
          margin-top: 12px !important;
        }

        .email-detail-label,
        .email-detail-value {
          box-sizing: border-box !important;
          display: block !important;
          width: 100% !important;
        }

        .email-detail-label {
          padding-bottom: 4px !important;
        }
      }
    </style>
  </head>
  <body bgcolor="#e7e1d8" style="margin:0; padding:0; width:100% !important; background-color:#e7e1d8; color:#292524; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, Helvetica, sans-serif;">
    <div style="display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; max-height:0; max-width:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px;">
      ${previewText}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#e7e1d8" style="width:100%; background-color:#e7e1d8;">
      <tr>
        <td align="center" style="padding:28px 12px;">
          <table class="email-wrap" role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="width:640px; max-width:640px; overflow:hidden; border:1px solid #d6d3d1; border-radius:18px; background-color:#ffffff; box-shadow:0 18px 50px rgba(41,37,36,0.14);">
            <tr>
              <td class="email-pad" bgcolor="#ffffff" style="padding:20px 32px 18px 32px; border-top:5px solid #854d0e; border-bottom:1px solid #e7e5e4; background-color:#ffffff;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td valign="middle" style="font-family:Georgia, 'Times New Roman', serif; font-size:21px; line-height:26px; font-weight:bold; color:#1c2530;">
                      Ogden Construction
                    </td>
                    <td align="right" valign="middle" style="font-size:10px; line-height:14px; font-weight:800; letter-spacing:1.8px; color:#78716c; text-transform:uppercase;">
                      Website inquiry
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td class="email-pad" bgcolor="#1c2530" style="padding:38px 32px 36px 32px; background-color:#1c2530;">
                <div style="padding-bottom:14px; font-size:11px; line-height:16px; font-weight:800; letter-spacing:2.2px; color:#f4c95d; text-transform:uppercase;">
                  New project lead
                </div>
                <div class="email-title" style="font-family:Georgia, 'Times New Roman', serif; font-size:38px; line-height:42px; font-weight:normal; letter-spacing:-0.6px; color:#ffffff;">
                  ${safeName} wants to start a project.
                </div>
                <div style="max-width:520px; padding-top:16px; font-size:15px; line-height:24px; color:#d6d3d1;">
                  A new consultation request was submitted through the Ogden Construction website. The contact details and project notes are organized below.
                </div>
              </td>
            </tr>

            <tr>
              <td class="email-pad" bgcolor="#f7f3ec" style="padding:30px 32px 34px 32px; background-color:#f7f3ec;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:0 0 20px 0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="width:100%; border:1px solid #ded8cf; border-radius:14px; background-color:#ffffff;">
                        <tr>
                          <td colspan="2" style="padding:20px 22px 12px 22px; font-size:11px; line-height:16px; font-weight:800; letter-spacing:2px; color:#854d0e; text-transform:uppercase;">
                            Contact details
                          </td>
                        </tr>
                        <tr>
                          <td class="email-detail-label" width="120" valign="top" style="width:120px; padding:8px 12px 8px 22px; font-size:12px; line-height:20px; font-weight:800; color:#78716c; text-transform:uppercase;">
                            Name
                          </td>
                          <td class="email-detail-value" valign="top" style="padding:8px 22px 8px 0; font-size:15px; line-height:22px; font-weight:700; color:#292524;">
                            ${safeName}
                          </td>
                        </tr>
                        <tr>
                          <td class="email-detail-label" width="120" valign="top" style="width:120px; padding:8px 12px 8px 22px; font-size:12px; line-height:20px; font-weight:800; color:#78716c; text-transform:uppercase;">
                            Email
                          </td>
                          <td class="email-detail-value" valign="top" style="padding:8px 22px 8px 0; font-size:15px; line-height:22px; font-weight:700; color:#292524; word-break:break-word;">
                            <a href="${emailHref}" style="color:#854d0e; text-decoration:underline;">${safeEmail}</a>
                          </td>
                        </tr>
                        <tr>
                          <td class="email-detail-label" width="120" valign="top" style="width:120px; padding:8px 12px 20px 22px; font-size:12px; line-height:20px; font-weight:800; color:#78716c; text-transform:uppercase;">
                            Phone
                          </td>
                          <td class="email-detail-value" valign="top" style="padding:8px 22px 20px 0; font-size:15px; line-height:22px; font-weight:700; color:#292524;">
                            <a href="${phoneHref}" style="color:#854d0e; text-decoration:underline;">${safePhone}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 0 20px 0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#fffaf0" style="width:100%; border:1px solid #e7c887; border-left:5px solid #854d0e; border-radius:14px; background-color:#fffaf0;">
                        <tr>
                          <td style="padding:20px 22px;">
                            <div style="padding-bottom:9px; font-size:11px; line-height:16px; font-weight:800; letter-spacing:2px; color:#854d0e; text-transform:uppercase;">
                              Project details
                            </div>
                            <div style="font-size:15px; line-height:25px; color:#44403c;">
                              ${safeMessage}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 0 24px 0;">
                      <a class="email-action" href="${emailHref}" style="display:inline-block; border-radius:9px; background-color:#854d0e; color:#ffffff; font-size:12px; line-height:18px; font-weight:800; letter-spacing:0.8px; padding:14px 20px; text-align:center; text-decoration:none; text-transform:uppercase;">
                        Reply by email
                      </a>
                      <a class="email-action email-action-secondary" href="${phoneHref}" style="display:inline-block; margin-left:12px; border:1px solid #a8a29e; border-radius:9px; background-color:#ffffff; color:#292524; font-size:12px; line-height:18px; font-weight:800; letter-spacing:0.8px; padding:13px 20px; text-align:center; text-decoration:none; text-transform:uppercase;">
                        Call ${safeName}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="border-top:1px solid #ded8cf; padding:20px 0 0 0; font-size:12px; line-height:20px; color:#78716c;">
                      Submitted ${safeSubmittedAt}<br />
                      Sent securely from <a href="https://www.ogden-construction.com" style="color:#854d0e; font-weight:700; text-decoration:none;">ogden-construction.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function getOgdenContactEmailText({
  name,
  email,
  phone,
  message,
  submittedAt = new Date(),
}: OgdenContactEmailInput): string {
  return [
    "NEW OGDEN CONSTRUCTION PROJECT INQUIRY",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    "",
    "Project details:",
    message,
    "",
    `Submitted: ${formatSubmittedAt(submittedAt)}`,
    "Source: https://www.ogden-construction.com",
  ].join("\n");
}
