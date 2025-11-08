import React from "react";
import { motion } from "framer-motion";
import Section from "../layout/Section";

export default function Skills({ darkMode }) {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Backend Development", 
      items: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Cybersecurity",
      items: ["Network Security", "Cryptography", "Penetration Testing", "Security Auditing", "OWASP", "Risk Assessment"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "Linux", "AWS", "Figma", "VS Code"]
    }
  ];

  return (
    <Section id="skills" className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`p-6 rounded-2xl border border-transparent backdrop-blur-sm ${
                darkMode 
                  ? 'bg-gray-900/50 hover:border-pink-500/20' 
                  : 'bg-gray-50/50 hover:border-pink-500/20'
              } transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10`}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      darkMode
                        ? 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
                        : 'bg-pink-500/20 text-pink-700 hover:bg-pink-500/30'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}