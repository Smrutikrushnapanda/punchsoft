"use client";
import React, { useState } from "react";
import InnerHeader from "@/components/InnerHeader";
import Head from "next/head";

function Careers() {
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      description:
        "Join our development team to build cutting-edge software solutions. Requires 3+ years of experience in JavaScript, React, and Node.js.",
      category: "Engineering",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description:
        "Design intuitive and visually appealing user interfaces. Proficiency in Figma and user research is a must.",
      category: "Design",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      description:
        "Optimize our CI/CD pipelines and cloud infrastructure. Experience with AWS and Docker required.",
      category: "DevOps",
    },
  ];

  // State for search, filter, and modal
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Filter jobs based on search term and category
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Open modal with selected job
  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    alert(`Application submitted for ${selectedJob.title}!`);
    closeModal();
  };

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>
      <InnerHeader />
      <div className="container mx-auto px-4 py-12 bg-gray-100">
        {/* Careers Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#372AAC] mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore exciting career opportunities at Panchsoft Technologies and
            be part of our innovative journey.
          </p>
        </section>

        {/* Company Culture Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#372AAC] mb-8 text-center border-l-4 border-[#F7941D] pl-4 md:border-l-0 md:pl-0">
            <i className="bi bi-people-fill mr-2 text-[#F7941D]"></i>
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#372AAC]/10 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i className="bi bi-lightbulb-fill text-[#F7941D] text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-[#372AAC] mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We foster a culture of creativity, encouraging new ideas to
                drive technological advancements.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#372AAC]/10 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i className="bi bi-people-fill text-[#F7941D] text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-[#372AAC] mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Our team thrives on teamwork, working together to achieve shared
                goals and success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#372AAC]/10 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i className="bi bi-star-fill text-[#F7941D] text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-[#372AAC] mb-2">
                Growth
              </h3>
              <p className="text-gray-600">
                We invest in our employees’ growth with continuous learning and
                career development opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#372AAC] mb-8 text-center border-l-4 border-[#F7941D] pl-4 md:border-l-0 md:pl-0">
            <i className="bi bi-briefcase-fill mr-2 text-[#F7941D]"></i>
            Current Openings
          </h2>
          {/* Job Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#372AAC] transition duration-200"
              />
              <i className="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[#372AAC]"></i>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-1/4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#372AAC] transition duration-200"
            >
              <option value="All">All Categories</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-gradient-to-br from-[#372AAC]/10 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#372AAC] mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    Category: {job.category}
                  </p>
                  <button
                    onClick={() => openModal(job)}
                    className="bg-[#372AAC] text-white px-4 py-2 rounded-lg hover:bg-[#F7941D] transition duration-300 font-medium flex items-center gap-2"
                  >
                    <i className="bi bi-arrow-right-circle-fill"></i>
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No jobs match your search criteria.
              </p>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-br from-[#372AAC]/10 to-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#372AAC] mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            If you’re passionate about technology and innovation, we’d love to
            hear from you. Join us to shape the future!
          </p>
          <a
            href="mailto:careers@panchsofttechnologies.com"
            className="inline-flex items-center bg-[#372AAC] text-white px-6 py-3 rounded-lg hover:bg-[#F7941D] transition duration-300 font-medium"
          >
            <i className="bi bi-envelope-fill mr-2"></i>
            Contact HR
          </a>
        </section>

        {/* Application Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#372AAC]">
                  Apply for {selectedJob?.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-[#F7941D] transition"
                >
                  <i className="bi bi-x-lg text-xl"></i>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    <i className="bi bi-person-fill mr-2 text-[#372AAC]"></i>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#372AAC] transition duration-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    <i className="bi bi-envelope-fill mr-2 text-[#372AAC]"></i>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#372AAC] transition duration-200"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="resume"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    <i className="bi bi-file-earmark-text-fill mr-2 text-[#372AAC]"></i>
                    Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#372AAC] transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    <i className="bi bi-chat-text-fill mr-2 text-[#372AAC]"></i>
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#372AAC] transition duration-200"
                    rows="5"
                    placeholder="Your Cover Letter"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#372AAC] text-white py-3 rounded-lg hover:bg-[#F7941D] transition duration-300 font-medium flex items-center justify-center gap-2"
                >
                  <i className="bi bi-send-fill"></i>
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Careers;
