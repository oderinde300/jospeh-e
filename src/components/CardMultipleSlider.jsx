"use client";

import React from "react";
import { useState } from "react";
import CarouselCard from "./CarouselCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CardMultipleSlider = ({ cards }) => {
  const [activeCard, setActiveCard] = useState(0);

  const cardsToDisplay = (cardNum, count) => {
    let filterdCards = [...cards];

    if (cardNum === 3 && activeCard < 2) {
      filterdCards = cards.slice(activeCard, activeCard + 3);
    } else if (cardNum === 3 && activeCard === cards.length - 2) {
      filterdCards = [...cards.slice(activeCard, activeCard + 3), cards[0]];
    } else if (cardNum === 3 && activeCard === cards.length - 1) {
      filterdCards = [
        cards[0],
        cards[1],
        ...cards.slice(activeCard, activeCard + 3),
      ];
    } else if (cardNum === 2 && activeCard < 3) {
      filterdCards = cards.slice(activeCard, activeCard + 2);
    } else if (cardNum === 2 && activeCard === cards.length - 1) {
      filterdCards = [...cards.slice(activeCard, activeCard + 2), cards[0]];
    }

    return filterdCards;
  };

  const nextCard = () => {
    if (activeCard === cards.length - 1) {
      setActiveCard(0);
    } else {
      setActiveCard(activeCard + 1);
    }
  };

  const prevCard = () => {
    if (activeCard === 0) {
      setActiveCard(cards.length - 1);
    } else {
      setActiveCard(activeCard - 1);
    }
  };

  const handleDotClick = (index) => {
    setActiveCard(index);
  };

  return (
    <section className="h-full w-full flex flex-col items-center justify-between">
      <div className="justify-between items-center w-full hidden xl:flex transform all ease-in-out">
        {cardsToDisplay(3, 2)?.map((card, index) => (
          <CarouselCard
            subtitle={card?.subtitle}
            name={card?.name}
            post={card?.post}
            logoImg={card?.logoImg}
            avatar={card?.avatar}
          />
        ))}
      </div>
      <div className="justify-between items-center w-full hidden md:flex xl:hidden transform all ease-in-out">
        {cardsToDisplay(2, 2)?.map((card, index) => (
          <CarouselCard
            subtitle={card?.subtitle}
            name={card?.name}
            post={card?.post}
            logoImg={card?.logoImg}
            avatar={card?.avatar}
          />
        ))}
      </div>
      <div className="justify-center items-center w-full flex md:hidden">
        <CarouselCard
          subtitle={cards[activeCard]?.subtitle}
          name={cards[activeCard]?.name}
          post={cards[activeCard]?.post}
          logoImg={cards[activeCard]?.logoImg}
          avatar={cards[activeCard]?.avatar}
        />
      </div>
      <div className="flex justify-between items-center w-full mt-8">
        <div className="flex justify-between items-center w-[72px] cursor-pointer">
          {cards.map((card, index) => {
            return (
              <div
                className={`w-2 h-2 rounded-full hover:bg-primary-blue-1 ${
                  index === activeCard ? ` bg-primary-blue-1` : ` bg-white`
                }`}
                key={index}
                onClick={() => {
                  handleDotClick(index);
                }}
              ></div>
            );
          })}
        </div>
        <div className="flex justify-between items-center w-[111px]">
          <button
            className="border border-white p-3 rounded-full cursor-pointer  transform ease-in-out duration-300 hover:border-primary-blue-1 hover:text-primary-blue-1"
            onClick={prevCard}
          >
            <AiOutlineArrowRight
              size={20}
              className="rotate-180 transform ease-in-out duration-300 hover:text-primary-blue-1"
            />
          </button>
          <button
            className="border border-white p-3 rounded-full cursor-pointer  transform ease-in-out duration-300 hover:border-primary-blue-1 hover:text-primary-blue-1"
            onClick={nextCard}
          >
            <AiOutlineArrowRight
              size={20}
              className="transform ease-in-out duration-300 hover:text-primary-blue-1 "
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardMultipleSlider;
