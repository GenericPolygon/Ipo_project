// src/components/CompanyCard.jsx
import React from 'react';

// Mobile-specific layout for info items
const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-xs font-normal text-text-light uppercase tracking-wider">{label}</p>
    <p className="text-sm font-semibold text-text-dark mt-0.5">{value}</p>
  </div>
);

// Desktop-specific layout for info items
const InfoItemDesktop = ({ label, value }) => (
  <div>
    <p className="text-xs font-medium text-text-light uppercase tracking-wider">{label}</p>
    <p className="text-base font-semibold text-text-dark mt-1">{value}</p>
  </div>
);


export default function CompanyCard({ company }) {
  const { logoUrl, name, details } = company;

  return (
    <article className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col">
      {/* Mobile and Desktop Header */}
      <header className="flex flex-col md:flex-row items-center gap-4">
        <img src={logoUrl} alt={`${name} Logo`} className="h-20 w-auto object-contain md:h-16 md:w-16" />
        <h2 className="text-base text-center md:text-left md:text-xl font-medium text-primary">{name}</h2>
      </header>

      {/* --- Mobile Details Grid --- */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 my-6 md:hidden">
        <InfoItem label="Price Band" value={details.priceBand} />
        <InfoItem label="Open" value={details.openDate} />
        <InfoItem label="Close" value={details.closeDate} />
        <InfoItem label="Issue Size" value={details.issueSize} />
        <InfoItem label="Issue Type" value={details.issueType} />
        <InfoItem label="Listing Date" value={details.listingDate} />
      </div>

      {/* --- Desktop Details Grid --- */}
      <div className="hidden md:grid grid-cols-3 gap-x-4 gap-y-6 my-6">
        <InfoItemDesktop label="Price Band" value={details.priceBand} />
        <InfoItemDesktop label="Open" value={details.openDate} />
        <InfoItemDesktop label="Close" value={details.closeDate} />
        <InfoItemDesktop label="Issue Size" value={details.issueSize} />
        <InfoItemDesktop label="Issue Type" value={details.issueType} />
        <InfoItemDesktop label="Listing Date" value={details.listingDate} />
      </div>

      <footer className="mt-auto flex items-center gap-4">
        <a href="#" className="flex-1 max-w-[120px] text-center py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all text-sm md:text-base">
          RHP
        </a>
        <a href="#" className="flex-1 max-w-[120px] text-center py-2 bg-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base">
          DRHP
        </a>
      </footer>
    </article>
  );
}