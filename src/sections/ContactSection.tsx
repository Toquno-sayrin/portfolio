import { useState } from "react";
import { SectionShell } from "@/components/ui/SectionShell";
import { contactContent } from "@/data/profileData";

export function ContactSection() {
  const [statusMessage, setStatusMessage] = useState("");

  const showStatus = (message: string) => {
    setStatusMessage(message);
    window.setTimeout(() => setStatusMessage(""), 1800);
  };

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(contactContent.email);
      showStatus("Email copied");
    } catch {
      showStatus("Opening mail app");
      window.location.href = `mailto:${contactContent.email}`;
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Open for research collaboration and academic opportunities"
      description="Keep direct contact details and external profile links in one place so updates remain content-only."
    >
      <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(18,24,38,0.94),rgba(10,15,24,0.9))] p-8 text-ink-50 shadow-paper md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-frost-300">Email</p>
        <button
          type="button"
          onClick={handleEmailClick}
          className="mt-3 block text-[clamp(1.1rem,4.4vw,2.2rem)] leading-tight tracking-[-0.03em]"
        >
          {contactContent.email}
        </button>
        <p className="mt-6 text-sm uppercase tracking-[0.2em] text-frost-300">Location</p>
        <p className="mt-3 text-lg text-ink-50">{contactContent.location}</p>
        <p className="mt-4 min-h-[1.75rem] text-sm text-frost-300">{statusMessage}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {contactContent.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => showStatus(`Opening ${link.label}`)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-frost-300 hover:bg-white/10 active:scale-[0.98]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
