import React from "react";
import Lottie from "lottie-react";
import gentCoding from "../../public/gentCoding.json";
import LinkedIn from "../_svgs/linkedin.svg";
import GitHub from "../_svgs/github.svg";
import { TextSplit } from "./controlled/TextSplit";
import { Button } from "./controlled/Button";

export const Hero: React.FC = () => {
  const downloadCV = () => {
    const element = document.createElement("a");
    element.href = "/GentHulaj_cv.pdf"; // Assuming your CV is in the `public` folder
    element.download = "GentHulaj_cv.pdf"; // Optional: customize file name if you want
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element); // Clean up after download
  };

  return (
    <div className="flex md:flex-row heightContainer  flex-col md:justify-between items-center md:mt-0 ">
      <div className="flex flex-col gap-y-12 justify-center">
        <div className="flex flex-col md:gap-y-4">
          <TextSplit
            text={"Welcome community, I'm Gent."}
            fontSize="md:text-5xl text-2xl"
            style={{ color: "#b377d8" }}
          />
          <TextSplit
            text={"Frontend Developer"}
            fontSize="md:text-4xl text-xl"
          />
          <TextSplit
            text={
              "I build pixel-perfect, engaging, and accessible digital experiences."
            }
            fontWeight="normal"
            fontSize="md:text-xl"
          />
        </div>

        <div className="flex gap-3 justify-start md:items-center items-end">
          <Button onClick={downloadCV} text="Download CV" />
          <div className="flex gap-x-3">
            <a
              className="flex items-center justify-center h-11 w-11 rounded-full bg-customPurple shadow-lg cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/gent-hulaj-612525233/"
            >
              <LinkedIn />
            </a>

            <a
              className="flex items-center justify-center h-11 w-11 rounded-full bg-customPurple shadow-lg cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Genthh"
            >
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <Lottie
        className="md:h-[500px] w-[300px] md:w-auto  h-[400px]  md:self-auto "
        animationData={gentCoding}
        loop={false}
      />
    </div>
  );
};
