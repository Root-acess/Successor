import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative overflow-hidden text-light py-5 bg-black text-center"
      style={{ color: '#e0e0e0' }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(18, 18, 18, 0.6)', // Semi-transparent overlay
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <a className="text-xl font-semibold hover:text-gray-400 transition-colors duration-300" href="#" aria-label="Brand">
              Successor India
            </a>
          </div>

          <div className="mb-4">
            <p className="text-light">
              We're part of the{' '}
              <a
                className="text-blue-400 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                href="#"
              >
                Successor Network
              </a>{' '}
              family.
            </p>
            <p className="text-light">© Successor SMMA. 2024. All rights reserved.</p>
          </div>

          <div className="flex justify-center space-x-4">
            {/* Instagram Icon with Decorative Element */}
            <a
              className="relative flex items-center justify-center text-light hover:text-pink-300 transition-colors duration-300"
              href="https://www.instagram.com/yourprofile"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
              <span className="absolute -right-2 -top-2 w-3 h-3 bg-pink-500 rounded-full transform rotate-45"></span>
            </a>

            {/* Twitter Icon */}
            <a
              className="relative flex items-center justify-center text-light hover:text-blue-400 transition-colors duration-300"
              href="https://twitter.com/yourprofile"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>

            {/* GitHub Icon */}
            <a
              className="relative flex items-center justify-center text-light hover:text-gray-400 transition-colors duration-300"
              href="https://github.com/yourprofile"
              aria-label="Github"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              className="relative flex items-center justify-center text-light hover:text-blue-500 transition-colors duration-300"
              href="https://www.linkedin.com/in/yourprofile"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13A1.5 1.5 0 0 0 16 14.5v-13A1.5 1.5 0 0 0 14.5 0h-13zM5.4 13.95H3.24V6.21h2.16v7.74zM4.32 5.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm9.18 8.7h-2.16v-3.83c0-.92-.02-2.11-1.29-2.11-1.3 0-1.5 1.02-1.5 2.07v3.88H7.48V6.21h2.08v1.05h.03c.29-.55 1.01-1.13 2.08-1.13 2.23 0 2.63 1.47 2.63 3.38v4.34z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
