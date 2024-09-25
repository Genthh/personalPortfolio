import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SliderProps, Tooltip } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import gsap from "gsap";
import { Button } from "./controlled/Button";
import GitHub from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import Dwello from "../../public/images/dwello.png";
import GentPortfolio from "../../public/images/gentportfolio.png";
import ChuckNorris from "../../public/images/chuckNorris.png";

const slides = [
  {
    id: 1,
    title: "Dwello Project",
    technologies: ["Next Js", "Gsap", "Tailwind CSS"],
    content:
      "The Dwello app is designed to help users find their perfect home with an interactive and visually appealing interface. The application leverages the power of Next.js for server-side rendering and GSAP for smooth and engaging animations.",
    image: Dwello,
  },
  {
    id: 2,
    title: "Gent Portfolio V1",
    technologies: ["Next Js", "Three js", "Gsap", "Tailwind CSS"],
    content:
      "Gent Portfolio V1 is a modern digital showcase of personal projects. Built with Next.js for performance, it features immersive 3D elements using Three.js, with smooth animations powered by GSAP. Tailwind CSS ensures a responsive and clean.",
    image: GentPortfolio,
  },
  {
    id: 3,
    title: "Chuck Norris Jokes",
    technologies: ["Next Js", "ThreeGsap", "Tailwind CSS"],
    content:
      "Gent Portfolio V1 is a modern digital showcase of personal projects. Built with Next.js for performance, it features immersive 3D elements using Three.js, with smooth animations powered by GSAP. Tailwind CSS ensures a responsive and clean.",
    image: ChuckNorris,
  },
];

const Slider: React.FC<SliderProps> = () => {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useGSAP(() => {
    gsap.fromTo(
      slideRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [currentSlide]);

  return (
    <div className="flex md:flex-row flex-col justify-center gap-x-5 items-center">
      <button
        onClick={prevSlide}
        className="border-2 text-customWhite hidden md:block border-customWhite hover:border-darkPurple bg-transparent hover:bg-darkPurple ease-in duration-150 rounded-full px-2 py-1 hover:text-primary"
      >
        <NavigateNextIcon className=" rotate-180" />
      </button>
      <div className="w-full overflow-hidden border-2 border-darkPurple shadow-xl rounded ">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 gap-y-4 flex flex-col md:items-start rounded px-2 py-4 text-customWhite w-full"
            >
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold text-center text-darkPurple">
                  {slide.title}
                </h1>
                <div className="flex flex-wrap mt-1 gap-x-2 ">
                  {slide.technologies.map((tech, index) => (
                    <button
                      key={index}
                      className="text-customWhite text-sm rounded-full border-customWhite border-2 px-2 py-1 "
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap">
                <p className="">{slide.content}</p>
              </div>
              <div className="flex gap-x-3 items-end">
                <div className="md:w-1/2">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={400}
                    height={400}
                    className="rounded"
                  />
                </div>
                <Tooltip title="GitHub Repository" placement="top" arrow>
                  <GitHub sx={{ fontSize: 35, cursor: "pointer" }} />
                </Tooltip>

                <Tooltip title="Open Project" placement="top" arrow>
                  <OpenInNewIcon sx={{ fontSize: 35, cursor: "pointer" }} />
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center  md:hidden gap-x-5 md:h mt-2">
        <button
          onClick={prevSlide}
          className="border-2 text-customWhite  border-customWhite hover:border-darkPurple bg-transparent hover:bg-darkPurple ease-in duration-150 rounded-full px-2 py-1 hover:text-primary"
        >
          <NavigateNextIcon className=" rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="border-2 text-customWhite border-customWhite hover:border-darkPurple bg-transparent hover:bg-darkPurple ease-in duration-150 rounded-full px-2 py-1 hover:text-primary"
        >
          <NavigateNextIcon />
        </button>
      </div>
      <button
        onClick={nextSlide}
        className="border-2 hidden md:block text-customWhite border-customWhite hover:border-darkPurple bg-transparent hover:bg-darkPurple ease-in duration-150 rounded-full px-2 py-1 hover:text-primary"
      >
        <NavigateNextIcon />
      </button>
    </div>
  );
};

export default Slider;
