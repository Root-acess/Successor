import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative overflow-hidden text-light py-10 bg-black text-center border-t border-neutral-800"
      style={{ color: '#dcdcdc' }}
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(25,25,25,0.6) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">

          {/* BRAND NAME */}
          <div className="mb-4">
            <a
              className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-300"
              href="#"
              aria-label="SupportTech X"
            >
              SupportTech X
            </a>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-6">
            <p className="text-gray-400">
              Hyderabad’s trusted partner for domain & hosting setup, website development,  
              and on-site IT support.
            </p>

            <p className="text-gray-500 mt-2">
              © {new Date().getFullYear()} SupportTech X. All Rights Reserved.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center space-x-6">

            {/* Instagram */}
            <a
              className="relative flex items-center justify-center text-gray-400 hover:text-pink-400 transition-colors duration-300"
              href="https://instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <svg
                className="w-7 h-7 transition-transform duration-300 hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 3.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3zm0 2A2.7 2.7 0 1 1 9.3 12 2.7 2.7 0 0 1 12 9.3zm4.8-2.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              className="flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors duration-300"
              href="https://linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <svg
                className="w-7 h-7 transition-transform duration-300 hover:scale-110"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 0h13A1.5 1.5 0 0 1 16 1.5v13A1.5 1.5 0 0 1 14.5 16h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0zM5 6H3v8h2V6zm-1-1.5a1 1 0 1 1 .001-2.001A1 1 0 0 1 4 4.5zm3 1.5H5v8h2v-4.3c0-.9.5-1.7 1.5-1.7S10 8.8 10 9.7V14h2V9.4c0-2.2-1.3-3.4-3-3.4S7 7.2 7 8.2V6z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              className="flex items-center justify-center text-gray-400 hover:text-gray-200 transition-colors duration-300"
              href="https://github.com/"
              target="_blank"
              aria-label="GitHub"
            >
              <svg
                className="w-7 h-7 transition-transform duration-300 hover:scale-110"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 .2a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2 .4-2.5-.9-2.6-1.3-.1-.3-.6-1.3-1-1.6-.3-.2-.7-.6-.1-.6.7 0 1.1.7 1.3 1 .8 1.4 2.1 1 2.6.8.1-.6.4-1 .7-1.3-1.8-.2-3.6-.9-3.6-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1.2.1-2.5 0 0 .7-.2 2.3 1a7.6 7.6 0 0 1 4 0c1.6-1.2 2.3-1 2.3-1 .5 1.3.2 2.3.1 2.5.5.6.8 1.4.8 2.2 0 3.1-1.9 3.8-3.7 4 .4.3.7.9.7 1.8v2c0 .2.2.5.5.4A8 8 0 0 0 8 .2z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
