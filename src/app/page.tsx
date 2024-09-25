"use client";
import { Hero } from "@/components/Hero";
import InformativeSection from "@/components/InformativeSection";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import loader from "../../public/loading.json";
import Lottie from "lottie-react";
import { Loader } from "@/components/Loader";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
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
    }, 2000);
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
      className="max-w-6xl h-dvh flex flex-col md:mx-auto md:px-4 mx-5 overflow-hidden"
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </div>
  );
}
