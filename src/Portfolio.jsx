import React from "react";
import { Navbar, Footer } from "./components/layout";
import {
  Hero,
  About,
  Skills,
  Projects,
  Certifications,
  Contact
} from "./components/sections";
import { useDarkMode } from "./hooks/useDarkMode";
import ScrollIndicator from "./components/common/ScrollIndicator";

export default function Portfolio() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${
      darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`}>
      <ScrollIndicator />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  );
}