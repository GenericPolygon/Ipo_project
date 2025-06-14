import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export default function FaqItem({ question, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-[10px] drop-shadow-[3px_3px_8.2px_rgba(0,0,0,0.13)] md:shadow-sm md:drop-shadow-none">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 md:py-12 md:px-16 font-semibold cursor-pointer"
      >
        <span className="text-[15px] leading-[22px] md:text-[30px] md:leading-[45px] text-black pr-4">
          {question}
        </span>
        <span className="text-[24px] md:text-[48px] text-[#5C8BFE] flex-shrink-0">
          <AiOutlinePlus
            className={`transition-transform duration-500 ease-in-out ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          />
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pl-4 pr-10 pb-4 md:pl-16 md:pr-20 md:pb-12 text-black text-sm leading-relaxed font-normal md:text-[24px] md:leading-[36px] md:font-semibold">
          {children}
        </div>
      </div>
    </div>
  );
}