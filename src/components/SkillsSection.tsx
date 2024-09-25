import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const skills = [
  { name: "JavaScript / TypeScript", level: "Expert" },
  { name: "React Js / Next Js", level: "Expert" },
  { name: "HTML5 / CSS3 / Tailwind", level: "Expert" },
  { name: "Git / Github", level: "Expert" },
  { name: "GSAP", level: "Expert" },
  { name: "Three Js", level: "Intermediate" },
  { name: "GraphQL / Hasura / Prisma", level: "Intermediate" },
];

const SkillsSection = () => {
  return (
    <div className="text-white border-2 border-darkPurple flex flex-col gap-y-3 bg-opacity-50 shadow-2xl px-4 py-2 rounded">
      <h1 className="text-2xl font-bold text-darkPurple">My Skills</h1>
      <ul className="list-disc md:px-10 px-5 ">
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.name}: {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
