const Info = () => {
  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black text-white"
      style={{
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/cubes.png"), linear-gradient(90deg, #0a0a0a 0%, #151515 100%)',
      }}
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

        {/* LEFT TEXT */}
        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-6">
          <div className="space-y-6 sm:space-y-8">

            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl leading-tight max-w-lg">
                Reliable IT Solutions Designed for Your Business Growth
              </h2>

              <p className="text-gray-300 max-w-lg">
                SupportTech X provides end-to-end IT services — from domain & hosting setup
                to website development, on-site tech support, and managed maintenance.
                Built for businesses in Hyderabad looking for fast, affordable, and dependable solutions.
              </p>
            </div>

            {/* FEATURE LIST */}
            <ul className="space-y-4 max-w-lg">

              <li className="flex gap-x-4 items-center">
                <span className="size-6 flex justify-center items-center rounded-full bg-blue-600 text-white p-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-300">
                  <span className="font-bold">Faster Setup</span> — domain, hosting & website ready in record time.
                </span>
              </li>

              <li className="flex gap-x-4 items-center">
                <span className="size-6 flex justify-center items-center rounded-full bg-blue-600 text-white p-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-300">
                  Save money with <span className="font-bold">local & affordable</span> IT support in Hyderabad.
                </span>
              </li>

              <li className="flex gap-x-4 items-center">
                <span className="size-6 flex justify-center items-center rounded-full bg-blue-600 text-white p-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-300">
                  <span className="font-bold">Scale confidently</span> with continuous support & maintenance.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center lg:translate-x-5">

            <div className="col-span-4">
              <img
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=900&q=80"
                alt="IT Support"
              />
            </div>

            <div className="col-span-3">
              <img
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="Server & Hosting Setup"
              />
            </div>

            <div className="col-span-5">
              <img
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                src="https://images.unsplash.com/photo-1551033406-c47e2a1d2dc1?auto=format&fit=crop&w=900&q=80"
                alt="Website Development"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Info;
