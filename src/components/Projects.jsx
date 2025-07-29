import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "FNP 2.0",
    image: "/images/fnp2.png",
    description: "A fully interactive 3D portfolio using React, Three.js, and Tailwind.",
    link: "https://fnp2-0.vercel.app/",
  },
  {
    title: "Music Player",
    image: "/images/music-player.png",
    description: "A personalized multi-page web experience with animations, sound, and Spanish flair.",
    link: "",
  },
  {
    title: "Weather App",
    image: "/images/weatherapp.png",
    description: "Weather app built with React & OpenWeather API.",
    link: "https://weather-app-three-gilt-25.vercel.app/",
  },
  {
    title: "For Loved Ones",
    image: "/images/cheer.png",
    description: "A personal cheering-up web project with emotional and creative design elements.",
    link: "https://abu-doc.github.io/Cheer/",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.7,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-[#1e0025] to-black text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:scale-[1.03] transition duration-300 shadow-purple-900 shadow-lg"
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                🔗 Visit Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
