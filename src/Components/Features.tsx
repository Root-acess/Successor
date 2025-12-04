const FeatureItem = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
      <div className="relative p-6 md:p-16">

        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* LEFT: TEXT + TABS */}
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            
            <h2 className="text-3xl text-white font-bold sm:text-4xl">
              Your Local Tech Partner in Hyderabad
            </h2>

            <p className="mt-3 text-gray-400">
              SupportTech X provides complete IT support, domain & hosting setup, website
              development, cloud backup solutions, and maintenance for local businesses.
            </p>

            {/* TABS */}
            <nav 
              className="grid gap-4 mt-7 md:mt-10" 
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              {/* TAB 1 */}
              <button 
                type="button"
                className="hs-tab-active:bg-white/10 hs-tab-active:border-blue-500 text-start border border-gray-700 hover:bg-white/10 p-4 md:p-5 rounded-xl transition active"
                id="tabs-with-card-item-1"
                aria-selected="true"
                data-hs-tab="#tabs-with-card-1"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <svg 
                    className="shrink-0 mt-2 size-7 text-blue-400"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 17v-2h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
                    <path d="M12 3v12" />
                  </svg>

                  <span className="grow">
                    <span className="block text-lg font-semibold text-white">Domain & Hosting Setup</span>
                    <span className="block mt-1 text-gray-400">
                      Get affordable domain registration, secure hosting, and full setup done for your business.
                    </span>
                  </span>
                </span>
              </button>

              {/* TAB 2 */}
              <button 
                type="button"
                className="hs-tab-active:bg-white/10 hs-tab-active:border-blue-500 text-start border border-gray-700 hover:bg-white/10 p-4 md:p-5 rounded-xl transition"
                id="tabs-with-card-item-2"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-2"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <svg 
                    className="shrink-0 mt-2 size-7 text-blue-400"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v6H4z" />
                    <path d="M4 14h16v6H4z" />
                  </svg>

                  <span className="grow">
                    <span className="block text-lg font-semibold text-white">On-Site IT Support</span>
                    <span className="block mt-1 text-gray-400">
                      We provide technician visits anywhere in Hyderabad for installation, repair, and setup.
                    </span>
                  </span>
                </span>
              </button>

              {/* TAB 3 */}
              <button 
                type="button"
                className="hs-tab-active:bg-white/10 hs-tab-active:border-blue-500 text-start border border-gray-700 hover:bg-white/10 p-4 md:p-5 rounded-xl transition"
                id="tabs-with-card-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-3"
                role="tab"
              >
                <span className="flex gap-x-6">
                  <svg 
                    className="shrink-0 mt-2 size-7 text-blue-400"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12h18M12 3v18" />
                  </svg>

                  <span className="grow">
                    <span className="block text-lg font-semibold text-white">Business Website Development</span>
                    <span className="block mt-1 text-gray-400">
                      Modern, fast, mobile-friendly websites built to grow your local business.
                    </span>
                  </span>
                </span>
              </button>

            </nav>
          </div>

          {/* RIGHT: IMAGES */}
          <div className="lg:col-span-6">
            <div className="relative">

              <div>
                {/* Image 1 */}
                <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                  <img 
                    className="shadow-xl rounded-xl"
                    src="https://images.unsplash.com/photo-1581091870634-5dcb0fd2c22b?auto=format&fit=crop&w=560&q=80"
                    alt="Domain and Hosting Support"
                  />
                </div>

                {/* Image 2 */}
                <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                  <img 
                    className="shadow-xl rounded-xl"
                    src="https://images.unsplash.com/photo-1581091870627-3a07b45b3d5d?auto=format&fit=crop&w=560&q=80"
                    alt="On-site IT Support"
                  />
                </div>

                {/* Image 3 */}
                <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                  <img 
                    className="shadow-xl rounded-xl"
                    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=560&q=80"
                    alt="Website Development"
                  />
                </div>
              </div>

              {/* Decorative SVG */}
              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg className="w-16 h-auto text-blue-500" fill="none" viewBox="0 0 121 135">
                  <path d="M5 16.5C12 27.5 21.2 57.3 5 89" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                  <path d="M34 112C45 98 74 57.7 83.5 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                  <path d="M51 130c17-2.5 60-12.5 65-52" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
