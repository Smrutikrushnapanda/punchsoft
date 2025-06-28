import React from "react";
import Link from "next/link";
import InnerHeader from "@/components/InnerHeader";

function SearchResult() {
  const results = [
    {
      id: 1,
      title: "About Us",
      description: "Learn more about our team and mission.",
      link: "/about",
    },
    {
      id: 2,
      title: "Services",
      description: "Explore our wide range of IT services.",
      link: "/services",
    },
    {
      id: 3,
      title: "Contact",
      description: "Get in touch with us.",
      link: "/contact",
    },
  ];

  return (
    <>
      <InnerHeader />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#1E1A4D] mb-8">
          Search Results
        </h1>

        {results.length === 0 ? (
          <p className="text-gray-600">No results found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {results.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-[#372AAC] mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchResult;
