import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full px-4 py-12 bg-gradient-to-br from-black via-[#1c0f2b] to-black flex flex-col md:flex-row items-center justify-center gap-8"
    >
      {/* Text Content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text">
          About Me
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          Hey, I’m{' '}
          <span className="bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent font-semibold">
            Abu Bakar
          </span>{' '}
          — a passionate frontend developer with a creative twist. Right now, I’m
          diving deep into 3D web experiences, blending visuals and interactivity
          using tools like Spline, Three.js, and modern frontend magic. I believe
          design should be felt, not just seen.
          <br />
          <br />
          I’m on a mission to become a full-fledged MERN stack developer, pushing my
          limits beyond the frontend into the world of scalable, full-stack applications.
          <br />
          <br />
          And well, if you know me, you already know — I’m not just building websites,
          I’m crafting vibes, motion, and emotion in every line of code. Let’s make
          the web not just functional, but freaking unforgettable.
        </p>

        <p className="italic text-gray-400 text-sm">
          "I don’t just write code. I shape experiences."
        </p>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Spline Model */}
      <motion.div
        className="md:w-1/2 w-full h-[400px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Spline scene="https://prod.spline.design/l7lsCJAqWtp1NQ3t/scene.splinecode" />
      </motion.div>
    </div>
  );
};

export default About;
