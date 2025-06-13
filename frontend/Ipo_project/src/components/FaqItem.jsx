// src/components/FaqItem.jsx
import React from 'react';

export default function FaqItem({ question, children, defaultOpen = false }) {
  return (
    <details className="bg-white rounded-lg group shadow-sm" open={defaultOpen}>
      <summary className="flex items-center justify-between p-4 md:p-6 font-semibold cursor-pointer list-none">
        {/* Smaller font size on mobile */}
        <span className="text-base md:text-lg pr-4">{question}</span>
        <span className="text-3xl font-light text-primary transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-4 md:px-6 pb-4 md:pb-6 text-text-light text-sm md:text-base">
        {children}
      </div>
    </details>
  );
}