// src/components/PageHeader.jsx
import React from 'react';

export default function PageHeader() {
  return (
    <section className="my-6 md:my-8">
      <div className="hidden md:block text-sm text-text-light">
        <a href="#" className="text-blue-600 hover:underline">Bluestock</a>
        <span> &gt; </span>
        <a href="#" className="text-blue-600 hover:underline">IPO</a>
        <span> &gt; </span>
        <span className="text-text-dark">UPCOMING IPO</span>
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium md:font-semibold text-text-dark mt-2">
        Upcoming IPO
      </h1>
      <p className="mt-2 text-sm md:text-base text-text-light max-w-3xl leading-relaxed">
        Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later.
      </p>
    </section>
  );
}