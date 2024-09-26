"use client";
import About from "@/components/About";
import { Navbar } from "@/components/Navbar";
import React, { useRef } from "react";

const page = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="max-w-6xl flex  flex-col   md:mx-auto  md:px-4 mx-5 "
    >
      <div className=" md:mx-28 ">
        <About />
      </div>
    </div>
  );
};

export default page;
