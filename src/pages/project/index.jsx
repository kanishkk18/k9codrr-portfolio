"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Footer from "@/components/Footer";
import FloatingNav  from "@/components/Floatingnav";
import Promocard from "@/components/Promocard";
import Mobilenav from "../navbar/mobilenav";
import Allproject from "@/components/Allproject";

export default function HeroParallaxDemo() {
  return (
     <div className="bg-black text-white" >
      <div className="hidden md:flex lg:flex">
       <FloatingNav navItems={[]} />
       </div>
       <div className="fixed flex w-full">
       <Mobilenav/>
       </div>
       
      <div className="h-[100%]">
      <HeroParallax products={products} />
      </div>
      <Allproject/>
<div className="mx-10">
<Promocard/>
</div>
<div className="mx-10">
<Footer />
</div>
  </div>
  )
}
export const products = [
  {
    title: "Conferio",
    link: "https://conferio-calls.vercel.app/",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726055970/Kanishkk/scl4wvzyfl5omzjt66q8.jpg",
  },
  {
    title: "Conferio",
    link: "https://conferio-calls.vercel.app/",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726055971/Kanishkk/dxqzn07qbnlioszkq5g7.jpg",
  },
  {
    title: "TRS",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726048850/Kanishkk/iwyad26wkcqus4hngein.jpg",
  },

  {
    title: "TRS",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726048220/Kanishkk/vg7ygqczb5zcekvgsvvk.jpg",
  },
  {
    title: "BVMX",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726053265/Kanishkk/sfnnfuouahitmu6blkuk.jpg",
  },
  {
    title: "BVMX",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726053266/Kanishkk/epcemtonsspiyx0kvepp.jpg",
  },

  {
    title: "BVM_Dash",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726048230/Kanishkk/jmkkydhhr7dxfuqafcb1.jpg",
  },
  {
    title: "BVM_Dash",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726053971/Kanishkk/xbx2yystbejm0uwbzphz.jpg",
  },
  {
    title: "ChatHive",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725954315/b26z6jcnvimjt5raegk0.png",
  },
  {
    title: "ChatHive",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Instagram",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1725703772/zgolgrx7q0roi5jrgkb8.jpg",
  },

  {
    title: "Instagram",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726660841/sbqsjovldxd1av37anza.jpg",
  },
  {
    title: "Netflix-clone",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726505511/vpnutoqstrmvvh181isq.jpg",
  },
  {
    title: "Spotless-drycleaners",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726505050/n57peee13cen0uqsayyp.jpg",
  },
  {
    title: "Spotless-drycleaners",
    link: "",
    thumbnail:
      "https://res.cloudinary.com/kanishkkcloud18/image/upload/v1726505051/l2nnzxzo0wwayhcdl4ep.jpg",
  },
];
