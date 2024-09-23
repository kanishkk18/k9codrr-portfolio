import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data/index";
import MagicButton from "./MagicButton";
import  AnimatedTooltip  from "./ui/animated-tooltip";
import React from "react";
import { people } from "@/data/index";
import Squares from './ui/squares';


const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}

      <div className="lg:flex md:flex grid gap-4 ">
        <div id="footer-border-two" className="flex-[50%] p-8">
          
<div id="footer-border" className="flex flex-col justify-center h-full items-center text-center ">
<div className="flex flex-row items-center pt-10 justify-center  mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
 <h2 className="text-2xl font-semibold">We are loved by our Clients</h2>
 <p className="px-10 py-5 text-[18px] w-90%]">With eyes full of passion for the future, we're here to turn your dreams into reality. Join us on this exciting journey! </p>
</div>
        </div>
      
       <div id="contact-form" className=" flex-[40%] px-4">
        <h2 className="text-2xl font-bold text-white">Get in touch</h2>
        <p className="text-white text-[16px] my-4">Please reach out to us and we will get back to you at the speed of light.</p>
        <form  action="https://submit-form.com/pAhKnrOuX"
  method="POST" className="flex flex-col cursor-text  gap-2">
          <label htmlFor="text">Full Name</label>
          <input type="text" name="" className="py-2 px-2 rounded-[6px] mb-4 bg-neutral-900"  placeholder="Kanishkk Bansal"/>
          <label htmlFor="text">Email addresss</label>
          <input type="text" name="" className="py-2 px-2 rounded-[6px] mb-4 bg-neutral-900"  placeholder="hello@johndoe.com"/>
          <label htmlFor="text">Company</label>
          <input type="text" name="" className="py-2 px-2 rounded-[6px] mb-4 bg-neutral-900"  placeholder="Google, meta "/>
          <label htmlFor="text">Message</label>
         <input type="text" name="" placeholder="Enter your message here " className="pt-2 pb-16 px-2 rounded-[6px] mb-2 bg-neutral-900" />
          <button type="submit" className="w-full">
          <MagicButton
            title="Submit"
            icon={<FaLocationArrow />}
            position="right"
             otherClasses="!bg-[#000000]"
          />
          </button>
        </form>
       </div> 
       </div>
       
       
      
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 k9codrr 
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
        <a href={info.link}> <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div> </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;