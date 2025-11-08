import React from "react";
import { motion } from "framer-motion";
import Section from "../layout/Section";
import { Github } from "lucide-react";

export default function Projects({ darkMode }) {
  const projects = [
    {
      title: "Secure Auth System",
      description: "A robust authentication system with multi-factor authentication and encryption, built with React and Node.js.",
      technologies: ["React", "Node.js", "JWT", "MongoDB", "bcrypt"],
      githubUrl: "https://github.com/yourusername/secure-auth-system"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Real-time security monitoring dashboard with threat detection and analytics visualization.",
      technologies: ["Next.js", "TypeScript", "Python", "D3.js", "FastAPI"],
      githubUrl: "https://github.com/yourusername/cybersecurity-dashboard"
    },
    {
      title: "Network Scanner Tool",
      description: "Python-based network scanning utility for security assessments and vulnerability detection.",
      technologies: ["Python", "Scapy", "CLI", "Linux", "Bash"],
      githubUrl: "https://github.com/yourusername/network-scanner"
    }
  ];

  return (
    <Section id="projects" className={`${darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'} backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`rounded-2xl border border-transparent backdrop-blur-sm p-6 ${
                darkMode 
                  ? 'bg-gray-900/50 hover:border-pink-500/20' 
                  : 'bg-white/50 hover:border-pink-500/20'
              } transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10`}
            >
              {/* Project Icon */}
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-purple-500/20' : 'bg-pink-500/20'
                }`}>
                  <Github 
                    size={32} 
                    className={darkMode ? 'text-purple-400' : 'text-pink-600'} 
                  />
                </div>
              </div>
              
              {/* Project Content */}
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 text-center">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-center">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode
                        ? 'bg-purple-500/20 text-purple-300'
                        : 'bg-pink-500/20 text-pink-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* GitHub Link */}
              <div className="flex justify-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}