import React from "react";
import Button from "../Button";

const FlexContent = ({ ifExists, endpoint: { heading, title, text, btn, url, img } }) => {
  return (
    <>
      <div
        className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient ">
            {heading}
          </h1>
          <h1 className=" text-5l lg:text-4xl md:text-3xl sm:text-2l font-bold text-slate-900 filter drop-shadow-lg ">
            {title}
          </h1>
          <p className="xl:text-sm my-4 text-slate-900"> {text} </p>
          <a href={url} className="flex items-center" target={"_blank"} role="button">
            <Button style="bg-slate-900 shadow-slate-9 text-slate-100 py-1.5" label={btn} />
          </a>
        </div>
        <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full">
          <img className={`w-auto object-fill transition-theme `} src={img} alt={`img/${heading}`} />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
