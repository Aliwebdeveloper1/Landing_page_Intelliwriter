import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import vector from "../assets/Vector.png";
import logo from "../assets/logo.png";
import curve from "../assets/sec2main.png";
const HeroSection = () => {
  return (
    <>
      <div className="herosection h-[100vh] w-full px-5 sm:px-20 py-10  flex flex-col  gap-32 relative overflow-hidden">
        <div className="nav h-12 w-full flex  justify-between items-center">
          <div className=" cursor-pointer">
            <img src={logo} alt="" />
          </div>
          <div className=" cursor-pointer">
            <img src={vector} alt="" />
          </div>
        </div>

        <div className="m-auto h-[100dvh]  w-[70%] text-center flex-col justify-center items-center">
          <h1 className="text-center font-montserrat sm-text-[4vw] text-[5vw] lg-text-[4vw] font-bold leading-91 tracking-wide text-white">
            WEB MAGNETISM
          </h1>
          <p className=" text-white font-montserrat text-base font-medium leading-30 ">
            Transforming Businesses With Unique Web Design And <br />
            Strategic Digital Marketing For Impactful Online Visibility.
          </p>

          <button className=" mt-8 text-white button_hero  px-5 py-4 rounded-full border-t border-r border-b border-l border-opacity-0">
           <p className="flex gap-5">
           GET A PROPOSAL <GoArrowUpRight />
            </p> 
          </button>
        </div>
        <img className="w-full absolute left-0 top-[77%]" src={curve} alt="" />
      </div>
    </>
  );
};

export default HeroSection;
