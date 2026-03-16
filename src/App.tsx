import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { AwardsSection } from "@/sections/AwardsSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";

const sectionTabs = [
  { id: "awards", label: "Awards" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

type SectionTabId = (typeof sectionTabs)[number]["id"];

function App() {
  const [activeSection, setActiveSection] = useState<SectionTabId>("awards");

  return (
    <div className="min-h-screen bg-transparent text-ink-50">
      <Header activeSection={activeSection} onSelect={setActiveSection} />
      <main>
        <HeroSection />
        <section className="sticky top-[72px] z-20 border-b border-white/10 bg-[#0c111a]/78 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-6xl gap-3 overflow-x-auto px-6 py-4 lg:px-8">
            {sectionTabs.map((tab) => {
              const isActive = activeSection === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSection(tab.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-frost-300 bg-frost-500/15 text-white"
                      : "border-white/10 bg-white/5 text-ink-100 hover:border-frost-300/50 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </section>
        {activeSection === "awards" ? <AwardsSection /> : null}
        {activeSection === "projects" ? <ProjectsSection /> : null}
        {activeSection === "contact" ? <ContactSection /> : null}
      </main>
    </div>
  );
}

export default App;
