import React from 'react';
import Navbar from "../components/Navbar"; 
const ipoHeaderContainerStyle = {
    position: "absolute",
    width: "709px",
    height: "100px",
    left: "60px",
    top: "146px",
};
const breadcrumbStyles = {
    bluestock: {
      position: 'absolute',
      top: '0px',     
      left: '4px',     
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: '#0000FF',
      textDecoration: 'none',
    },
    ipo: {
      position: 'absolute',
      top: '0px',      
      left: '79px',    
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: '#0000FF',
      textDecoration: 'none',
    },
    upcomingIpoText: {
      position: 'absolute',
      top: '0px',      
      left: '110px',   
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: '#000000',
    },
    separator1: {
      position: 'absolute',
      top: '0px',      
      left: '66px',    
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: '#000000',
    },
    separator2: {
      position: 'absolute',
      top: '0px',      
      left: '101px',   
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: '#000000',
    },
};

const headingStyle = {
    position: 'absolute',
    top: '31px',     
    left: '0px',    
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '48px',
    color: '#000000',
};

const descriptionStyle = {
    position: 'absolute',
    top: '79px',     
    left: '0px',     
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',
    whiteSpace: 'nowrap', 
};

function Upcoming_ipo() {
  return (
    <div>
      <Navbar/>
      <div style={ipoHeaderContainerStyle}>
        <a href="#" style={breadcrumbStyles.bluestock}>
          Bluestock
        </a>
        <span style={breadcrumbStyles.separator1}>&gt;</span>
        <a href="#" style={breadcrumbStyles.ipo}>
          IPO
        </a>
        <span style={breadcrumbStyles.separator2}>&gt;</span>
        <span style={breadcrumbStyles.upcomingIpoText}>UPCOMING IPO</span>

        <h1 style={headingStyle}>
          Upcoming IPO
        </h1>

        <p style={descriptionStyle}>
          Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.
        </p>
      </div>
    </div>
  )
}

export default Upcoming_ipo;