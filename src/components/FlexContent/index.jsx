import React from "react";
import Button from "../Button";

const FlexContent = ({ endpoint: { heading, title, text, btn, url, img } }) => {
  return (
    <>
      <div
        className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container`}
      >
        <div className="max-w-lg lg:max-w-none w-full md:text-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient ">
            {heading}
          </h1>
          <h1 className=" text-5l lg:text-4xl md:text-3xl sm:text-2l font-bold text-slate-900 filter drop-shadow-lg ">
            {title}
          </h1>
          <p className="xl:text-sm my-4 text-slate-900"> {text} </p>
          <a href={url} className="flex items-center" target={"_blank"} role="button">
            <Button label={btn} />
          </a>
        </div>
        <div>
          <img src={img} alt={`img/${heading}`} />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
