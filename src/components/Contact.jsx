import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaInstagram } from 'react-icons/fa';


// Toast Component
const Toast = ({ message, type, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white text-sm z-[100] ${
        type === 'success' ? 'bg-purple-600' : 'bg-red-600'
      }`}
    >
      {message}
    </motion.div>
  );
};

const Contact = () => {
  const [showButton, setShowButton] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledToBottom = scrollTop + windowHeight >= documentHeight * 0.7;
      setShowButton(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_08a4tad', 'template_6tp1kcd', e.target, 'gF-Fk_oIYw8bsfKgG')
      .then(() => {
        showToast('Message sent successfully!', 'success');
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        showToast('Failed to send message. Try again later.', 'error');
      });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-[#1f0037] via-[#0f001e] to-[#2c0066] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-md border border-white/10 space-y-6"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 h-32 rounded-md bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md w-full transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>

      <div className="flex justify-center gap-6 mt-8 text-2xl">
        <a
          href="https://github.com/Abu-doc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaGithub />
        </a>
        <a href="mailto:abubakar@gmail.com" className="hover:text-purple-400">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/abu-bakar7/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaLinkedin />
        </a>
         <a
          href="https://www.instagram.com/itzzabubakarr/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaInstagram />
        </a>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 opacity-50 right-6 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md z-50 transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}

      <AnimatePresence>
        {toast && (
          <Toast
            key={toast.message}
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
