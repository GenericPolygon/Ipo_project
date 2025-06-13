// src/components/FaqSection.jsx
import React from 'react';
import FaqItem from './FaqItem';

// Same data as before...
const faqs = [
  {
    id: 1,
    question: "How to Subscribe to an IPO?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>Login to your respective service provider.</li>
        <li>Click on the IPO button.</li>
        <li>Select the IPO you want to bid and enter the relevant details.</li>
        <li>Your subscription will be completed once you make the payment or give permission.</li>
      </ul>
    ),
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Should I buy an IPO first day?",
    answer: "This depends on your risk tolerance and investment strategy. Buying on the first day can offer potential for quick gains if there's high demand (listing gains), but it can also be highly volatile. It's often wise to observe the stock's performance for a few days.",
  },
  
];


export default function FaqSection() {
  return (
    <section className="my-12 md:my-16">
      {/* Smaller font size on mobile */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-text-dark">
        Frequently Asked Questions?
      </h2>
      <p className="mt-2 text-sm md:text-base text-text-light">
        Find answers to common questions that come in your mind related to IPO.
      </p>
      <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
        {faqs.map(({ id, question, answer, defaultOpen }) => (
          <FaqItem key={id} question={question} defaultOpen={defaultOpen}>
            {answer}
          </FaqItem>
        ))}
      </div>
    </section>
  );
}