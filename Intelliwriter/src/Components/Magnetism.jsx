import React from "react";
import secpic from "../assets/sec2.png";
import { GoArrowUpRight } from "react-icons/go";


const Magnetism = () => {
  return (
    <>
      <div className="second items-center flex flex-col md:flex-row px-20 py-10 gap-6">
        <div className="w-[100%] md:w-[40%] h-auto ">
          <h1 className="font-montserrat text-[2.5vw] font-semibold leading-56 text-center">Welcome To Web Magnetism</h1>
          <p className="text-gray-700 mt-5 font-montserrat text-base font-normal leading-27 text-left">
            Your hub for bespoke web design and digital marketing success. We
            seamlessly merge creativity and  
            <span className="font-montserrat text-base font-medium leading-27 text-left"> SEO expertise</span> to craft visually
            stunning websites that magnetize audiences.<br/>
             Our digital marketing,
            from SEO mastery to impactful campaigns, ensures your brand's
            resonance online. At Web Magnetism, we're not just designers; 
            <span className="font-montserrat text-base font-medium leading-27 text-left">
             we're
            digital architects</span>, sculpting unique online experiences that elevate
            your brand.<br/>
             Navigate the digital landscape with confidence – choose
            Web Magnetism for tailored web design and
             <span className="font-montserrat text-base font-medium leading-27 text-left"> strategic digital
            marketing</span>, where innovation meets results for a compelling online
            journey. <br/>

          </p>
            <button className="about_but md:mt-[10%] mt-[5%] border flex w-auto h-auto px-8 py-4 gap-5 rounded-full ">About Us <GoArrowUpRight /></button>
        </div>
        <div className=" w-[100%] md:w-[50%] h-[100%] flex justify-end items-center">
            <img className=" " src={secpic} alt="" />
        </div>
      </div>
    </>
  );
};

export default Magnetism;
