import React from "react";

const Card = ({ title, subtitle, bgImage, textImage }) => {
  return (
    <div className="flex flex-col w-full md:max-w-[600px]">
      <div className="max-h-[464px] w-full md:max-w-[600px] flex justify-center">
        <img src={bgImage} />
      </div>
      <p className="text-center py-6 text-[rgb(89,89,89)] font-semibold uppercase">
        {title}
      </p>
      <img src={textImage} alt="logo" />
      <p className="text-center text-[18px] text-[#595959] py-2 leading-[150%]">
        {subtitle}
      </p>
    </div>
  );
};

export default Card;
