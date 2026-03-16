import { Header } from "@/components/layout/Header";
import { AwardsSection } from "@/sections/AwardsSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";

function App() {
  return (
    <div className="min-h-screen bg-ink-50 text-ink-900">
      <Header />
      <main>
        <HeroSection />
        <AwardsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
