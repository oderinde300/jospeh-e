"use client";
import React, { useState } from "react";

const Accordion = ({ title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4">
      <div
        className="flex items-center justify-between cursor-pointer w-full"
        onClick={toggleAccordion}
      >
        <h2 className="text-2xl font-semibold text-primary-blue-1 ">{title}</h2>

        {isOpen && (
          <img src="imgs/ArrowDown.svg" alt="arrow" className="ml-auto" />
        )}
        {!isOpen && (
          <img src="imgs/arrowUp.svg" alt="arrow" className="ml-auto" />
        )}
      </div>
      {isOpen && (
        <div className="mt-4 text-base font-normal text-white">
          <p>{subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
