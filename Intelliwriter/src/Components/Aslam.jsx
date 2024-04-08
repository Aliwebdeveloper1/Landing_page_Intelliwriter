import React from 'react'
import img from '../assets/material.png'
import img1 from '../assets/Globe.png'
import img2 from '../assets/Chat.png'

const Aslam = () => {
  return (
    <div>
<div className="flex relative flex-wrap justify-center mt-10">

<div className="p-4 max-w-sm ">
    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
        <div className="flex items-center mb-3">
            <div className="w-14 h-14 mr-4 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <img className='w-5 h-h' src={img} alt="" />
            </div>
            <h2 className="text-left font-montserrat text-base font-semibold leading-7.7 text-black dark:text-white ">
            Take Control of Your Entire Marketing Landscape
            </h2>
        </div>
        <div className="text-left flex flex-col justify-between flex-grow">
            <p className="font-montserrat text-base font-normal leading-6  text-black dark:text-gray-300">
            We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.
            </p>
            
        </div>
    </div>
</div>

<div className="p-4 max-w-sm">
    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
        <div className="flex items-center mb-3">
            <div className="w-14 h-14 mr-4 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <img className='w-5 h-h' src={img1} alt="" />
            </div>
            <h2 className="text-left font-montserrat text-base font-semibold leading-7.7 text-black dark:text-white ">
            Your Business's Dedicated Marketing Wing
            </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
            <p className="font-montserrat text-base text-left font-normal leading-6  text-black dark:text-gray-300">
            Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge.
            </p>
            
        </div>
    </div>
</div>

<div className="p-4 max-w-sm">
    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white p-8 flex-col">
        <div className="flex items-center mb-3">
            <div className="w-14 h-14 mr-4 inline-flex items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <img className='w-5 h-h' src={img2} alt="" />
            </div>
            <h2 className="text-left font-montserrat text-base font-semibold leading-7.7 text-black dark:text-white ">
            A Reliable Collaborator
            </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
            <p className="text-left font-montserrat text-base font-normal leading-6  text-black dark:text-gray-300">
            Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand.            </p>
            
        </div>
    </div>
</div>

</div>

    </div>
  )
}

export default Aslam