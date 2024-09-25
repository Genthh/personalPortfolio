import React, { useState, useRef } from "react";
import InformativeSection from "./InformativeSection";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import { Button } from "./controlled/Button";
import clsx from "clsx";
import ProjectSection from "./Projects";

const About = () => {
  const [active, setActive] = useState("about");
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const positionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  const animate = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      borderRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.7, ease: "power2.out" }
    )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5, ease: "expo", stagger: 0.3 }
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      )

      .fromTo(
        positionRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
  };

  const addToRefs = (el: HTMLButtonElement | null) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };
  const animateSection = () => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  };

  useGSAP(() => {
    animate();
  }, []);

  useGSAP(() => {
    animateSection();
  }, [active]);

  const renderSection = () => {
    switch (active) {
      case "about":
        return <InformativeSection />;
      case "experience":
        return <ExperienceSection />;
      case "skills":
        return <SkillsSection sectionRef={sectionRef} />;
      case "projects":
        return <ProjectSection />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:gap-y-10 gap-y-5 justify-center">
      <div className="flex flex-col">
        <div className="flex md:mt-40 mt-5 items-end justify-between ">
          <h1 ref={textRef} className="md:text-4xl text-2xl text-customWhite">
            Gent <span className="text-darkPurple">Hulaj</span>
          </h1>
          <p ref={positionRef} className=" text-customWhite px-0 md:text-xl ">
            Frontend Engineer
          </p>
        </div>
        <div
          ref={borderRef}
          className="border-b-2 border-customWhite transform scale-x-0 origin-left"
        ></div>
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex md:gap-x-5 gap-x-2 text-customWhite font-bold md:text-xl">
          <Button
            ref={addToRefs}
            className={clsx(
              active === "about"
                ? "bg-darkPurple "
                : "bg-transparent hover:bg-darkPurple "
            )}
            onClick={() => setActive("about")}
            text="About"
          />
          <Button
            ref={addToRefs}
            className={clsx(
              active === "experience"
                ? "bg-darkPurple "
                : "bg-transparent hover:bg-darkPurple "
            )}
            onClick={() => setActive("experience")}
            text="Experience"
          />
          <Button
            ref={addToRefs}
            className={clsx(
              active === "skills"
                ? "bg-darkPurple "
                : "bg-transparent hover:bg-darkPurple "
            )}
            onClick={() => setActive("skills")}
            text="Skills"
          />
          <Button
            ref={addToRefs}
            className={clsx(
              active === "projects"
                ? "bg-darkPurple "
                : "bg-transparent hover:bg-darkPurple   "
            )}
            onClick={() => setActive("projects")}
            text="Projects"
          />
        </div>
        <div ref={sectionRef}>{renderSection()}</div>
      </div>
    </div>
  );
};

export default About;
