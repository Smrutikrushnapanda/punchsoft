import React from "react";
import InnerHeader from "@/components/InnerHeader";

function TermsCondition() {
  return (
    <>
      <InnerHeader />
      <div className="container mx-auto px-4 py-12 text-gray-700">
        <h1 className="text-4xl font-bold text-[#1E1A4D] mb-8 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-6 max-w-3xl mx-auto leading-relaxed text-base">
          <p>
            By accessing and using this website, you agree to be bound by the
            terms and conditions set forth below. If you do not agree with these
            terms, please do not use this website.
          </p>

          <h2 className="text-xl font-semibold text-[#372AAC]">
            1. Use of Website
          </h2>
          <p>
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of, restrict, or inhibit anyone
            else’s use and enjoyment of the site.
          </p>

          <h2 className="text-xl font-semibold text-[#372AAC]">
            2. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, images, graphics, and
            logos, is the property of the company and is protected by applicable
            copyright and trademark laws.
          </p>

          <h2 className="text-xl font-semibold text-[#372AAC]">
            3. Limitation of Liability
          </h2>
          <p>
            We are not responsible for any loss or damage that may occur from
            using this website or any of its content.
          </p>

          <h2 className="text-xl font-semibold text-[#372AAC]">
            4. Changes to Terms
          </h2>
          <p>
            We reserve the right to update these terms at any time without prior
            notice. Your continued use of the website means you accept any
            changes.
          </p>

          <h2 className="text-xl font-semibold text-[#372AAC]">
            5. Governing Law
          </h2>
          <p>
            These terms shall be governed and construed in accordance with the
            laws of India.
          </p>

          <p className="text-sm text-gray-500 mt-10">
            Last updated on: June 18, 2025
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsCondition;
