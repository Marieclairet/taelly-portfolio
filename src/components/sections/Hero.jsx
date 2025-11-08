import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui";
import Section from "../layout/Section";
import { Download } from "lucide-react";

export default function Hero({ darkMode }) {
  const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = `${import.meta.env.BASE_URL || ''}/taelly_cv.pdf`; // Updated path
  link.download = 'taelly_cv.pdf';
  link.click();
};

  return (
    <Section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-3 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left ml-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-4xl font-bold mb-2 mt-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Hi, I'm Taelly
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium"
            >
              Cybersecurity Enthusiast &<br />Full-Stack Developer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              Passionate about building secure, scalable digital solutions and 
              exploring the intersection of technology and security.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="sm"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-sm hover:shadow-pink-500/25"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
              <Button 
                variant="ghost"
                size="sm"
                className="text-pink-500 hover:bg-pink-500/10 border border-transparent hover:border-pink-500/20 transition-all duration-300"
                onClick={handleDownloadCV}
              >
                <Download size={20} className="mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end mr-10 mt-8"
          >
            <div className="relative">
              {/* Your Profile Picture */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="profilepic.jpg" 
                  alt="Taelly"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 text-center">
                Mary Clare Saibert | Cybersecurity Enthusiast 
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}