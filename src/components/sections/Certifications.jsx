import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../layout/Section";
import { ExternalLink, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Certificates({ darkMode }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      name: "Google Cybersecurity Professional Certificate",
      company: "Google",
      category: "Cybersecurity",
      date: "Sep 2025",
      credentialId: "professional-cert/7DZHZ5K79R52",
      credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/7DZHZ5K79R52",
      skills: ["Cybersecurity Risk Assessment", "Network Security", "Linux & SQL", "Incident Response", "Python", "AI-Powered Job Search"]
    },
    {
      name: "Automate Cybersecurity Tasks with Python",
      company: "Google",
      category: "Programming & Security",
      date: "Sep 2025",
      credentialId: "VP6G85C0G7KV",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VP6G85C0G7KV",
      skills: ["Python Programming", "Security Automation", "Threat Detection", "Log Analysis", "Workflow Optimization"]
    },
    {
      name: "Sound the Alarm: Detection and Response",
      company: "Google",
      category: "Security Operations",
      date: "Sep 2025",
      credentialId: "15FJAYR7SGUP",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/15FJAYR7SGUP",
      skills: ["Incident Detection", "Threat Analysis", "Response Planning", "Malware Investigation", "Security Reporting"]
    },
    {
      name: "Play It Safe: Manage Security Risks",
      company: "Google",
      category: "Risk Management",
      date: "Sep 2025",
      credentialId: "MMTTQLM2ZOO9",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/MMTTQLM2ZOO9",
      skills: ["Risk Assessment", "Threat Mitigation", "Data Protection", "Vulnerability Management", "Incident Response"]
    },
    {
      name: "Assets, Threats, and Vulnerabilities",
      company: "Google",
      category: "Security Analysis",
      date: "Sep 2025",
      credentialId: "ZWNGCIISCUJ8",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/ZWNGCIISCUJ8",
      skills: ["Threat Analysis", "Risk Assessment", "Security Controls", "Vulnerability Detection", "Asset Classification"]
    },
    {
      name: "Connect and Protect: Networks and Network Security",
      company: "Google",
      category: "Network Security",
      date: "Sep 2025",
      credentialId: "8J3O5O7ECPDZ",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/8J3O5O7ECPDZ",
      skills: ["Network Security", "Secure Design", "Firewall/IPS", "Encryption", "Threat Mitigation"]
    },
    {
      name: "Tools of the Trade: Linux and SQL",
      company: "Google",
      category: "Technical Skills",
      date: "Sep 2025",
      credentialId: "72TI8XECP3MU",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/72TI8XECP3MU",
      skills: ["Linux Command Line", "Shell Scripting", "SQL Querying", "Database Management", "Access Control"]
    },
    {
      name: "Put It to Work: Prepare for Cybersecurity Jobs",
      company: "Google",
      category: "Career Development",
      date: "Sep 2025",
      credentialId: "82DRMTLL0BR8",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/82DRMTLL0BR8",
      skills: ["Career Readiness", "Resume Development", "Interview Preparation", "Job Search Strategies", "Professional Communication"]
    },
    {
      name: "Accelerate Your Job Search with AI",
      company: "Google",
      category: "Career Development",
      date: "Sep 2025",
      credentialId: "BO9WBAAK0B7Q",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/BO9WBAAK0B7Q",
      skills: ["AI Resume Optimization", "AI Job Matching", "Personal Branding", "Application Automation", "AI Interview Prep"]
    },
    {
      name: "Python for Programmers",
      company: "IBM",
      category: "Programming",
      date: "Aug 2025",
      credentialId: "IBM-PYTHON-2025",
      credentialUrl: "https://skills.yourlearning.ibm.com/certificate/URL-806B8D9B07FD",
      skills: ["Python Programming", "Algorithm Development", "Problem Solving", "Code Optimization"]
    },
    {
      name: "Cloud Computing Fundamentals",
      company: "IBM",
      category: "Cloud Computing",
      date: "Jul 2025",
      credentialId: "IBM-CLOUD-2025",
      credentialUrl: "https://www.credly.com/badges/5ffc15f4-96be-4d8b-9586-a8ee38c51ebb",
      skills: ["Cloud Architecture", "Virtualization", "Cloud Services", "Deployment Models"]
    },
    {
      name: "Cybersecurity Fundamentals",
      company: "IBM",
      category: "Cybersecurity",
      date: "Jul 2025",
      credentialId: "IBM-CYBERSEC-2025",
      credentialUrl: "https://www.credly.com/badges/115ec705-f0d4-46d7-8500-d58d300115e5",
      skills: ["Threat Detection", "Threat Analysis", "Security Principles", "Risk Assessment"]
    },
    {
      name: "Introduction to Cybersecurity",
      company: "Cisco",
      category: "Cybersecurity Fundamentals",
      date: "Jun 2025",
      credentialId: "CISCO-INTRO-2025",
      credentialUrl: "#",
      skills: ["Network Security", "Risk Management", "Data Protection", "Online Safety", "Threat Awareness"]
    },
    {
      name: "Foundations of Cybersecurity",
      company: "Google",
      category: "Cybersecurity Fundamentals",
      date: "Jul 2025",
      credentialId: "735Q4FUXMCUN",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/735Q4FUXMCUN",
      skills: ["Risk Management", "Security Principles", "Threat Types", "Authentication", "Security Frameworks"]
    },
    {
      name: "Cybersecurity and Digital Forensics",
      company: "KNUST - CCBI",
      category: "Digital Forensics",
      date: "Sep 2023",
      credentialId: "CCBI-KNUST-2023",
      credentialUrl: "#",
      skills: ["Cybercrime Detection", "Incident Response", "Digital Evidence", "Linux Kernel", "File System Analysis"]
    },
  ];

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);
  const remainingCount = certificates.length - 3;

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <Section id="certificates" className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {displayedCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.credentialId}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`rounded-2xl border border-transparent backdrop-blur-sm p-6 ${
                  darkMode 
                    ? 'bg-gray-900/50 hover:border-pink-500/20' 
                    : 'bg-gray-50/50 hover:border-pink-500/20'
                } transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-pink-500/20 text-pink-700'
                  }`}>
                    {certificate.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {certificate.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {certificate.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {certificate.company}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {certificate.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 rounded-full text-xs ${
                        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>
                      +{certificate.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(certificate)}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <ExternalLink size={16} />
                    Details
                  </button>
                  
                  {certificate.credentialUrl !== "#" && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-sm"
                    >
                      Verify
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {!showAll && remainingCount > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={() => setShowAll(true)}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <span>Show All Certificates</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-pink-500/20 text-pink-700'
                }`}>
                  +{remainingCount}
                </span>
                <ChevronDown size={20} />
              </button>
            </motion.div>
          )}

          {showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <button
                onClick={() => setShowAll(false)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronUp size={20} />
                <span>Show Less</span>
              </button>
            </motion.div>
          )}
        </div>
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-pink-500/20 text-pink-700'
                    }`}>
                      {selectedCertificate.category}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Issued {selectedCertificate.date} • {selectedCertificate.company}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
                    }`}
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {selectedCertificate.name}
                </h3>

                {selectedCertificate.credentialId && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Credential ID: {selectedCertificate.credentialId}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedCertificate.credentialUrl !== "#" && (
                  <a
                    href={selectedCertificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    View Official Credential
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}