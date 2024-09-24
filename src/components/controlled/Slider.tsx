import React, { useRef } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SliderProps } from "@/types/types";

const Slider: React.FC<SliderProps> = ({
  slides,
  currentSlide,
  nextSlide,
  prevSlide,
}) => {
  const slideRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      slideRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, [currentSlide]);

  return (
    <div className="flex md:flex-row flex-col justify-center  gap-x-5 items-center">
      <button
        onClick={prevSlide}
        className="border-2 text-customWhite hidden md:block border-customWhite hover:border-darkPurple bg-transparent hover:bg-darkPurple ease-in duration-150 rounded-full px-2 py-1 hover:text-primary"
      >
        <NavigateNextIcon className=" rotate-180" />
      </button>
      <div className="w-full overflow-hidden border-2 border-darkPurple shadow-xl rounded">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 gap-y-5 flex flex-col items-start rounded px-2 py-4 text-customWhite w-full"
            >
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-2xl font-bold text-center text-darkPurple">
                  {slide.title}
                </h1>
                <p>
                  {slide.company} {slide.located} -
                  <span> {slide.duration}</span>
                </p>
              </div>
              <p>{slide.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-5 mt-2">
        <button
          onClick={prevSlide}
          className="border-2 text-customWhite block md:hidden border-customWhite hover:border-darkPurple bg-transparent hover:bg-darkPurple ease-in duration-150 rounded-full px-2 py-1 hover:text-primary"
        >
          <NavigateNextIcon className=" rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="border-2 block md:hidden text-customWhite  border-customWhite hover:border-darkPurple bg-transparent hover:bg-darkPurple ease-in duration-150 rounded-full px-2 py-1 hover:text-primary"
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
