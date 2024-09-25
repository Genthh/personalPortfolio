import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const InformativeSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
    });
    tl.from(paragraphRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.5,
    });
  }, [textRef, paragraphRef]);

  return (
    <div className="text-white border-2 border-darkPurple flex flex-col gap-y-3  bg- bg-opacity-50  shadow-xl px-4 py-2 rounded">
      <h1 ref={textRef} className="text-2xl font-bold">
        Who am I?
      </h1>
      <p ref={paragraphRef}>
        Innovative <span className="text-darkPurple"> Frontend Developer </span>
        with 2 years of hands-on experience in building dynamic web applications
        using a robust technology stack including
        <span className="text-darkPurple"> React.js</span>,
        <span className="text-darkPurple"> JavaScript</span>, and various
        frameworks and libraries such as Tailwind CSS, GraphQL, and Material-UI.
        Adept at full project lifecycle from design through deployment, with a
        keen focus on optimizing user interface and enhancing user engagement.
        Effective collaborator known for contributing to team success through
        hard work, attention to detail, and excellent organizational skills.
      </p>
    </div>
  );
};

export default InformativeSection;
