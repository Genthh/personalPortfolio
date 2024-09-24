"use client";
import { Hero } from "@/components/Hero";
import InformativeSection from "@/components/InformativeSection";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import loader from "../../public/loading.json";
import Lottie from "lottie-react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-6xl items-center md:mx-auto px-10 md:px-4 mx-5 overflow-hidden">
      {/* {loading ? (
        <div className="flex justify-center items-center h-dvh ">
          <Lottie className="h-[500px] " animationData={loader} loop={true} />
        </div>
      ) : ( */}
      <>
        <Navbar />
        <Hero />
      </>
    </div>
  );
}
