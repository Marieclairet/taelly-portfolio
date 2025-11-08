import React from "react";
import { motion } from "framer-motion";
import Section from "../layout/Section";

export default function About({ darkMode }) {
  return (
    <Section id="about" className={`${darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'} backdrop-blur-sm`}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-4xl font-bold mb-8 -mt-8 text-center"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
            I'm Taelly, a passionate Computer Science student specializing in Cybersecurity and Web Development.
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Passionate about building secure, scalable digital solutions and 
            exploring the intersection of technology and security. With a strong 
            foundation in both frontend and backend development, I strive to create 
            applications that are not only functional but also secure by design.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}