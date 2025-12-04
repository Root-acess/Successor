const Explore = () => {
  return (
    <div className="bg-black px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      
      {/* Title */}
      <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 className="text-3xl lg:text-4xl text-white font-bold">
          Explore Our IT Services
        </h2>
        <p className="mt-3 text-gray-400">
          Fast, reliable, and affordable tech solutions for businesses in Hyderabad.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Card 1 - DOMAIN & HOSTING */}
        <div className="group flex flex-col gap-y-6 hover:bg-neutral-900 rounded-lg p-5 border border-neutral-800 transition duration-300 ease-in-out">
          <svg
            className="shrink-0 size-10 text-blue-500 mt-0.5 me-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v6H4z" />
            <path d="M4 14h16v6H4z" />
          </svg>

          <div className="flex-grow">
            <h3 className="block font-bold text-white">
              Domain & Hosting Setup
            </h3>
            <p className="text-gray-400">
              Get your business online with fast, secure, and affordable hosting solutions.
            </p>
          </div>

          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-blue-400">
            Learn more
            <svg
              className="shrink-0 size-4 transition-transform group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>

        {/* Card 2 - WEBSITE DEVELOPMENT */}
        <div className="group flex flex-col gap-y-6 hover:bg-neutral-900 rounded-lg p-5 border border-neutral-800 transition duration-300 ease-in-out">
          <svg
            className="shrink-0 size-10 text-blue-500 mt-0.5 me-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M2 17h20v4H2z" />
          </svg>

          <div className="flex-grow">
            <h3 className="block font-bold text-white">
              Website Development
            </h3>
            <p className="text-gray-400">
              Modern, fast, and mobile-friendly websites built to grow your business.
            </p>
          </div>

          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-blue-400">
            Learn more
            <svg
              className="shrink-0 size-4 transition-transform group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>

        {/* Card 3 - ON-SITE IT SUPPORT */}
        <div className="group flex flex-col gap-y-6 hover:bg-neutral-900 rounded-lg p-5 border border-neutral-800 transition duration-300 ease-in-out">
          <svg
            className="shrink-0 size-10 text-blue-500 mt-0.5 me-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.66.37 1.3.72 1.87L9.91 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>

          <div className="flex-grow">
            <h3 className="block font-bold text-white">
              On-Site IT Support (Hyderabad)
            </h3>
            <p className="text-gray-400">
              Technician visits for device setup, troubleshooting, network fixes & more.
            </p>
          </div>

          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-blue-400">
            Learn more
            <svg
              className="shrink-0 size-4 transition-transform group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Explore;
