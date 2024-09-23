import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Link } from "react-router-dom";
import { DownloadIcon } from "lucide-react";
import ShinyButton from "@/components/magicui/shiny-button";
import Mobilenav from "@/pages/navbar/mobilenav";


const Hero = () => {
  return (
    <div className="">
       
    <div className=" pt-36">
    
      <div
        className="h-screen w-full bg-black  absolute top-0 left-0 flex items-center justify-center"
      >
      
         <BackgroundBeams />
         <Mobilenav/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          <TextGenerateEffect
            words="Designing Dreams into Effortless User Interactions"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-semibold mb-3 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Kanishkk, a Web Developer based in Noida, India.
          </p>
<div className="flex gap-4 items-center mt-2 ">
          <Link to="/Projectpage">
          <ShinyButton   className="rounded-[20px] text-white text-sm font-bold px-6 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 lg:text-lg" >See My Work</ShinyButton>
            </Link>
            <a href="https://framerusercontent.com/assets/yySrZcNJWu46aEJThzMvwySEM.pdf" download><ShinyButton className="rounded-[20px] text-sm text-white font-bold px-6 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 lg:text-lg" >Download CV</ShinyButton></a>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
