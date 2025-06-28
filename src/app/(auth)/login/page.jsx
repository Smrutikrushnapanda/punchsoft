"use client";
import React, { useState } from "react";
import Head from "next/head";

function Login() {
  // State for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Placeholder form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., API call)
    alert(`Login attempted with Username: ${username}`);
  };

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <style>{`
          @keyframes wobble {
            0% { transform: scale(1.025); }
            25% { transform: scale(1); }
            75% { transform: scale(1.025); }
            100% { transform: scale(1); }
          }
        `}</style>
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-[#1E1A4D] text-white">
        <div className="relative w-[22.2rem]">
          {/* Circle One */}
          <div
            className="absolute w-32 h-32 rounded-full z-[-1] opacity-50"
            style={{
              background: "#F7941D",
              transform: "translate(-45%, -45%)",
              top: 0,
              left: 0,
            }}
          ></div>
          {/* Form Container */}
          <div className="border border-gray-400/20 shadow-[0_0_36px_1px_rgba(0,0,0,0.3)] rounded-[10px] backdrop-blur-[20px] p-8 z-[99] bg-white/10">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="absolute top-[-14%] right-[-2px] w-[90%] opacity-80"
            />
            <h1 className="text-4xl font-bold opacity-90 mb-8 text-center tracking-wide">
              Login
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <i className="bi bi-person-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fff] text-lg"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full p-[14.5px] pl-10 bg-[#9191911f] text-white border-none rounded-[5px] font-medium text-[15px] tracking-[0.8px] backdrop-blur-[15px] focus:shadow-[0_0_16px_1px_rgba(0,0,0,0.2)] focus:animate-wobble outline-none transition-all duration-200"
                  required
                />
              </div>
              <div className="relative">
                <i className="bi bi-lock-fill absolute left-3 top-1/2 transform -translate-y-1/2 text-[#fff] text-lg"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-[14.5px] pl-10 bg-[#9191911f] text-white border-none rounded-[5px] font-medium text-[15px] tracking-[0.8px] backdrop-blur-[15px] focus:shadow-[0_0_16px_1px_rgba(0,0,0,0.2)] focus:animate-wobble outline-none transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="block w-full p-[13px] bg-[#372AAC] text-white rounded-[5px] font-bold text-[18px] tracking-[1.5px] border-none hover:bg-[#F7941D] hover:shadow-[0_0_10px_1px_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-all duration-200"
                style={{ cursor: "pointer" }}
              >
                Submit
              </button>
            </form>
            <div className="flex justify-between mt-6 text-sm opacity-80">
              <a
                href="/register"
                className="text-white hover:text-[#F7941D] hover:underline transition-colors duration-200"
              >
                Register
              </a>
              <a
                href="/forgot-password"
                className="text-white hover:text-[#F7941D] hover:underline transition-colors duration-200"
              >
                Forgot Password
              </a>
            </div>
          </div>
          {/* Circle Two */}
          <div
            className="absolute w-32 h-32 rounded-full z-[-1] opacity-50"
            style={{
              background: "#F7941D",
              transform: "translate(45%, 45%)",
              bottom: 0,
              right: 0,
            }}
          ></div>
        </div>
      </section>
    </>
  );
}

export default Login;
