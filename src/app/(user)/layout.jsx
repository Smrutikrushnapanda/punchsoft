"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader from "@/components/Loader"; // 👈 import

export default function UserLayout({ children }) {
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Simulate loading
    const timeout = setTimeout(() => setLoading(false), 1500); // Adjust time as needed

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="box-border p-0 m-0 relative">
          <header className="container mx-auto px-4">
            <Header />
          </header>

          <main className="min-h-[500px]">{children}</main>

          <footer>
            <Footer />
          </footer>

          {showButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 border-dotted border-2 border-white bg-indigo-800 text-white p-2 h-13 w-13 rounded-full shadow-lg hover:bg-orange-700 transition duration-300"
              aria-label="Scroll to top"
            >
              <i className="bi bi-arrow-up-circle text-2xl"></i>
            </button>
          )}
        </div>
      )}
    </>
  );
}
