import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTelegram, FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const footer = () => {
  return (
    <>
      <div className="bg-[#1C0C26] h-max w-[100%] p-10 ">
        <div className=" h-28 flex  justify-between items-center">
          <button className="h-max but_work text-white rounded py-3 px-4 flex">
            <img className="w-[200px]" src={logo} alt="" />
          </button>
          <button className=" h-max items-center gap-2 but_work text-white rounded-full py-3 px-5 hidden sm:flex ">
            Contact us <GoArrowUpRight />
          </button>
        </div>
        <div className="sub_but bg_line w-[100%] h-1"></div>
        <div className=" mt-10 w-full flex justify-between lg:flex-row flex-col">
          <div className="lg:w-[40%] w-full">
            <div className="border-b-2 border-white pb-3 md:w-full w-max">
              <h1 className="text-white font-montserrat text-2xl font-semibold leading-7 text-left">
                Services
              </h1>
            </div>
            <div className="mt-3">
              <div className="flex justify-between flex-col md:flex-row">
                <ul className="text-white font-montserrat text-base font-normal leading-10 text-left">
                  <li className="font-bold">
                    <a href="#" className="">
                      Digital Marketing
                    </a>
                  </li>
                  <li className="opacity-80 hover:opacity-100">
                    <a href="#" className="">
                      Email Nurture
                    </a>
                  </li>
                  <li className="opacity-80 hover:opacity-100">
                    <a href="#" className="">
                      SEO
                    </a>
                  </li>
                  <li className="opacity-80 hover:opacity-100">
                    <a href="#" className="">
                      Social Media Marketing
                    </a>
                  </li>
                  <li className="opacity-80 hover:opacity-100">
                    <a href="#" className="">
                      Conversion Rate Optimization
                    </a>
                  </li>
                  <li className="opacity-80 hover:opacity-100">
                    <a href="#" className="">
                      Copy Writing
                    </a>
                  </li>
                  <li className="opacity-80 hover:opacity-100">
                    <a href="#" className="">
                      Email Marketing
                    </a>
                  </li>
                  <li className="opacity-80 hover:opacity-100">
                    <a href="#" className="">
                      Remarketing
                    </a>
                  </li>
                  <li className="opacity-80 hover:opacity-100">
                    <a href="#" className="">
                      PPC
                    </a>
                  </li>
                </ul>

                <div>
                  <ul className="text-white font-montserrat text-base font-normal leading-10 text-left">
                    <li className="font-bold">
                      <a href="#" className="">
                        Bespoke Web Design
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100">
                      <a href="#" className="">
                        Web Design
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100">
                      <a href="#" className="">
                        Web Redesign
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100">
                      <a href="#" className="">
                        UI/UX Design
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100">
                      <a href="#" className="">
                        Brand Indentity and Logo
                      </a>
                    </li>
                    <li className="font-bold">
                      <a href="#" className="">
                        App Development
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[55%] w-full ">
            <div className="mt-3">

              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-24">
                <div>
                  <div className="border-b-2 border-white pb-3 mt-4 md:w-full w-max">
                    <h1 className="text-white font-montserrat text-2xl font-semibold leading-7 text-left">
                      Home
                    </h1>
                  </div>
                  <div className="border-b-2 border-white pb-3 mt-4 md:w-full w-max">
                    <h1 className="text-white font-montserrat text-2xl font-semibold leading-7 text-left">
                      About us
                    </h1>
                  </div>
                  <div className="border-b-2 border-white pb-3 mt-4 md:w-full w-max">
                    <h1 className="text-white font-montserrat text-2xl font-semibold leading-7 text-left">
                      Contact us
                    </h1>
                  </div>
                  <p className="w-[60%] opacity-80 mt-20 text-white">
                    United Kington, TW4 7LU London
                  </p>
                </div>

                <div>
                  <div className="border-b-2 border-white pb-3 mt-4 md:w-full w-max">
                    <h1 className="text-white font-montserrat text-2xl font-semibold leading-7 text-left">
                      Resources
                    </h1>
                  </div>
                  <ul className="text-white font-montserrat text-base font-normal leading-10 text-left">
                    <li className="opacity-80 hover:opacity-100">
                      <a href="#" className="">
                        Our work
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100">
                      <a href="#" className="">
                        Insights
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="border-b-2 border-white pb-3 mt-4 md:w-full w-max">
                    <h1 className="text-white font-montserrat text-2xl font-semibold leading-7 text-left">
                      Social media
                    </h1>
                  </div>
                  <ul className="text-white font-montserrat text-base font-normal leading-10 mt-4 text-left">
                    <li className="opacity-80 hover:opacity-100 flex gap-2 items-center">
                      <div className="w-[30px] h-[30px] rounded-full bg-[#5B53F9] flex justify-center items-center">
                        <FaFacebookF />
                      </div>
                      <a href="#" className="">
                        Facbook
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100 flex gap-2 items-center">
                      <div className="w-[30px] h-[30px] rounded-full bg-[#5B53F9] flex justify-center items-center">
                        <FaInstagram />
                      </div>
                      <a href="#" className="">
                        Instagram
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100 flex gap-2 items-center">
                      <div className="w-[30px] h-[30px] rounded-full bg-[#5B53F9] flex justify-center items-center">
                        <FaTwitter />
                      </div>
                      <a href="#" className="">
                        Twitter
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100 flex gap-2 items-center">
                      <div className="w-[30px] h-[30px] rounded-full bg-[#5B53F9] flex justify-center items-center">
                        <FaTelegram />
                      </div>
                      <a href="#" className="">
                        Telegram
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100 flex gap-2 items-center">
                      <div className="w-[30px] h-[30px] rounded-full bg-[#5B53F9] flex justify-center items-center">
                        <FaYoutube />
                      </div>
                      <a href="#" className="">
                        YouTube
                      </a>
                    </li>
                    <li className="opacity-80 hover:opacity-100 flex gap-2 items-center">
                      <div className="w-[30px] h-[30px] rounded-full bg-[#5B53F9] flex justify-center items-center">
                        <FaTiktok />
                      </div>
                      <a href="#" className="">
                        Tiktok
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end">
                <div>
                  <p className="text-white text-lg mt-10">
                    Subscribe to our weekly newsletter today!
                  </p>
                  <div className="flex border-2 border-[#AC71D6] w-full sm:w-[400px] rounded-lg mt-3 overflow-hidden">
                    <input type="text" placeholder="Enter your email address here" className="text-white px-5 w-[85%] h-[50px] bg-transparent " />
                    <button className="w-[15%] sub_but flex justify-center items-center text-white"><FaAngleRight/></button>
                  </div>
                </div>
              </div>
                <button className=" h-max mt-5 items-center gap-2 but_work text-white rounded-full py-3 px-8 sm:hidden flex ">
            Contact us <GoArrowUpRight />
          </button>
            </div>
          </div>
        </div>
                <p className="text-white opacity-80 text-center mt-10">
                ©Copyright. 2024 Web Magnetism All rights reserved I Terms and condition I Privacy Policy.
                </p>
      </div>
    </>
  );
};

export default footer;
