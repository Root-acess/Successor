import React, { useState } from 'react';
import { Link } from 'react-scroll';
import SettingButton from './Button1'; // Adjust this import based on your folder structure
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon import

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-black text-white w-full py-4 shadow-md sticky top-0 z-50">
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
          <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-gray-200 transition-colors">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-gray-200 transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-gray-200 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <SettingButton onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 shadow-lg transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white hover:text-gray-200"
          aria-label="Close Menu"
        >
          <AiOutlineClose className="w-8 h-8" />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col items-start p-8 space-y-4">
          <Link to="hero" smooth={true} duration={500} className="block text-lg hover:text-gray-200 transition-colors cursor-pointer">Hero</Link>
          <Link to="steps" smooth={true} duration={500} className="block text-lg hover:text-gray-200 transition-colors cursor-pointer">Steps</Link>
          <Link to="explore" smooth={true} duration={500} className="block text-lg hover:text-gray-200 transition-colors cursor-pointer">Explore</Link>
          <Link to="testimonials" smooth={true} duration={500} className="block text-lg hover:text-gray-200 transition-colors cursor-pointer">Testimonials</Link>
          <Link to="faq" smooth={true} duration={500} className="block text-lg hover:text-gray-200 transition-colors cursor-pointer">FAQ</Link>
          <Link to="features" smooth={true} duration={500} className="block text-lg hover:text-gray-200 transition-colors cursor-pointer">Features</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
