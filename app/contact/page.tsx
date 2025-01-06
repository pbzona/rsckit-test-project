import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <div className="space-y-8">
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
