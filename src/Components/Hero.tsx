import './Hero.css'
import Bg from "../bg/Bg"; // Import the custom background component

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Bg Component with Animation */}
      <div className="absolute inset-0 z-0">
        <Bg />
      </div>

      {/* Overlay for enhanced readability */}
      <div className="absolute inset-0 bg-black opacity-80 z-2"></div>

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-gray-800 border border-gray-600 text-xs text-gray-300 p-2 px-3 rounded-full transition hover:border-gray-500 focus:outline-none focus:border-gray-500"
            href="#"
          >
            Explore Our Cutting-Edge Solutions
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-600 text-blue-500 ps-2">
                Learn More
              </span>
              <svg
                className="shrink-0 size-4 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>

        {/* Title */}
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl">
            Supercharge Your Brand with Successor Agency
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-400">
            At Successor, we create data-driven social media strategies that elevate your brand's presence, engagement, and conversion—because your growth is our mission.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8 gap-3 flex justify-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-gray-700 to-gray-900 hover:from-gray-900 hover:to-gray-700 focus:outline-none border border-transparent text-white text-sm font-medium rounded-full py-3 px-4"
            href="./contact"
          >
            <i className="fab fa-google fa-2x"></i>
            Let's Grow Your Business
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
