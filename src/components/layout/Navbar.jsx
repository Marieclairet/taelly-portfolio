import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../common/ThemeToggle";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Menu, X } from "lucide-react";

const navItems = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const activeSection = useScrollSpy(navItems);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(item);
    if (element) {
      // Wait for menu to close before scrolling
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-colors ${
          darkMode 
            ? "bg-gray-900/80 border-gray-700" 
            : "bg-white/80 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Logo and Name */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 ml-7"
          >
            <img 
              src="/assets/logo.png" 
              alt="Taelly Logo" 
              className="w-20 h-20 rounded-lg object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Great Vibes, cursive' }}>
              Mary Clare
            </h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-medium transition-all duration-300 hover:text-pink-500 ${
                  activeSection === item
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? "text-gray-300 hover:bg-gray-800" 
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${
                darkMode 
                  ? "border-gray-700 bg-gray-900/95" 
                  : "border-gray-200 bg-white/95"
              }`}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`block py-2 font-medium transition-all duration-300 hover:text-pink-500 ${
                      activeSection === item
                        ? "text-pink-500 border-l-4 border-pink-500 pl-3"
                        : "text-gray-600 dark:text-gray-300 pl-4"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}