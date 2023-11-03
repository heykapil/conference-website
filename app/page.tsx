import { siteMetadata } from "@/lib/data/siteMetadata";

export default function Home() {
  return (
    <>
      <section
        aria-labelledby="feature-five"
        id="feature-five"
        className="overflow-y-auto lg:h-screen"
      >
        <svg
          className="animate-beam pointer-events-none absolute left-0 top-0 z-[-1] h-[169%] w-[138%] lg:w-[84%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter0_f_1065_8)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              fill="white"
              fillOpacity="0.21"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter0_f_1065_8"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
        <div
          className="w-full h-[90vh] bg-cover bg-center bg-fit"
          style={{
            backgroundImage: `url(${siteMetadata.HeroBannerDark})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full opacity-100 py-12">
            <div className="text-center">
              <div className=" px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="text-gray-200 font-semibold uppercase tracking-widest">
                    {siteMetadata.university}
                  </span>
                  <h2 className="mt-8 mb-6 text-3xl lg:text-4xl font-bold text-gray-100">
                    {siteMetadata.title}
                  </h2>
                  <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                    {siteMetadata.time}
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
      </section>
    </>
  );
}
