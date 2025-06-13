// src/components/Navbar.jsx
import React, { useState } from 'react';

// Reusable SVG for the 3x2 grid icon with squares
const GridIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-dark">
    <rect x="5.5" y="5.5" width="4" height="4" fill="currentColor"/>
    <rect x="15.5" y="5.5" width="4" height="4" fill="currentColor"/>
    <rect x="5.5" y="10.5" width="4" height="4" fill="currentColor"/>
    <rect x="15.5" y="10.5" width="4" height="4" fill="currentColor"/>
    <rect x="5.5" y="15.5" width="4" height="4" fill="currentColor"/>
    <rect x="15.5" y="15.5" width="4" height="4" fill="currentColor"/>
  </svg>
);

// Reusable NavLink with dropdown arrow styling
const NavLink = ({ children, href = "#", hasDropdown = false, className = '' }) => (
  <li className={`flex items-center group cursor-pointer ${className}`}>
    <a href={href} className="font-semibold text-[#9A9A9A] text-[15px] leading-[22px] group-hover:text-primary transition-colors">
      {children}
    </a>
    {hasDropdown && <span className="ml-1.5 text-[#9A9A9A] text-xs transition-colors group-hover:text-primary">▼</span>}
  </li>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // The header is relative to contain the absolutely positioned desktop elements.
    <header className="bg-white h-[125px] relative sticky top-0 z-50 shadow-[0_8px_6.5px_rgba(202,202,202,0.25)]">
      <div className="container mx-auto px-6 h-full">

        {/* --- DESKTOP LAYOUT (Absolute Positioning for Pixel Perfection) --- */}
        <div className="hidden xl-desktop:block absolute left-[43px] top-0 h-full">
          <div className="flex items-center h-full">
            <img src="\assets\images\Logo.jpg" alt="Bluestock Logo" className="h-[55px]"/>
            <span className="ml-[8px] font-bold text-text-dark text-[45px] leading-[68px]">
              BLUESTOCK
            </span>
          </div>
        </div>
        <nav className="hidden xl-desktop:block absolute left-[523px] top-[54px]">
          <ul className="flex items-center">
            <NavLink className="mr-[33px]">PRODUCTS</NavLink>
            <NavLink className="mr-[42px]">PRICING</NavLink>
            <NavLink className="mr-[37px]">COMMUNITY</NavLink>
            <NavLink className="mr-[38px]" hasDropdown>MEDIA</NavLink>
            <NavLink hasDropdown>SUPPORT</NavLink>
          </ul>
        </nav>
        <div className="hidden xl-desktop:flex absolute right-[66px] top-0 h-full items-center">
            <a href="#" className="font-semibold text-[#9A9A9A] text-[15px] mr-[32px] hover:text-primary transition-colors">
              Sign In
            </a>
            <a href="#" className="w-[135px] h-[42px] flex items-center justify-center bg-[#3F52FF] text-white font-semibold rounded-md text-[15px] mr-[72px] hover:bg-blue-700 transition-colors">
              Sign Up Now
            </a>
            <button aria-label="More options">
              <GridIcon />
            </button>
        </div>

        {/* --- MOBILE & TABLET LAYOUT (Flexbox for Responsiveness) --- */}
        <div className="xl-desktop:hidden flex items-center justify-between h-full">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="\assets\images\Logo.jpg" alt="Bluestock Logo" className="h-[28px] w-[53px]" />
            <span className="font-bold text-text-dark text-2xl">BLUESTOCK</span>
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
              <GridIcon />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isOpen && (
        <div className="xl-desktop:hidden absolute top-full left-0 w-full bg-white shadow-lg px-4 pt-4 pb-6">
          <ul className="space-y-4">
            <NavLink>PRODUCTS</NavLink>
            <NavLink>PRICING</NavLink>
            <NavLink>COMMUNITY</NavLink>
            <NavLink hasDropdown>MEDIA</NavLink>
            <NavLink hasDropdown>SUPPORT</NavLink>
          </ul>
          {/* MODIFIED SECTION: "Sign In" is now a button */}
          <div className="pt-4 mt-4 border-t border-gray-200 flex flex-col items-center space-y-3">
            <a href="#" className="w-full h-[42px] flex items-center justify-center bg-white text-[#3F52FF] border border-[#3F52FF] font-semibold rounded-md text-[15px] hover:bg-blue-50 transition-colors">
              Sign In
            </a>
            <a href="#" className="w-full h-[42px] flex items-center justify-center bg-[#3F52FF] text-white font-semibold rounded-md text-[15px] hover:bg-blue-700 transition-colors">
              Sign Up Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}