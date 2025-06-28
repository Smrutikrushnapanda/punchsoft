"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-bg">
        <div className="vector-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white py-12">
            {/* Section 1: Company Policies */}
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-orange-400 cursor-pointer">
                  <Link href="/terms-condition">Terms & Conditions</Link>
                </li>
                <li className="hover:text-orange-400 cursor-pointer">
                  <Link href="/terms-condition">Privacy Policy</Link>
                </li>
                <li className="hover:text-orange-400 cursor-pointer">
                  <Link href="/contact"> Support</Link>
                </li>
                <li className="hover:text-orange-400 cursor-pointer">
                  <Link href="/contact">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Section 2: Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-orange-400 cursor-pointer">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:text-orange-400 cursor-pointer">
                  <Link href="/achievements">Achievements</Link>
                </li>
                <li className="hover:text-orange-400 cursor-pointer">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="hover:text-orange-400 cursor-pointer">
                  <Link href="/careers">Careers</Link>
                </li>
              </ul>
            </div>

            {/* Section 3: Subscribe */}
            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe Us</h3>
              <p className="text-sm mb-4">
                Subscribe to get the latest news, articles, and resources.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 rounded-md border placeholder:text-white border-white text-black w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Section 4: Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-sm mb-2">
                Email: contact@panchsofttechnologies.com
              </p>
              <p className="text-sm mb-2">Phone: +91 70087 91822</p>
              <p className="text-sm">
                Address:Chandaka Industrial Estate, Patia, Bhubaneswar- 751024.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-1">
        <div className="grid grid-cols-12 items-center gap-4">
          {/* Left side - Copyright */}
          <div className="col-span-12 md:col-span-6 text-center md:text-left text-black-700">
            © 2025 Your Company Name. All rights reserved.
          </div>

          {/* Right side - Social Icons */}
          <div className="col-span-12 md:col-span-6 text-center md:text-right space-x-4 text-xl pl-10 pr-10">
            <Link
              href="#"
              aria-label="Facebook"
              className="inline-block text-indigo-800 transition duration-300 hover:text-orange-500 hover:rotate-360"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="inline-block text-indigo-800 transition duration-300 hover:text-orange-500 hover:rotate-360"
            >
              <i className="bi bi-twitter-x"></i>
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="inline-block text-indigo-800 transition duration-300 hover:text-orange-500 hover:rotate-360"
            >
              <i className="bi bi-instagram"></i>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="inline-block text-indigo-800 transition duration-300 hover:text-orange-500 hover:rotate-360"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
