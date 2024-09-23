"use client";
import React from "react";
import Hero from "@/components/Hero";
import Herostack from  "@/components/Herostack";
import Skills from "@/components/Skills";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Timecard from '@/components/Timecard';
import Approach from '@/components/Approach';
import PromoCard from "@/components/Promocard";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/Floatingnav";

export default function BackgroundBeamsDemo() {
  return (
    (
      <main className="relative bg-black text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
       <FloatingNav/>
        <Hero />
        <Herostack/>
        <Skills/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Timecard/>
        <Approach/>
        <PromoCard/>
        <Footer/>
      </div>
    </main>
    )
  );
}
