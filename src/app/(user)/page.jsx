"use client";
import { Carousel } from "@/components/ui/carousel";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

function HomePage() {
  const settings = {
    dots: true, // show navigation dots
    arrows: true, // show next/prev arrows
    infinite: true, // infinite loop
    speed: 600, // transition speed
    slidesToShow: 3, // how many slides visible
    slidesToScroll: 1, // how many slides to scroll
    autoplay: true, // enable auto scroll
    autoplaySpeed: 3000, // time between slides
    pauseOnHover: true, // stop auto scroll on hover
    swipe: true, // allow swiping on touch devices
    swipeToSlide: true, // slide directly to slide on swipe
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false, // hide arrows for small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false, // optional: hide dots on very small screens
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "John Richmond",
      image:
        "https://the7.io/business-advisors/wp-content/uploads/sites/72/2020/04/team0008.jpg",
      message: "Working with them was seamless and professional.",
      position: "CEO, XYZ Company",
    },
    {
      name: "Alexandra Browny",
      image:
        "https://the7.io/business-advisors/wp-content/uploads/sites/72/2020/04/team0001.jpg",
      message: "Top-tier service and fantastic results!",
      position: "COO, XYZ Company",
    },
    {
      name: "Dr. Alok Ahuja",
      image:
        "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1750959399~exp=1750962999~hmac=d90b6831df486ffd4d4f060701241bd7379bc9f7e36f571a3dda33bd3ad1ab26&w=1380",
      message: "Really Impressive, Goodwork Team !",
      position: "MD, XYZ Company",
    },
    // Add more testimonials as needed
  ];

  const router = useRouter();

  return (
    <div>
      <Carousel />
      <div className="container mx-auto px-4 pt-30 pb-0">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6  relative">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6 relative ">
                <div>
                  <img
                    src="https://studyhub.themewant.com/wp-content/uploads/2024/05/about_1.jpg"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <img
                  src="https://studyhub.themewant.com/wp-content/uploads/2024/05/about_2.jpg"
                  alt=""
                  className="w-full mt-4 md:mt-16 h-[80%]"
                />
              </div>
              <div>
                <img
                  src="https://studyhub.themewant.com/wp-content/uploads/2024/05/about_shape.png"
                  alt=""
                  className="absolute w-[60px] sm:w-[80px] md:w-[95px] lg:w-[110px] xl:w-[130px] top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto"
                />

                <div className="project-data flex gap-2 border rounded border-blue-700 h-[68px] w-[200px] absolute bottom-[90%] left-[75%] sm:left-[58%] p-1 jump-1 items-center bg-white shadow-md">
                  <div className="bg-indigo-700 h-full w-16 rounded flex justify-center items-center">
                    <i className="bi bi-file-bar-graph text-white text-3xl"></i>
                  </div>
                  <div className="flex flex-col justify-center items-start leading-tight">
                    <p className="text-black text-xl font-semibold">50+</p>
                    <p className="text-gray-500 text-xs">(Project Delivered)</p>
                  </div>
                </div>

                <div className="flex gap-2 border rounded border-[#F7941D] h-[68px] w-[200px] absolute top-[76%] left-[10%] p-1 jump-1 items-center bg-white shadow-md">
                  <div className="bg-[#F7941D] h-full w-16 rounded flex justify-center items-center">
                    <i className="bi bi-people text-white text-3xl"></i>
                  </div>
                  <div className="flex flex-col justify-center items-start leading-tight">
                    <p className="text-black text-xl font-semibold">2.4k</p>
                    <p className="text-gray-500 text-xs">(Happy Customers)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[#F7941D] font-semibold mt-4 md:mt-0">
              <i className="bi bi-arrow-left-right text-[#F7941D] font-bold mr-2"></i>
              About Us
            </p>
            <h1 className="font-semibold text-4xl sm:text-5xl capitalize leading-tight mt-2">
              Showcasing all that <br />
              <span className="text-indigo-700"> define us</span>
            </h1>
            <p className="mt-5 text-[17px] mb-3">
              We provide infrastructure for online and offline examinations,
              catering to both recruitment and entrance exams. Our extensive
              network of verified testing nodes spans various locations across
              India, providing accessibility and convenience.
            </p>
            <div className="flex flex-col sm:flex-column gap-3">
              <div className="p-4 w-full bg-gray-100 border rounded border-gray-200 flex gap-5 items-center">
                <i className="bi bi-book text-indigo-700 text-4xl sm:text-5xl"></i>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-full">
                  <h3 className="text-[17px] font-semibold text-indigo-700 mb-2">
                    Exam Management
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Complete software support for Typing, MS Office, and Steno
                    tests.
                  </p>
                </div>
              </div>

              <div className="p-4 w-full bg-gray-100 border rounded border-gray-200 flex gap-5 items-center">
                <i className="bi bi-shield-check text-indigo-700 text-4xl sm:text-5xl"></i>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 w-full">
                  <h3 className="text-[17px] font-semibold text-indigo-700 mb-2">
                    Secure Infrastructure
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Biometric verification and CCTV surveillance for credible
                    assessments.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={() => router.push("/about")}
                className="relative cursor-pointer inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-indigo-700 rounded-md group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
                <span className="relative text-base font-semibold">
                  Know More !
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-30 pt-20 pb-20 bg-[#ece9ff]">
        <p className="text-[#F7941D] font-semibold mt-4 md:mt-0 text-center">
          <i className="bi bi-arrow-left-right text-[#F7941D] font-bold mr-2"></i>
          Our Services
        </p>
        <h2 className="font-semibold text-4xl sm:text-3xl capitalize leading-tight mt-2 text-center">
          We provide Online & Offline Examination Auxiliary Services
        </h2>

        <div className="grid grid-cols-12 gap-4 mt-10">
          <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
            <div>
              <img
                src="https://www.panchsofttechnologies.com/images/blog/5.jpg"
                alt=""
                className="rounded h-[250px] w-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-2xl pt-3 pb-1">EXAM Assessment</h3>
              <p className="text-m pt-3 pb-2 text-gray-600">
                Our software solution offers complete support for Conducting
                Typing Test, MS Skill Test and steno examination.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="relative cursor-pointer inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-indigo-700 rounded-md group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
                <span className="relative text-base font-semibold">
                  Book Now<i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
            <div>
              <img
                src="https://www.panchsofttechnologies.com/images/blog/Cse-IT.jpg"
                alt=""
                className="rounded h-[250px] w-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-2xl pt-3 pb-1">EXAM INFRASTRUCTURE.</h3>
              <p className="text-m pt-3 pb-2 text-gray-600">
                We provide schools and colleges with IT and non-IT
                infrastructure to the exam industry to conduct online and
                offline exams.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="relative cursor-pointer inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-indigo-700 rounded-md group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
                <span className="relative text-base font-semibold">
                  Book Now<i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
            <div>
              <img
                src="https://www.panchsofttechnologies.com/images/blog/manpower.jpg"
                alt=""
                className="rounded h-[250px] w-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-2xl pt-3 pb-1">EXAM SUPPORT (MANPOWER)</h3>
              <p className="text-m pt-3 pb-2 text-gray-600">
                To ensure smooth exams, we provide experienced manpower support
                like exam controllers, assessors, observers, and panellists.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="relative cursor-pointer inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-indigo-700 rounded-md group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
                <span className="relative text-base font-semibold">
                  Book Now<i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
            <div>
              <img
                src="https://www.panchsofttechnologies.com/images/blog/7.jpg"
                alt=""
                className="rounded h-[250px] w-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-2xl pt-3 pb-1">EXAM SECURITY</h3>
              <p className="text-m pt-3 pb-2 text-gray-600">
                We provide experienced security guards and frisking technology
                to keep out illegal objects in examination premises.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="relative cursor-pointer inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-indigo-700 rounded-md group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
                <span className="relative text-base font-semibold">
                  Book Now<i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
            <div>
              <img
                src="https://www.panchsofttechnologies.com/images/blog/8.png"
                alt=""
                className="rounded h-[250px] w-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-2xl pt-3 pb-1">VALUE ADDED SERVICES</h3>
              <p className="text-m pt-3 pb-2 text-gray-600">
                We provide hospitality arrangements all over India. We also
                provide clients with facilities for conferences and training
                done by our professionals.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="relative cursor-pointer inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-indigo-700 rounded-md group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
                <span className="relative text-base font-semibold">
                  Book Now<i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 border border-indigo-700 p-3 rounded main-box group hover:shadow-lg transition-all duration-300">
            <div>
              <img
                src="https://www.panchsofttechnologies.com/images/blog/logistic.jpg"
                alt=""
                className="rounded h-[250px] w-full transform transition-transform duration-300 group-hover:scale-105"
              />
              <h3 className="text-2xl pt-3 pb-1">EXAM STATIONERY & LOGISTIC</h3>
              <p className="text-m pt-3 pb-2 text-gray-600">
                To keep exams secure from malpractices, we provide secure
                logistics for exam materials & also procure stationery items for
                clients.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="relative cursor-pointer inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-indigo-700 rounded-md group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
                <span className="relative text-base font-semibold">
                  Book Now<i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-20">
        <p className="text-[#F7941D] font-semibold mt-4 md:mt-0 text-center">
          <i className="bi bi-arrow-left-right text-[#F7941D] font-bold mr-2"></i>
          Our Values
        </p>
        <h2 className="font-semibold text-4xl sm:text-3xl capitalize leading-tight mt-2 mb-10 text-center">
          We are expert people
        </h2>
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 md:col-span-6 border-r border-gray-200">
            <img
              src="/images/Integrity-2.png"
              alt="Integrity"
              className="w-full max-w-[600px] h-auto block mx-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-6 px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Integrity</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Being a part of the confidential industry, integrity is at the
              core of our values. We make sure to stick to this by staying in
              tune with the highest standards of professional behaviour and
              ethics.We believe that trust is earned through transparency,
              accountability, and unwavering moral principles. Every decision we
              make is guided by our commitment to do what’s right—even when it’s
              not the easiest path. This dedication not only strengthens our
              internal culture but also builds lasting relationships with our
              clients and stakeholders.
            </p>
          </div>
        </div>

        <div className="border-b w-full block border-gray-200"></div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 px-6 border-r border-gray-200 flex items-center h-full">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Satisfaction
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A satisfied client is the mark of our success. To ensure that
                happens, we do our best at every step of the way, providing
                customised solutions to fulfil the client’s needs.We listen
                actively, understand deeply, and act with precision—tailoring
                our services to align with their vision. Our client-first
                approach drives innovation, fosters long-term partnerships, and
                consistently exceeds expectations. For us, success is not just
                delivering results, but creating meaningful value for every
                client we serve.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <img
              src="/images/dedication-1.png"
              alt=""
              className="w-[680px] h-[530px] block mx-auto"
            />
          </div>
        </div>
        <div className="border-b w-full block border-gray-200"></div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 border-r  border-gray-200">
            <img
              src="/images/Satisfaction-3.png"
              alt=""
              className="w-[650px] h-[450px] block mx-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="col-span-12 md:col-span-6 px-6 border-r border-gray-200 flex items-center h-full">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Dedication
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that dedication leads to excellence. With efficient
                  technology in tow, our dedicated and committed human effort is
                  ever-ready to provide the right solutions when required. Our
                  team works tirelessly to blend innovation with reliability,
                  ensuring we remain responsive and agile in a fast-changing
                  world. This synergy of smart tools and passionate people
                  empowers us to consistently deliver results that matter—and to
                  rise above challenges with confidence and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-20 bg-indigo-950 five-step">
        <div className="left-border"></div>
        <div className="right-border"></div>

        <p className="text-[#F7941D] font-semibold mt-4 md:mt-0 text-center">
          <i className="bi bi-arrow-left-right text-[#F7941D] font-bold mr-2"></i>
          Hassle-Free Exam Booking
        </p>
        <h2 className="font-semibold text-[#ffffff] text-4xl sm:text-3xl capitalize leading-tight mt-2 mb-10 text-center">
          Exam Center Booking Process
        </h2>
        <div className="flex">
          <img
            src="images/five-step.png"
            alt=""
            className="w-[900px] h-[500px] mx-auto text-center"
          />
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4">
        <p className="text-[#F7941D] font-semibold mt-4 md:mt-0 text-center">
          <i className="bi bi-arrow-left-right text-[#F7941D] font-bold mr-2"></i>
          Clients testimonial
        </p>
        <h2 className="font-semibold text-4xl sm:text-3xl capitalize leading-tight mt-2 mb-10 text-center">
          What clients say about our work
        </h2>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-gray-100 rounded-lg p-6 text-center shadow-sm flex flex-col h-full min-h-[280px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.position}</p>
                  <p className="text-gray-600 mt-2 text-sm flex-grow">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
