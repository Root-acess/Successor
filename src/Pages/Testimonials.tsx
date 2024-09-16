import React from 'react';

const TestimonialsWithStats: React.FC = () => {
  return (

      <div className="overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:bg-neutral-950">
        <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

          <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
              Trusted by Corporate Leaders and Entrepreneurs Worldwide
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="flex h-auto">
              <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900 shadow-lg">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-black dark:text-neutral-200">
                    "Successor's social media strategies have revolutionized our online presence. Our engagement rates have doubled, and the customer loyalty programs they implemented helped us retain clients."
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                  <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                      <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                    </div>

                    <div className="grow">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                        Sarah Mitchell
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        Marketing Director | InnovateCorp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="flex h-auto">
              <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900 shadow-lg">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-black dark:text-neutral-200">
                    "The Successor team helped us streamline our digital campaigns and increased our ROI by 35% in just three months. Their data-driven approach sets them apart."
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                  <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                      <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                    </div>

                    <div className="grow">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                        Mike Johnson
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        CEO | Horizon Enterprises
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex h-auto">
              <div className="flex flex-col bg-white rounded-xl dark:bg-neutral-900 shadow-lg">
                <div className="flex-auto p-4 md:p-6">
                  <p className="text-base italic md:text-lg text-black dark:text-neutral-200">
                    "Their strategies not only brought us more clients but also helped build a recognizable brand in our niche. Couldn't be happier with the results!"
                  </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                  <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                      <img className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                    </div>

                    <div className="grow">
                      <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                        Alisa Williams
                      </p>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        Entrepreneur | Happy Client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>



          <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">

            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-700">Customer Satisfaction</h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">98%</p>
              <p className="mt-1 text-gray-400">Across all projects</p>
            </div>



            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-700">Businesses Empowered</h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">1,500+</p>
              <p className="mt-1 text-gray-400">Growing successfully</p>
            </div>



            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-700">Return on Investment</h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">35%</p>
              <p className="mt-1 text-gray-400">Increase in just 3 months</p>
            </div>

          </div>

        </div>
      </div>

  );
};

export default TestimonialsWithStats;
