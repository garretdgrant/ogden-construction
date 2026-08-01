import { ContactForm } from "@/components/ContactForm";
import type { OgdenLeadForm as OgdenLeadFormData } from "@/lib/ogden-page.types";

type OgdenLeadFormProps = {
  data: OgdenLeadFormData;
};

export function OgdenLeadForm({ data }: OgdenLeadFormProps) {
  return (
    <ContactForm
      idPrefix="homepage-contact"
      className="mt-8"
      submitLabel={data.submitLabel}
      privacyText={data.privacyText}
    />
  );
}
