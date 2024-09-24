"use client";
import About from "@/components/About";
import { Navbar } from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl h-dvh flex  flex-col   md:mx-auto  md:px-4 mx-5 ">
      <Navbar />
      <div className=" md:mx-28 ">
        <About />
      </div>
    </div>
  );
};

export default page;
