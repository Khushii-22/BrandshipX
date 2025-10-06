import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full z-50">
      <div className="w-full px-4 flex justify-end">
        <div className="flex items-center mt-5 mr-[800px]">
          {/* Navigation Links */}
          <div
            className="hidden md:flex items-center gap-[2px] w-[417px] h-[54px] bg-white rounded-[100px] px-[6px] backdrop-blur-[28px]"
            style={{
              borderImage:
                "linear-gradient(90.8deg, #F1F5F9 1.97%, #FFFFFF 98.47%) 1",
            }}
          >
            <Link
              to="/"
              className="text-[#62748E] hover:text-[#1D293D] font-vend font-normal text-[18px] leading-[22px] px-4"
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-[#62748E] hover:text-[#1D293D] font-vend font-normal text-[18px] leading-[22px] px-4"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-[#62748E] hover:text-[#1D293D] font-vend font-normal text-[18px] leading-[22px] px-4"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-[#62748E] hover:text-[#1D293D] font-vend font-normal text-[18px] leading-[22px] px-4"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 text-[#62748E] font-vend">
            Home
          </Link>
          <Link
            to="/features"
            className="block px-3 py-2 text-[#62748E] font-vend"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-2 text-[#62748E] font-vend"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-[#62748E] font-vend"
          >
            About
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 text-[#62748E] font-vend"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="block px-3 py-2 text-[#1D293D] font-semibold font-vend"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
