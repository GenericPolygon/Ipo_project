import React from "react";
import Navbar from "../components/Navbar";

const containerStyle = {
  maxWidth: "90vw",
  margin: "0 auto",
  position: "relative",
  paddingTop: "9rem",
};

const breadcrumbContainer = {
  position: "relative",
  width: "12rem", // 194px
  height: "1.125rem", // 18px
};

const breadcrumbStyles = {
  bluestock: {
    position: "absolute",
    left: "0rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "0.75rem", // 12px
    lineHeight: "1.125rem", // 18px
    color: "#0000FF",
  },
  separator1: {
    position: "absolute",
    left: "4.125rem", // 66px
    fontSize: "0.75rem",
    color: "#000",
  },
  ipo: {
    position: "absolute",
    left: "4.9375rem", // 79px
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "0.75rem",
    color: "#0000FF",
  },
  separator2: {
    position: "absolute",
    left: "6.3125rem", // 101px
    fontSize: "0.75rem",
    color: "#000",
  },
  upcomingIpoText: {
    position: "absolute",
    left: "6.875rem", // 110px
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "0.75rem",
    color: "#000000",
  },
};

const headerContainer = {
  position: "relative",
  marginTop: "2rem",
  maxWidth: "21.25rem", // 340px
};

const headingStyle = {
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "1.5rem", // 24px
  lineHeight: "2.25rem", // 36px
  color: "#000000",
};

const descriptionStyle = {
  marginTop: "0.75rem", // 12px
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: "0.8125rem", // 13px
  lineHeight: "1rem", // 16px
  color: "#000000",
};

function Upcoming_ipo() {
  return (
    <div>
      <Navbar />

     <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm mb-4">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">Bluestock</a>
              </li>
              <li className="text-gray-500">&gt;</li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">IPO</a>
              </li>
              <li className="text-gray-500">&gt;</li>
              <li className="text-gray-900">UPCOMING IPO</li>
            </ol>
          </nav>

          {/* Title and Description */}
          <div className="lg:max-w-3xl">
            <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
              Upcoming IPO
            </h1>
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
              Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Upcoming_ipo;
