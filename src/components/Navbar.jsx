import React from 'react';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Skills' , 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-purple-950/30 backdrop-blur-md border-b border-purple-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xs italic text-gray-400">
  “Muchas gracias afición, esto es para vosotros… ¡Siuuu!”
</div>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-purple-300 hover:text-white transition-all duration-200 text-sm tracking-wide"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
