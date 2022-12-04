import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AiFillHeart } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";
import { truncate } from "lodash";
import { Title } from "../utils";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide className="mb-0.5" key={i}>
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                      src={val.img}
                      alt={`img/story/${i}`}
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <AiFillHeart className=" text-red-500 w-5 h-5" />
                      <span className="text-xs font-bold">{val.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <BsFillClockFill className=" w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <BsFillClockFill className=" text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">
                        {val.by}
                      </span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">
                      {val.title}
                    </h1>
                    <p className="text-sm text-justify lg:text-xs">
                      {truncate(val.text, { length: 175 })}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      href={val.url}
                      target="_blank"
                      role={"button"}
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 px-7  rounded active: scale-90 transition-all duration-100 ease-in-out  sm:text-sm"
                    >
                      {val.btn}
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
