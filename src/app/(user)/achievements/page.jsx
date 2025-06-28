import React from "react";
import InnerHeader from "@/components/InnerHeader";
function achievements() {
  return (
    <>
      <InnerHeader />
      <div className="container mx-auto px-4  py-10">
        <div className="grid grid-cols-12 pb-10 gap-8 items-center">
          {/* Text Section */}
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              We Achieve Therefore We Are.
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              In an open-market where cut-throat competition lurks from every
              corner, our greatest achievement is to create a network of trusted
              test centres pan-India to conduct successful examinations. Apart
              from that, the growth of our business is commendable over the
              years.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-span-12 md:col-span-6">
            <img
              src="/images/archivment.png"
              alt="global-data-security"
              className="h-auto w-[500px] block mx-auto"
            />
          </div>
        </div>
        <div className="bg-[#ece9ff] pt-15 pb-15 p-5">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 bg-white border-2 border-[#372AAC] rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:bg-[#f6f4ff] cursor-pointer">
              <h2 className="text-[#372AAC] font-bold text-2xl mb-2">
                <span className="text-5xl text-[#F7941D]">01.</span>
                <br /> High Exam Security and Integrity
              </h2>
              <p className="text-gray-700 text-l">
                Achieving a track record of maintaining the highest level of
                exam security and integrity is a significant accomplishment.
                This includes preventing cheating and ensuring that exam results
                accurately reflect the abilities of the test-takers.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white border-2 border-[#372AAC] rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:bg-[#f6f4ff] cursor-pointer">
              <h2 className="text-[#372AAC] font-bold text-2xl mb-2">
                <span className="text-5xl text-[#F7941D]">02.</span>
                <br /> Scalability and Accessibility
              </h2>
              <p className="text-gray-700 text-l">
                Successfully scaling up the platform to accommodate a growing
                number of users and making examinations accessible to a wide
                range of candidates, regardless of their location, is a key
                achievement. This can involve expanding testing centers or
                improving online infrastructure.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 bg-white border-2 border-[#372AAC] rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:bg-[#f6f4ff] cursor-pointer">
              <h2 className="text-[#372AAC] font-bold text-2xl mb-2">
                <span className="text-5xl text-[#F7941D]">03.</span>
                <br /> Client Satisfaction and Retention
              </h2>
              <p className="text-gray-700 text-l">
                Maintaining a high level of client satisfaction and retention is
                vital. Consistently delivering reliable and user-friendly
                examination solutions that meet the needs of educational
                institutions, corporations, or certification bodies demonstrates
                the company's commitment to excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-20">
          {/* First Section */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Background Accent Circle */}
            <div className="absolute -left-10 -top-10 w-72 h-72 bg-indigo-100 rounded-full opacity-30 -z-10"></div>

            {/* Image */}
            <div className="md:order-1 order-2">
              <img
                src="https://www.panchsofttechnologies.com/images/about/studentexam.png"
                alt="Security"
                className="w-full h-[300px] rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="md:order-2 order-1">
              <h2 className="text-[#372AAC] font-bold text-3xl mb-4">
                TOTAL STUDENTS APPEARED IN A YEAR.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Since our very beginning with conducting exams, we have grown in
                expertise. We are responsible for successfully conducting exams
                throughout the years supporting as much as 30 lac candidates
                during the pandemic.
              </p>
            </div>
          </div>

          {/* Second Section (Image on Right) */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Background Accent Circle */}
            <div className="absolute right-0 -bottom-10 w-72 h-72 bg-indigo-100 rounded-full opacity-30 -z-10"></div>

            {/* Content */}
            <div>
              <h2 className="text-[#372AAC] font-bold text-3xl mb-4">
                TOTAL STUDENTS APPEARED IN A SINGLE DRIVE
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our experience in handling a large number of candidates
                appearing in a single drive shows our capability in managing
                examinations successfully, regardless of the size.
              </p>
            </div>

            {/* Image */}
            <div>
              <img
                src="https://www.panchsofttechnologies.com/images/about/online-exam.jpg"
                alt="Online Exam"
                className="w-full h-[300px] rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default achievements;
