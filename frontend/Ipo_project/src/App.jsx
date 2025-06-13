// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import CompanyGrid from './components/CompanyGrid';
import FaqSection from './components/FaqSection';

// Sample data for the company cards. In a real app, this would come from an API.
const upcomingIPOs = [
  {
    id: 'nova-agritech',
    logoUrl: 'https://i.imgur.com/k6lP0W3.png',
    name: 'Nova Agritech Ltd.',
    details: {
      priceBand: 'Rs 39 - 41',
      openDate: '2024-01-22',
      closeDate: '2024-01-24',
      issueSize: '143.81 Cr.',
      issueType: 'Book Built',
      listingDate: '2024-01-30',
    },
  },
  {
    id: 'epack-durable',
    logoUrl: 'https://i.imgur.com/5lI8zLw.png',
    name: 'EPACK Durable Ltd.',
    details: {
      priceBand: 'Rs 218 - 230',
      openDate: '2024-01-19',
      closeDate: '2024-01-23',
      issueSize: '640.05 Cr.',
      issueType: 'Book Built',
      listingDate: '2024-01-29',
    },
  },
  {
    id: 'rk-swamy',
    logoUrl: 'https://i.imgur.com/gK65j4R.jpg',
    name: 'RK Swamy Ltd.',
    details: {
      priceBand: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: 'Not Issued',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
    },
  },
  {
    id: 'oravel-stays',
    logoUrl: 'https://i.imgur.com/gCyzvA3.png',
    name: 'Oravel Stays Ltd.',
    details: {
      priceBand: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: '8430 Cr.',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
    },
  },
  {
    id: 'imagine-marketing',
    logoUrl: 'https://i.imgur.com/V95UaBq.png',
    name: 'Imagine marketing Ltd.',
    details: {
      priceBand: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: '2000 cr.',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
    },
  },
  {
    id: 'kids-clinic',
    logoUrl: 'https://i.imgur.com/hIqA11c.jpg',
    name: 'Kids Clinic India Ltd.',
    details: {
      priceBand: 'Not Issued',
      openDate: 'Not Issued',
      closeDate: 'Not Issued',
      issueSize: 'Not Issued',
      issueType: 'Book Built',
      listingDate: 'Not Issued',
    },
  },
];


function App() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader />
        <CompanyGrid companies={upcomingIPOs} />
        <FaqSection />
      </main>
    </div>
  );
}

export default App;