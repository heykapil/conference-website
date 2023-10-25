import Image from "next/image";

export default function Home() {
  return (
    <section
      aria-labelledby="feature-five"
      id="feature-five"
      className="overflow-y-auto lg:h-screen bg-white text-black z-1"
    >
      <div
        // alt="conference"
        className="w-full h-screen bg-cover bg-center bg-[url('/headway-F2KRf_QfCqw-unsplash.jpg')] bg-fit bg-opacity-50"
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">
                  Falana and Dhimka presents
                </span>
                <h2 className="mt-8 mb-6 text-3xl lg:text-4xl font-bold text-gray-100">
                  This and that name of the conference
                </h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Date, Time and Venue of the conference.
                </p>
                <a
                  className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                  href="#"
                >
                  Registration are open!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-24 mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
        <div className="lg:w-1/2">
          <div className="top-0 pt-8 pb-16 lg:sticky">
            <div>
              <div className="lg:pr-24 md:pr-12">
                <div>
                  <p className="text-2xl pt-0 md:pt-24 font-medium tracking-tight text-black sm:text-4xl">
                    Topics covered
                  </p>
                  <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                    Date and Venue. Hosted by?
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <a
                    href="#"
                    className="items-center justify-center w-full px-6 py-2.5  text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    Registration
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  >
                    Learn more &nbsp; →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex-shrink-0">
            <div>
              <ul
                className="grid grid-cols-1 gap-12 mt-6 list-none lg:mt-0 lg:gap-24"
                role="list"
              >
                <li>
                  
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
