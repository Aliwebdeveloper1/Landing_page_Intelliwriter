import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import b2b from "../assets/b2b.png";
import app from "../assets/app.png";
import ecom from "../assets/ecom.png";

// NextArrow component
const NextArrow = ({ className, style, onClick }) => {
  return (
    <button
      className="text-purple-800 absolute right-[40%] top-[110%]"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </button>
  );
};

// PrevArrow component
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <button
      className="text-purple-800 absolute left-[40%] top-[110%]"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </button>
  );
};

const WorkSlider = () => {
  const [index, setindex] = useState(0);

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: function (index) {
      setindex(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //   dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(index);

  return (
    <>
      <div className="p-2 ">
        <div className="mt-4 h-max w-[full]  sm:flex-col  md:flex-col md:items-start lg:items-start  xl:flex-row  flex justify-between xl:items-end p-10">
          <div className="lg:w-[40%] w-[100%] sm:w-[60%]">
            <h1 className="font-montserrat text-4xl font-semibold leading-[56px] text-left">
              OUR WORK
            </h1>
            <p className="mt-4 ">
              We don’t claim to be gurus or wizards. We’re just a super
              experienced, passionate team who knows how to get results for our
              clients. All our work is custom and thoughtfully designed,
              written, and developed with your business goals in mind.
            </p>
          </div>
          <div>
            <button className="but_work text-white rounded-full py-3 px-5 flex">
              VIEW FULL PORTFOLIO <GoArrowUpRight />
            </button>
          </div>
        </div>
        <div className="mt-2 relative w-[95%] m-auto border-2 pb-32 ">
          <div className="flex w-max gap-5 absolute top-[91%] left-1/2 -translate-x-1/2">
            <div
              className={`border border-[#785EEB] rounded-full w-[12px] h-[12px] ${
                index === 0 ? "bg-[#785EEB]" : ""
              }`}
            ></div>
            <div
              className={`border border-[#785EEB] rounded-full w-[12px] h-[12px] ${
                index === 3 ? "bg-[#785EEB]" : ""
              }`}
            ></div>
            <div
              className={`border border-[#785EEB] rounded-full w-[12px] h-[12px] ${
                index === 6 ? "bg-[#785EEB]" : ""
              }`}
            ></div>
          </div>
          <Slider className="relative" {...settings}>
            <div className=" p-2 flex justify-center items-center ">
              <div className="">
                <img src={b2b} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left">
                Redesign of b2b website
              </h1>
              <p className="ml-14 font-montserrat text-base font-normal leading-[24px] text-left">
                Web design
              </p>
            </div>
            <div className=" p-2 text-left flex justify-center items-center">
              <div className="">
                <img src={app} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left">
                MOBILE APPLICATION
              </h1>
              <p className="ml-14 font-montserrat text-base font-normal leading-[24px] text-left">
                App development{" "}
              </p>
            </div>
            <div className=" p-2 text-left flex justify-center items-center">
              <div className="">
                <img src={ecom} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left  capitalize">
                E-COMMERCE SHOP
              </h1>
              <p className="ml-14 font-montserrat text-base font-normal leading-[24px] text-left">
                Web development
              </p>
            </div>
            <div className=" p-2 text-left flex justify-center items-center">
              <div className="">
                <img src={b2b} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left">
                Redesign of b2b website
              </h1>
              <p className="ml-14 font-montserrat text-base font-normal leading-[24px] text-left">
                Web design
              </p>
            </div>
            <div className=" p-2 text-left flex justify-center items-center">
              <div className="">
                <img src={app} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left">
                MOBILE APPLICATION
              </h1>
              <p className="ml-14 font-montserrat text-base font-normal leading-[24px] text-left">
                App development{" "}
              </p>
            </div>
            <div className=" p-2 text-left flex justify-center items-center">
              <div className="">
                <img src={ecom} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left  capitalize">
                E-COMMERCE SHOP
              </h1>
              <p className="ml-14 font-montserrat text-base font-normal leading-[24px] text-left">
                Web development
              </p>
            </div>
            <div className=" p-2 text-left flex justify-center items-center">
              <div className="">
                <img src={b2b} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left">
                Redesign of b2b website
              </h1>
              <p className="ml-14 font-montserrat text-base font-normal leading-[24px] text-left">
                Web design
              </p>
            </div>
            <div className=" p-2 text-left flex justify-center items-center">
              <div className="">
                <img src={app} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left">
                MOBILE APPLICATION
              </h1>
              <p className="ml-14 font-montserrat text-base font-normal leading-[24px] text-left">
                App development{" "}
              </p>
            </div>
            <div className=" p-2 text-left flex justify-center items-center">
              <div className="">
                <img src={ecom} alt="" />
              </div>
              <h1 className="ml-14 font-montserrat text-base font-semibold leading-[30px] text-left  capitalize">
                E-COMMERCE SHOP
              </h1>
              <p className="ml-14font-montserrat text-base font-normal leading-[24px] text-left">
                Web development
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default WorkSlider;
