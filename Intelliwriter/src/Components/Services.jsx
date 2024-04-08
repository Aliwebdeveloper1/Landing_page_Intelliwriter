import React from "react";
import laptop1 from "../assets/laptop1.png";
import mobile from "../assets/mobile.png";
import laptop2 from "../assets/laptop2.jpg";
import { GoArrowUpRight } from "react-icons/go";


const Services = () => {
  return (
    <>
      <div className="h-[auto] w-[100%]  flex flex-col p-10">
        <div className="">
          <h1 className="mt-2 font-montserrat text-3xl font-semibold leading-[56px] text-center">Overview of Services</h1>
        </div>

        <div className="mt-4 flex gap-10 h-[70%] w-full justify-center items-center lg:flex-row flex-col ">
          <div className="max-w-sm bg-white  rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={laptop1} alt="" />
            </a>
            <div className="py-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bespoke Web Design
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Eu massa turpis
                adipiscing libero rhoncus posuere tempus. Sed fringilla
                malesuada felis vitae. Montes mattis ultrices maecenas et. Ut
                ultricies viverra volutpat
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white relative font-semibold rounded-full p-[2.5px]">
                <span className="flex w-full bg-white text-black rounded-full p-2 px-10">
                Bespoke Web Design <GoArrowUpRight/>
                    </span>
                </button>
              {/* <button className=" border borders  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  rounded-full ">
              </button> */}
            </div>
          </div>
          <div className="max-w-sm bg-white  rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={mobile} alt="" />
            </a>
            <div className="py-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  App Development
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Eu massa turpis
                adipiscing libero rhoncus posuere tempus. Sed fringilla
                malesuada felis vitae. Montes mattis ultrices maecenas et. Ut
                ultricies viverra volutpat
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white relative font-semibold rounded-full p-[2.5px]">
                <span className="flex w-full bg-white text-black rounded-full p-2 px-10">
                App Development <GoArrowUpRight/>
                    </span>
                </button>
            </div>
          </div>
          <div className="max-w-sm bg-white  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={laptop2} alt="" />
            </a>
            <div className="py-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Digital Marketing
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Eu massa turpis
                adipiscing libero rhoncus posuere tempus. Sed fringilla
                malesuada felis vitae. Montes mattis ultrices maecenas et. Ut
                ultricies viverra volutpat
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white relative font-semibold rounded-full p-[2.5px]">
                <span className="flex w-full bg-white text-black rounded-full p-2 px-10">
                Digital Marketing <GoArrowUpRight/>
                    </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
