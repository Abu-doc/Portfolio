import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-purple-950/60 backdrop-blur-md text-white py-6 px-8 flex flex-col md:flex-row items-center justify-between border-t border-purple-600">
      <p className="text-sm font-light text-purple-100 mb-2 md:mb-0">
        "Crafted with love and coffee. — Abu Bakar"
      </p>

      <div className="flex space-x-4 text-purple-300 text-lg">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
