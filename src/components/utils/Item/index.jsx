import React from "react";
import { AiFillStar, AiFillShopping } from "react-icons/ai";
import Button from "../../Button";

const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div className="grid items-center justify-items-center">
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex  items-center justify-between w-28 my-2">
            <div className="flex  items-center bg-white px-1 rounded ">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex  items-center gap-1 ">
              <AiFillStar
                style={{ Color: "white" }}
                className="h-6 w-6 sm:h-5 sm:w-5 cursor-pointer
              bg-white transition-all duration-100 active:scale-110 leading-tight text-slate-900 md:w-4 md:h-4"
              />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              style={`bg-white px-7 py-1 rounded active: scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm bg-white/50 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 opacity-100 z-[100] shadow-sm shadow-slate-100 transition-all duration-300 p-[0.5] shadow shadow-sky-200 flex items-center justify-center`}
              prefix={
                <AiFillShopping className="h-6 w-6 sm:h-5 sm:w-5 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-slate-900" />
              }
              type="button"
              label={btn}
            />
          </div>
        </div>
        <div>
          <img
            className="h-36 w-64 trasitions-theme hover:-rotate-12"
            src={img}
            alt="img/item-img"
          />
        </div>
      </div>
    </>
  );
};

export default Item;
