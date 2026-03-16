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
      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,24,38,0.94),rgba(10,15,24,0.9))] p-8 text-ink-50 shadow-paper md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-frost-300">Email</p>
        <a href={`mailto:${contactContent.email}`} className="mt-3 block font-serif text-3xl">
          {contactContent.email}
        </a>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-frost-300">Location</p>
        <p className="mt-3 text-lg text-ink-50">{contactContent.location}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {contactContent.links.map((link) => (
            <ActionLink key={link.label} item={link} variant="secondary" />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
