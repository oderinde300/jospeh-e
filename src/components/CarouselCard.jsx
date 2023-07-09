import React from "react";

const CarouselCard = ({ subtitle, name, post, logoImg, avatar }) => {
  return (
    <div className="max-w-[420px] border border-white py-6 px-8 rounded-xl">
      <img src={logoImg} />
      <p className="pt-6 font-normal text-lg">{subtitle}</p>
      <div className="mt-6 flex items-center">
        <img src={avatar} className="mr-5" />
        <div>
          <p className="text-base font-semibold">{name}</p>
          <p className="text-base font-normal">{post}</p>
        </div>
      </div>
      <div className="flex items-center mt-8">
        <p className="text-base font-normal">Read case study</p>
        <img src="imgs/ArrowRight.svg" alt="icon" className="pl-2" />
      </div>
    </div>
  );
};

export default CarouselCard;
