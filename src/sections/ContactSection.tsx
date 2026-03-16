import { SectionShell } from "@/components/ui/SectionShell";
import { ActionLink } from "@/components/ui/ActionLink";
import { contactContent } from "@/data/profileData";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Open for research collaboration and academic opportunities"
      description="Keep direct contact details and external profile links in one place so updates remain content-only."
    >
      <div className="rounded-[32px] border border-ink-200 bg-ink-900 p-8 text-ink-50 shadow-paper md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-ink-300">Email</p>
        <a href={`mailto:${contactContent.email}`} className="mt-3 block font-serif text-3xl">
          {contactContent.email}
        </a>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ink-300">Location</p>
        <p className="mt-3 text-lg text-ink-100">{contactContent.location}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {contactContent.links.map((link) => (
            <ActionLink key={link.label} item={link} variant="secondary" />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
