const Explore = () => {
  return (
    <div className="bg-black px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 className="text-3xl lg:text-4xl text-white font-bold">
          Explore Our Services
        </h2>
        <p className="mt-3 text-gray-600">
          Innovative solutions to elevate your online presence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="group flex flex-col gap-y-6 hover:bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 transition duration-300 ease-in-out">
          <svg
            className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
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
            <path d="M12 2v20m10-10H2" />
          </svg>
          <div className="flex-grow">
            <h3 className="block font-bold text-gray-800 dark:text-white">
              Social Media Marketing
            </h3>
            <p className="text-gray-600 dark:text-neutral-400">
              Boost your brand visibility and engage with your audience effectively.
            </p>
          </div>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Learn more
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
          </p>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col gap-y-6 hover:bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 transition duration-300 ease-in-out">
          <svg
            className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
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
            <path d="M21 12H3m18 0v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
          </svg>
          <div className="flex-grow">
            <h3 className="block font-bold text-gray-800 dark:text-white">
              SEO Optimization
            </h3>
            <p className="text-gray-600 dark:text-neutral-400">
              Increase your organic traffic and rank higher on search engines.
            </p>
          </div>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Learn more
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
          </p>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col gap-y-6 hover:bg-gray-100 rounded-lg p-5 dark:hover:bg-neutral-800 transition duration-300 ease-in-out">
          <svg
            className="shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
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
            <path d="M2 3h20v18H2V3z" />
          </svg>
          <div className="flex-grow">
            <h3 className="block font-bold text-gray-800 dark:text-white">
              Content Marketing
            </h3>
            <p className="text-gray-600 dark:text-neutral-400">
              Create compelling content that drives engagement and conversions.
            </p>
          </div>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Learn more
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
