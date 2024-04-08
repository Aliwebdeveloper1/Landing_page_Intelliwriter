import React from "react";
import material from "../assets/material.png";
import Aslam from "./Aslam";
import { GoArrowUpRight } from "react-icons/go";
import wave from "../assets/waves.png";
import choose from "../assets/choose.png";
import globe from "../assets/Globe.png";

const Choose = () => {
  return (
    <>
    <div className="w-full h-auto">

     <div className=" relative flex h-auto flex-col w-[100%] ">
        <div className=" z-10   relative  choose lg:py-40  text-center font-montserrat text-2xl font-semibold px-5 sm:px-20 p-10 flex flex-col justify-center items-center ">
          <img className="w-full h-full absolute  top-0 left-0" src={choose} alt="" />
          <h1 className="relative text-3xl  ">Why Choose Us</h1>
          <Aslam />
        </div>

        <div className="herosection  h-max w-full p-10 xl:-mt-32 lg:-mt-32 -mt-28  flex justify-center items-center">
        <img className="w-full absolute  z-20  left-0" src={wave} alt="" />
          <div className="mt-[10%] z-30 h-max  w-full xl:w-[80%] flex flex-col md:flex-row">
            <div className="w-full md:w-[50%] md:[100%] p-10 flex justify-end">
              <div className="  w-full lg:w-[80%]">
                <h1 className="text-white font-montserrat text-[3rw] md:text-[2vw] font-semibold leading-14 text-left">
                  Our Bespoke Website Include The Fllowing
                </h1>
                <h6 className=" text-white mt-[4%] text-[1.1vw] font-montserrat text-base font-normal leading-6 text-left">
                  Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
                  vulputate aenean aliquam accumsan vestibulum in sit Blandit
                  sodales lacus vulputate aenean aliquam accumsa
                </h6>
                <button className="text-white about_but1 md:mt-[10%] mt-[5%] border flex w-auto h-auto px-8 py-4 gap-5 rounded-full ">
                  About Us <GoArrowUpRight />
                </button>
              </div>
            </div>
            <div className="  w-full md:w-[50%] flex flex-col justify-center items-center">
              <div className="mt-[3%] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="w-14 h-14 mr-4 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <img className="w-5 h-h" src={globe} alt="" />
                </div>
                <a href="#">
                  <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Bespoke Design
                  </h5>
                </a>
                <p className="mb-4 font-normal text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
                  vulputate aenean aliquam accumsan vestibulum in sit Blandit
                  sodales lacus vulputate aenean aliquam accumsan vestibulum in
                  sit m accumsan ipsum.
                </p>
              </div>
              <div className=" mt-[3%] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="w-14 h-14 mr-4 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <img className="w-5 h-h" src={globe} alt="" />
                </div>
                <a href="#">
                  <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Mobile Optimised
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
                  vulputate aenean aliquam accumsan vestibulum in sit Blandit
                  sodales lacus vulputate aenean aliquam accumsan vestibulum in
                  sit m accumsan ipsum
                </p>
              </div>
              <div className=" mt-[3%] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="w-14 h-14 mr-4 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <img className="w-5 h-h" src={globe} alt="" />
                </div>
                <a href="#">
                  <h5 className="mt-3 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    SEO Optimised
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
                  vulputate aenean aliquam accumsan vestibulum in sit Blandit
                  sodales lacus vulputate aenean aliquam accumsan vestibulum in
                  sit m accumsan ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 

    </div>
    </>
  );
};

export default Choose;
