import React, { useState } from "react";

// Data for navigation links to keep the mobile menu DRY
const mobileNavLinks = [
  { title: "PRODUCTS", href: "#" },
  { title: "PRICING", href: "#" },
  { title: "COMMUNITY", href: "#" },
  { title: "MEDIA", href: "#" },
  { title: "SUPPORT", href: "#" },
];

// Reusable 3x3 Grid Icon component
const GridIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="2" /> <circle cx="12" cy="4" r="2" /> <circle cx="20" cy="4" r="2" />
    <circle cx="4" cy="12" r="2" /> <circle cx="12" cy="12" r="2" /> <circle cx="20" cy="12" r="2" />
    <circle cx="4" cy="20" r="2" /> <circle cx="12" cy="20" r="2" /> <circle cx="20" cy="20" r="2" />
  </svg>
);

const BluestockNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white font-poppins shadow-md border-b w-full">
      <div className="hidden lg:block h-[125px] relative max-w-[1920px] mx-auto">
        <a href="#" className="absolute" style={{ top: '0px', left: '43px', width: '132px', height: '118px' }}>
          <img
            src="/assets/images/Logo.jpg"
            alt="Bluestock Logo"
            className="w-full h-full object-contain"
          />
        </a>

        <a href="#" className="absolute text-[2.8125rem] font-bold text-[#1E1E1E] flex items-center justify-center" style={{ top: '36px', left: '183px', width: '263px', height: '68px' }}>
          BLUESTOCK
        </a>

        <a href="#" className="absolute text-sm font-semibold text-center text-[#9A9A9A] hover:text-gray-800" style={{ top: '54px', left: '523px', width: '82px', height: '23px' }}>PRODUCTS</a>
        <a href="#" className="absolute text-sm font-semibold text-center text-[#9A9A9A] hover:text-gray-800" style={{ top: '54px', left: '638px', width: '62px', height: '23px' }}>PRICING</a>
        <a href="#" className="absolute text-sm font-semibold text-center text-[#9A9A9A] hover:text-gray-800" style={{ top: '54px', left: '742px', width: '95px', height: '23px' }}>COMMUNITY</a>
        <a href="#" className="absolute text-sm font-semibold text-center text-[#9A9A9A] hover:text-gray-800" style={{ top: '54px', left: '874px', width: '64px', height: '23px' }}>MEDIA</a>
        <a href="#" className="absolute text-sm font-semibold text-center text-[#9A9A9A] hover:text-gray-800" style={{ top: '54px', left: '976px', width: '76px', height: '23px' }}>SUPPORT</a>

        <a href="#" className="absolute text-sm font-semibold text-center text-[#9A9A9A] hover:text-gray-800" style={{ top: '50px', left: '1538px', width: '52px', height: '23px' }}>
          Sign In
        </a>

        <button className="absolute text-white text-sm font-semibold bg-[#3C4FFF] hover:bg-blue-600 rounded" style={{ top: '38px', left: '1622px', width: '135px', height: '42px' }}>
          Sign Up Now
        </button>

        <button className="absolute text-black" style={{ top: '49px', left: '1829px', width: '25px', height: '25px' }}>
          <GridIcon className="w-full h-full" />
        </button>
      </div>

      <div className="lg:hidden h-20 px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            className="h-10 w-auto"
            src="/assets/images/logo_min.png"
            alt="Bluestock Logo"
          />
          <span className="ml-2 text-2xl font-bold text-[#1E1E1E]">
            BLUESTOCK
          </span>
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-black hover:bg-gray-100"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <GridIcon className="w-6 h-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mobileNavLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5 space-y-4">
              <a href="#" className="block text-base font-medium text-gray-600 hover:text-gray-800">
                Sign In
              </a>
              <button className="w-full bg-[#3C4FFF] text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BluestockNavbar;