// src/components/Hero.jsx
import './Hero.css'
import Bg from "../bg/Bg"; // Import the custom background component

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black" aria-label="Hero section">
      {/* Bg Component with Animation */}
      <div className="absolute inset-0 z-0">
        <Bg />
      </div>

      {/* Overlay for enhanced readability */}
      <div className="absolute inset-0 bg-black opacity-80 z-10" aria-hidden="true"></div>

      <div className="relative z-20 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-gray-800 border border-gray-600 text-xs text-gray-300 p-2 px-3 rounded-full transition hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            href="#services"
            aria-label="Explore SupportTech X services"
          >
            Serving Hyderabad & Surrounding Areas
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-600 text-blue-400 ps-2">
                Local Packages
              </span>
              <svg
                className="shrink-0 w-4 h-4 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>

        {/* Title */}
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            SupportTechX
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-400">
            We provide local-first solutions for small businesses in Hyderabad — domain & hosting setup, website development, managed IT and on-site technical support. Fast, friendly, and priced for local businesses.
          </p>
        </div>

        {/* Service badges (quick highlights) */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700">Domain & Hosting</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700">Local On-site Support</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700">Monthly Maintenance</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          {/* BUTTON 1: Redirects to Email */}
          <a
            className="inline-flex items-center gap-x-3 bg-gradient-to-tl from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border border-transparent text-white text-sm font-medium rounded-full py-3 px-5"
            href="mailto:hr.successor@lookout.com" // UPDATED: Mailto link
            aria-label="Email SupportTech X"
          >
            {/* simple SVG phone icon (can be changed to an envelope/mail icon for better context) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {/* Phone Icon used in original code - keeping for consistency, but consider changing to mail icon */}
              <path d="M22 16.92V21a1 1 0 0 1-1.11 1A19 19 0 0 1 3 4.11 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.66.37 1.3.72 1.87a1 1 0 0 1-.24 1.11L8.91 8.91a15 15 0 0 0 6.18 6.18l1.18-1.18a1 1 0 0 1 1.11-.24c.57.35 1.21.6 1.87.72a1 1 0 0 1 .75 1V22z" />
            </svg>
            Email HR Team
          </a>

          {/* BUTTON 2: Redirects to Call */}
          <a
            className="inline-flex items-center gap-x-2 text-sm text-gray-300 hover:text-white py-3 px-4 rounded-full focus:outline-none"
            href="tel:+9189844435551" // UPDATED: Tel link with the new number
            aria-label="Call SupportTech X"
          >
            Call: +91 8984 443 5551
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
