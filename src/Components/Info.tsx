const Info = () => {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black text-white" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png"), linear-gradient(90deg, #0d0d0d 0%, #1c1c1c 100%)' }}>
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          
          {/* Text Section (On Left) */}
          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-6"> 
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white leading-tight max-w-lg">
                  Collaborative tools to design user experience
                </h2>
                <p className="text-gray-300 max-w-lg">
                  Use our tools to explore your ideas and make your vision come true. Then share your work easily.
                </p>
              </div>
              <ul className="space-y-4 max-w-lg">
                <li className="flex gap-x-4 items-center">
                  <span className="size-6 flex justify-center items-center rounded-full bg-blue-600 text-white p-2">
                    <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-300">
                      <span className="font-bold">Less routine</span> – more creativity
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-4 items-center">
                  <span className="size-6 flex justify-center items-center rounded-full bg-blue-600 text-white p-2">
                    <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-300">
                      Hundreds of thousands saved
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-4 items-center">
                  <span className="size-6 flex justify-center items-center rounded-full bg-blue-600 text-white p-2">
                    <svg className="shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-gray-300">
                      Scale budgets <span className="font-bold">efficiently</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Image Section (On Right) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center lg:translate-x-5">
              <div className="col-span-4">
                <img className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
              </div>
              <div className="col-span-3">
                <img className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
              </div>
              <div className="col-span-5">
                <img className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300" src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" alt="Features Image"/>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Info;
  