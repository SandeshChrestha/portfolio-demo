import React from 'react';

const Header = () => {
  return (
    <header className="bg-zinc-900 text-zinc-200 py-4 sticky top-0 z-50"> {/* Sticky header */}
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Left Side: Portfolio Title */}
        <h1 className="text-2xl md:text-3xl font-serif">My Portfolio</h1>

        {/* Right Side: Navigation Bar */}
        <nav className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
