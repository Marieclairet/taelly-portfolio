import React from "react";
import { motion } from "framer-motion";
import Section from "../layout/Section";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact({ darkMode }) {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maryclaresaibert@gmail.com",
      href: "mailto:maryclaresaibert@gmail.com",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mary-clare-saibert",
      href: "https://www.linkedin.com/in/mary-clare-saibert-572571258/",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Marieclairet",
      href: "https://github.com/Marieclairet",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kumasi, Ghana",
      href: null,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <Section id="contact" className={`${darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'} backdrop-blur-sm`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : "_self"}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                  className={`block rounded-2xl border border-transparent backdrop-blur-sm p-6 ${
                    darkMode 
                      ? 'bg-gray-900/50 hover:border-pink-500/20' 
                      : 'bg-white/50 hover:border-pink-500/20'
                  } transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {item.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className={`rounded-2xl border border-transparent backdrop-blur-sm p-6 ${
                  darkMode 
                    ? 'bg-gray-900/50' 
                    : 'bg-white/50'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        {item.label}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, cybersecurity projects, 
            or potential collaborations. Feel free to reach out!
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="mailto:marieclairesaibert@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-pink-500/25 text-lg font-medium"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}