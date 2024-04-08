import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='w-full h-max sm:h-max bg-[#f3f2ff] flex flex-col sm:flex-row justify-center p-10 '>
    
    
          <div className=" md:w-[50%] md:[100%] p-10 flex justify-center w-full sm:w-1/2">
              <div className="  w-full lg:w-[80%]">
                <h1 className=" font-montserrat text-[3rw] md:text-[2vw] font-semibold leading-14 text-left">
                  Our Bespoke Website Include The Fllowing
                </h1>
                <h6 className="  mt-[4%] text-[1.1vw] font-montserrat text-base font-normal leading-6 text-left">
                  Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus
                  vulputate aenean aliquam accumsan vestibulum in sit Blandit
                  sodales lacus vulputate aenean aliquam accumsa
                </h6>
               
              </div>
            </div>
          <div className='bg-[#f3f2ff]  h-[100vh] flex justify-center items-center w-full sm:w-1/2'>
          <div className=' w-full lg:w-[60%]  h-max items-center gap-5 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]'>
          <h1 className='p-3 font-montserrat text-base font-semibold leading-7 text-left'> Just fill out the form below  to get started.</h1>
          <form className="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='text' placeholder='Company'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='number' placeholder='Phone number'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='file' placeholder='Send us your brief'
                        className=" w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                       
                    <textarea placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>

                        <input type="checkbox" />
                        <label htmlFor="checkbox" className='ml-3'>
                         I agree to have my information stored <span className='cardreadmore'>Privacy Policy</span>.
                        </label>
                    <button type='button'
                        className=" sub_but text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">
                          Send your message</button>
                </form>
            </div>

          </div>
    </div>
      
    </>
  )
};

export default Contact;
