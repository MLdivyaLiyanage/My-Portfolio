import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faBootstrap,
  faNodeJs,
  faPython,
  faPhp,
  faJava,
  faGithub,
  faMicrosoft,
  faAndroid,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCloud, faWind, faCode, faPaperPlane, faMobile, faFire } from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "Tailwind CSS", icon: faWind },
    { name: "Bootstrap", icon: faBootstrap },
    { name: "Git", icon: faGitAlt },
    { name: "RESTful APIs", icon: faCloud },
  ];

  const backendSkills = [
    { name: "Node.js", icon: faNodeJs },
    { name: "Python", icon: faPython },
    { name: "PHP", icon: faPhp },
    { name: "Java", icon: faJava },
    { name: "MySQL", icon: faDatabase },
    { name: "SQLite", icon: faDatabase },
    { name: "Oracle", icon: faDatabase },
    { name: "Postman", icon: faPaperPlane },
    { name: "GitHub", icon: faGithub },
    { name: "Firebase", icon: faFire },
  ];

  const otherSkills = [
    { name: "C", icon: faCode },
    { name: "C# (.NET)", icon: faMicrosoft },
    { name: "Kotlin", icon: faAndroid },
    { name: "Android", icon: faMobile },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Helper function to render the appropriate icon
  const renderIcon = (icon) => {
    return <FontAwesomeIcon icon={icon} className="text-2xl" />;
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies I've worked with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Frontend Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-400">Frontend</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              {frontendSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-all duration-300">
                    {renderIcon(skill.icon)}
                  </div>
                  <span className="text-gray-300 text-sm text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400">Backend</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {backendSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-2 group-hover:bg-cyan-500/20 transition-all duration-300">
                    {renderIcon(skill.icon)}
                  </div>
                  <span className="text-gray-300 text-xs text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Other Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-400">Other</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {otherSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-all duration-300">
                    {renderIcon(skill.icon)}
                  </div>
                  <span className="text-gray-300 text-sm text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};