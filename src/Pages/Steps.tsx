import ddd from '../assets/ddd.png';

const Steps = () => {
  return (
    <section className="services">
      <div className="bg-black text-white py-5">

        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">

          {/* TITLE */}
          <div className="max-w-3xl mb-10 lg:mb-14 mt-5">
            <h2 className="text-blue-500 font-semibold text-2xl md:text-4xl md:leading-tight">
              How SupportTech X Works
            </h2>
            <p className="mt-2 text-gray-400">
              From consultation to deployment — our structured, reliable, and transparent workflow
              ensures smooth IT operations for your business in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">

            {/* IMAGE */}
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                className="w-full object-cover rounded-xl shadow-lg"
                src={ddd}
                alt="SupportTech X IT Services"
              />
            </div>

            {/* STEPS */}
            <div>
              <div className="mb-4">
                <h3 className="text-blue-500 text-xs font-medium uppercase tracking-wide">
                  PROCESS
                </h3>
              </div>

              <div className="flex flex-col gap-y-8">

                {/* STEP 1 */}
                <div className="flex items-start space-x-4">
                  <span className="flex justify-center items-center w-8 h-8 border-2 border-blue-500 text-blue-500 font-semibold text-xs rounded-full bg-white shadow-lg">
                    1
                  </span>
                  <p className="text-sm lg:text-base text-gray-400">
                    <span className="text-white font-semibold">Requirement Analysis & Consultation:</span>{" "}
                    We understand your business needs — domain, hosting, website, hardware, or 
                    on-site IT support.
                  </p>
                </div>

                {/* STEP 2 */}
                <div className="flex items-start space-x-4">
                  <span className="flex justify-center items-center w-8 h-8 border-2 border-blue-500 text-blue-500 font-semibold text-xs rounded-full bg-white shadow-lg">
                    2
                  </span>
                  <p className="text-sm lg:text-base text-gray-400">
                    <span className="text-white font-semibold">Setup & Deployment:</span>{" "}
                    We perform domain registration, hosting setup, website creation, device installation, 
                    or server configuration based on your needs.
                  </p>
                </div>

                {/* STEP 3 */}
                <div className="flex items-start space-x-4">
                  <span className="flex justify-center items-center w-8 h-8 border-2 border-blue-500 text-blue-500 font-semibold text-xs rounded-full bg-white shadow-lg">
                    3
                  </span>
                  <p className="text-sm lg:text-base text-gray-400">
                    <span className="text-white font-semibold">Testing & Optimization:</span>{" "}
                    We ensure everything runs smoothly — website speed, device stability, network 
                    performance, and security checks.
                  </p>
                </div>

                {/* STEP 4 */}
                <div className="flex items-start space-x-4">
                  <span className="flex justify-center items-center w-8 h-8 border-2 border-blue-500 text-blue-500 font-semibold text-xs rounded-full bg-white shadow-lg">
                    4
                  </span>
                  <p className="text-sm lg:text-base text-gray-400">
                    <span className="text-white font-semibold">Ongoing Support & AMC:</span>{" "}
                    Get on-call and on-site support anytime — including monthly maintenance and 
                    dedicated SupportTech X care.
                  </p>
                </div>

                {/* CTA */}
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-5 bg-blue-600 font-medium text-sm text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition"
                  href="tel:+919876543210"
                >
                  <svg
                    className="shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.66.37 1.3.72 1.87l-1.35 1.35a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Contact SupportTech X
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Steps;
