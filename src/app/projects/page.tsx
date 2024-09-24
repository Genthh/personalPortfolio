"use client";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl h-dvh flex  flex-col md:mx-auto  md:px-4 mx-5 ">
      <Navbar />
      <div className="md:mt-40 mt-20">
        <Projects />
      </div>
    </div>
  );
};

export default page;
