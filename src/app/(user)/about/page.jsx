"use client";
import InnerHeader from "@/components/InnerHeader";
import React from "react";

function AboutPage() {
  return (
    <>
      <InnerHeader />
      <div className="container mx-auto px-4  py-10">
        <div className="grid grid-cols-12 pb-10 gap-8 items-center">
          {/* Text Section */}
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              WHO WE ARE
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              We provide infrastructure for online and offline examinations,
              catering to both recruitment and entrance exams. Our extensive
              network of verified testing nodes spans various locations across
              India, providing accessibility and convenience.
              <br />
              <br />
              Additionally, our PAN India association enables us to deliver
              corporate training facilities nationwide. We specialize in
              high-quality online and offline examination solutions, making
              large-scale assessments effortless. Our seasoned professionals are
              committed to delivering integrated and comprehensive services,
              ensuring the seamless organization of top-tier examinations.
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
              src="/images/about.png"
              alt="About Us"
              className="h-auto w-[400px] block mx-auto"
            />
          </div>
        </div>
        <div className="container  bg-[#ECE9FF] mx-auto px-4 pt-10 pb-20">
          <p className="text-[#F7941D] font-semibold mt-4 md:mt-0 text-center">
            <i className="bi bi-arrow-left-right text-[#F7941D] font-bold mr-2"></i>
            About Us
          </p>
          <h2 className="font-semibold text-4xl sm:text-3xl capitalize leading-tight mt-2 mb-10 text-center">
            OUR DEPARTMENTS
          </h2>

          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
              <div>
                <img
                  src="https://www.panchsofttechnologies.com/images/blog/digital.png"
                  alt=""
                  className="rounded h-[250px] w-full"
                />
                <h3 className="text-2xl pt-3 pb-1">Sales & Marketing</h3>
                <p className="text-m pt-3 pb-2 text-gray-600">
                  With their minds always focused on the ethics of service and
                  loyalty towards our clients, the sales & marketing teams stay
                  dedicated to their duty. We always stay dedicated to client
                  satisfaction
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
              <div>
                <img
                  src="https://www.panchsofttechnologies.com/images/blog/opf.jpg"
                  alt=""
                  className="rounded h-[250px] w-full"
                />
                <h3 className="text-2xl pt-3 pb-1">Operations & Finance</h3>
                <p className="text-m pt-3 pb-2 text-gray-600">
                  Our operations team dedicates themselves to ensure that
                  quality services are delivered for clients. They make sure
                  that customer requirements are met on time and efficiently.
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
              <div>
                <img
                  src="https://www.panchsofttechnologies.com/images/blog/2.jpg"
                  alt=""
                  className="rounded h-[250px] w-full"
                />
                <h3 className="text-2xl pt-3 pb-1">Consultant</h3>
                <p className="text-m pt-3 pb-2 text-gray-600">
                  The finance department ensures efficient financial management
                  and financial control necessary to support all business
                  activities. This department ensures smooth function on all
                  fronts.
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
              <div>
                <img
                  src="https://www.panchsofttechnologies.com/images/blog/hr.jpg"
                  alt=""
                  className="rounded h-[250px] w-full"
                />
                <h3 className="text-2xl pt-3 pb-1">HR & Admin</h3>
                <p className="text-m pt-3 pb-2 text-gray-600">
                  This department is essential in ensuring the smooth flow of
                  information from one end to the other. It’s also responsible
                  for employee and client engagement. Everything is managed by
                  our team.
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
              <div>
                <img
                  src="https://www.panchsofttechnologies.com/images/blog/engineering.jpg"
                  alt=""
                  className="rounded h-[250px] w-full"
                />
                <h3 className="text-2xl pt-3 pb-1">Engineering & Audit</h3>
                <p className="text-m pt-3 pb-2 text-gray-600">
                  With a commitment towards evaluating operational procedures,
                  risk management, control functions, our engineering & audit
                  team ensures that our operations run efficiently.
                </p>
              </div>
            </div>
            <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
              <div>
                <img
                  src="https://www.panchsofttechnologies.com/images/blog/1.jpg"
                  alt=""
                  className="rounded h-[250px] w-full"
                />
                <h3 className="text-2xl pt-3 pb-1">Software Development</h3>
                <p className="text-m pt-3 pb-2 text-gray-600">
                  With a team of resourceful and experienced software
                  developers, this department ensures that the software services
                  are always responsive to the client’s requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
