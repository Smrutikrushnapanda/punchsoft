import React from "react";
import InnerHeader from "@/components/InnerHeader";
function itsecurity() {
  return (
    <>
      <InnerHeader />
      <div className="container mx-auto px-4  py-10">
        <div className="grid grid-cols-12 pb-10 gap-8 items-center">
          {/* Text Section */}
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              IT SECURITY SOLUTION
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Now bridge the gaps in the security industry, we are introducing
              IT security solutions you can rely on. Which assists you in
              maintaining a secure operating environment without the need for a
              full-fledged Security Operations Center. Our Network Security
              Assessment, Identity & access management, and Web Application
              Security solutions enable you to make faster and better security
              decisions while using fewer resources. Safeguarding your business
              from various security threats that exploit weaknesses in the code
              of an application is easier with our solutions. Intelligent,
              modern identification solutions deliver a smooth and secure
              experience for every user, asset, and data interaction, providing
              the foundation for a network security strategy.
            </p>
            <div className="flex justify-center mt-10">
              <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-indigo-700 rounded-md group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
                <span className="relative text-base font-semibold">
                  Get Started !
                </span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-span-12 md:col-span-6">
            <img
              src="/images/global-data-security.png"
              alt="global-data-security"
              className="h-auto w-[500px] block mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default itsecurity;
