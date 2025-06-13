// src/components/CompanyGrid.jsx
import React from 'react';
import CompanyCard from './CompanyCard';

export default function CompanyGrid({ companies }) {
  return (
    // Single column by default, 2 columns on medium screens, 3 on large screens
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </section>
  );
}