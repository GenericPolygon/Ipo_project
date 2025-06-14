import React from 'react';
import FaqItem from './FaqItem';

const faqs = [
  {
    id: 1,
    question: "How to subscribe to an IPO?",
    answer: (
      <ul className="list-disc list-inside space-y-1 md:space-y-2">
        <li>Step 1: Login to your respective service provider.</li>
        <li>Step 2: Click on the IPO button.</li>
        <li>Step 3: Select the IPO you want to bid and enter the relevant details.</li>
        <li>Step4: Your subscription will be completed once you make the payment or give permission.</li>
      </ul>
    ),
    defaultOpen: true,
  },
  {
    id: 2,
    question: "Should I buy an IPO first day?",
    answer: (
      <ul className="list-disc list-inside">
        <li>This depends on your risk tolerance and investment strategy. Buying on the first day can offer potential for quick gains if there's high demand (listing gains), but it can also be highly volatile. It's often wise to observe the stock's performance for a few days.</li>
      </ul>
    ),
  },
    {
    id: 3,
    question: "What are the upcoming IPO’s 2021 in India?",
    answer: (
      <ul className="list-disc list-inside">
        <li>You can find a list of upcoming IPOs on the websites of the stock exchanges (NSE, BSE) and various financial news portals. This list is regularly updated as companies file their DRHP with SEBI.</li>
      </ul>
    ),
  },
  {
    id: 4,
    question: "How do you know if an IPO is good?",
    answer: (
      <ul className="list-disc list-inside">
        <li>Key factors include the company's financials, industry trends, valuation, and the reason for the IPO. Reading the Red Herring Prospectus (RHP) is crucial for detailed information.</li>
      </ul>
    ),
  },
  {
    id: 5,
    question: "How to check IPO start date?",
    answer: (
      <ul className="list-disc list-inside">
        <li>IPO start and end dates are publicly announced and can be found on stock exchange websites (NSE, BSE), financial news portals, and your broker's platform.</li>
      </ul>
    ),
  },
  {
    id: 6,
    question: "What is issue size?",
    answer: (
      <ul className="list-disc list-inside">
        <li>The issue size is the total value of the shares being offered to the public in an IPO. It's calculated by multiplying the number of shares by the issue price per share.</li>
      </ul>
    ),
  },
  {
    id: 7,
    question: "How many shares in a lot?",
    answer: (
      <ul className="list-disc list-inside">
        <li>A lot is the minimum number of shares an investor must apply for. The number of shares per lot is fixed by the company and is mentioned in the IPO details.</li>
      </ul>
    ),
  },
  {
    id: 8,
    question: "How is the lot size calculated?",
    answer: (
      <ul className="list-disc list-inside">
        <li>The lot size is determined by the company and its merchant bankers to ensure the minimum application amount is within a range of ₹10,000 to ₹15,000 as per SEBI guidelines.</li>
      </ul>
    ),
  },
  {
    id: 9,
    question: "Who decides the IPO price band?",
    answer: (
      <ul className="list-disc list-inside">
        <li>The IPO price band is determined by the company in consultation with its lead managers (investment banks), based on valuation, market conditions, and demand from anchor investors.</li>
      </ul>
    ),
  },
  {
    id: 10,
    question: "What is IPO GMP?",
    answer: (
      <ul className="list-disc list-inside">
        <li>GMP, or Grey Market Premium, is the premium at which IPO shares are traded in the unofficial grey market before they are listed. It indicates market sentiment but is not an official or guaranteed price.</li>
      </ul>
    ),
  },
    {
    id: 11,
    question: "How many lots should I apply for IPO?",
    answer: (
       <ul className="list-disc list-inside">
        <li>Retail investors can apply for a maximum of up to ₹2 lakhs in an IPO. You can calculate the maximum number of lots by dividing ₹2,00,000 by the total value of one lot at the upper price band.</li>
      </ul>
    ),
  },
];


export default function FaqSection() {
  return (
    <section className="my-12 md:my-16">
      <h2 className="text-[20px] leading-[30px] md:text-[40px] md:leading-[60px] font-medium text-black">
        Frequently Asked Questions?
      </h2>
      <p className="mt-1 md:mt-2 text-[12px] leading-[18px] md:text-2xl md:leading-9 font-normal text-black">
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