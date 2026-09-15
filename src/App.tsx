import React, { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactModal } from './components/common/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-kanit min-h-screen selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. ABOUT SECTION */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection />

      {/* Minimal Footer */}
      <footer id="contact" className="bg-[#0C0C0C] py-12 px-6 border-t border-[#D7E2EA]/10 text-center text-xs uppercase tracking-widest text-[#D7E2EA]/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Muhammad Bilal. All rights reserved.</p>
          <p className="font-light">Web Designer • AI/ML Enthusiast • Automation Engineer</p>
          <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="hover:text-white transition-colors uppercase"
            >
              Get In Touch
            </button>
            <a
              href="https://github.com/muhammadbilaliiui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/muhammadbilaliiui/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Repository
            </a>
            <a
              href="mailto:bilal20030315@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://wa.me/923315581529"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default App;
