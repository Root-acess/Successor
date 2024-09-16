import React, { useState } from 'react';
import { Link } from 'react-scroll';
import SettingButton from './Button1';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#ff6f61] to-[#d3a625] text-white w-full py-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" aria-label="Logo" className="text-2xl font-bold hover:text-gray-200 transition-colors">
            Successor
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="hero" smooth={true} duration={500} className="hover:text-gray-200 transition-colors cursor-pointer">Hero</Link>
          <Link to="steps" smooth={true} duration={500} className="hover:text-gray-200 transition-colors cursor-pointer">Steps</Link>
          <Link to="explore" smooth={true} duration={500} className="hover:text-gray-200 transition-colors cursor-pointer">Explore</Link>
          <Link to="testimonials" smooth={true} duration={500} className="hover:text-gray-200 transition-colors cursor-pointer">Testimonials</Link>
          <Link to="faq" smooth={true} duration={500} className="hover:text-gray-200 transition-colors cursor-pointer">FAQ</Link>
          <Link to="features" smooth={true} duration={500} className="hover:text-gray-200 transition-colors cursor-pointer">Features</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
        <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition-colors">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <SettingButton onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#ff6f61] to-[#d3a625] text-white py-2 absolute w-full top-full left-0">
          <Link to="hero" smooth={true} duration={500} className="block px-4 py-2 hover:text-gray-200 cursor-pointer">Hero</Link>
          <Link to="steps" smooth={true} duration={500} className="block px-4 py-2 hover:text-gray-200 cursor-pointer">Steps</Link>
          <Link to="explore" smooth={true} duration={500} className="block px-4 py-2 hover:text-gray-200 cursor-pointer">Explore</Link>
          <Link to="testimonials" smooth={true} duration={500} className="block px-4 py-2 hover:text-gray-200 cursor-pointer">Testimonials</Link>
          <Link to="faq" smooth={true} duration={500} className="block px-4 py-2 hover:text-gray-200 cursor-pointer">FAQ</Link>
          <Link to="features" smooth={true} duration={500} className="block px-4 py-2 hover:text-gray-200 cursor-pointer">Features</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
