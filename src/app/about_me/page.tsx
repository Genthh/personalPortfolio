"use client";
import About from "@/components/About";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setLoading(false);
        },
      });
    }, 100);
  }, []);

  useGSAP(() => {
    if (!loading) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, [loading]);
  return (
    <div
      ref={containerRef}
      className="max-w-6xl h-dvh flex  flex-col   md:mx-auto  md:px-4 mx-5 "
    >
      {loading ? (
        <></>
      ) : (
        // <Loader />
        <>
          <Navbar />
          <div className=" md:mx-28 ">
            <About />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
