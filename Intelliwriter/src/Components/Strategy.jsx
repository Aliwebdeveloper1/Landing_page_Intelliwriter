import React from "react";
import funnel from "../assets/funnel.png";

const Strategy = () => {
  return (
    <>
    <div className=" w-[100%] flex justify-center items-center  px-5 sm:px-20 py-10">


      <div className=" flex-col justify-center items-center text-center w-[70%] ">
        <div className="">
          <h1 className="font-montserrat text-3xl font-semibold leading-56 text-center">
            An Integrated Team for unique Web <br />
            design and strategic digital marketing
          </h1>

          <p className="mt-[4%]">
            Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
            vulputate aenean <br/> aliquam accumsan vestibulum in sit Blandit sodales
            lacus vulputate aenean aliquam <br /> accumsan vestibulum in sit m
            accumsan.
          </p>
        </div>
        <div className="flex justify-center  mt-[2%]">
          <img className="" src={funnel} alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Strategy;
