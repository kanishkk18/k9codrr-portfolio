"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

function FloatingNav({ className }) {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [navWidth, setNavWidth] = useState("90%");
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [blur, setBlur] = useState("0px");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.03) {
        setVisible(true);
        setNavWidth("82%");
        setBackgroundColor("transparent");
        setBlur("0px");
      } else {
        if (direction < 0) {
          setVisible(false);
          setNavWidth("65%");
          setBackgroundColor("rgb(13,13,13)");
          setBlur("90px");
        } else {
          setVisible(true);
          setNavWidth("60%");
          setBackgroundColor("rgb(13,13,13)");
          setBlur("90px");
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "hidden sm:flex fixed z-[5000] text-white top-3 inset-x-0 mx-auto px-4 py-2 rounded-full items-center justify-between", // 'hidden sm:flex' hides the nav on small screens
          className
        )}
        style={{
          borderRadius: "30px",
          width: navWidth,
          backgroundColor: backgroundColor,
          backdropFilter: `blur(${blur})`,
          transition:
            "width 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726084471/opgpgh2rnkohcztlu5rg.jpg"
            alt="logo"
            className="bg-white text-black p-1 rounded-md h-8 w-7"
          />
          <p className="font-bold text-white">K9codrr</p>
        </Link>

        <div className="flex items-center">
          <Link
            to="/about"
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-6 text-white dark:hover:text-neutral-300"
            )}
          >
            <span className="text-sm text-white !cursor-pointer py-2 px-3 mr-2 rounded-[20px] hover:bg-neutral-700">
              About
            </span>
          </Link>

          <Link
            to="/Projectpage"
            className={cn(
              "relative dark:text-neutral-50 text-white items-center flex space-x-6 px-3 dark:hover:text-neutral-300"
            )}
          >
            <span className="text-sm !cursor-pointer py-2 px-3 rounded-[20px] hover:bg-neutral-700">
              Projects
            </span>
          </Link>

          <Link
            to="#contact"
            className={cn(
              "relative dark:text-neutral-50 text-white items-center flex space-x-6 px-3  dark:hover:text-neutral-300"
            )}
          >
            <span className="text-sm !cursor-pointer py-2 px-3 rounded-[20px] hover:bg-neutral-700">
              Contact
            </span>
          </Link>
        </div>

        <button className="border text-sm text-white font-medium relative border-white/[0.2] dark:text-white px-4 py-2 rounded-full">
          <a href="https://wa.me/message/HEAVZO64MZNRP1">
            <span>DM Me</span>
          </a>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
        </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;