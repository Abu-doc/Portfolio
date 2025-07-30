import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={40} color="#FF5722" />, name: 'HTML' },
  { icon: <FaCss3Alt size={40} color="#2196F3" />, name: 'CSS' },
  { icon: <FaJsSquare size={40} color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <FaReact size={40} color="#61DAFB" />, name: 'React' },
  { icon: <SiTailwindcss size={40} color="#38BDF8" />, name: 'Tailwind' },
  { icon: <FaNodeJs size={40} color="#8CC84B" />, name: 'Node.js' },
  { icon: <SiCplusplus size={40} color="#4DB33D" />, name: 'C++' },
  { icon: <FaGitAlt size={40} color="#F1502F" />, name: 'Git' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-black to-indigo-900" id='skills'>
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-purple-500 hover:shadow-purple-700"
            variants={itemVariants}
          >
            <div className="mb-3">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
