import React from "react";
import Lottie from "lottie-react";
import gentCoding from "../../public/gentCoding.json";
import LinkedIn from "../_svgs/linkedin.svg";
import GitHub from "../_svgs/github.svg";
import { TextSplit } from "./controlled/TextSplit";
import { Button } from "./controlled/Button";

export const Hero: React.FC = () => {
  const downloadTxtFile = () => {
    const texts = ["line 1", "line 2", "line 3"];
    const file = new Blob(texts, { type: "text/plain" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "100ideas-" + Date.now() + ".txt";
    document.body.appendChild(element);
    element.click();
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
          <Button onClick={downloadTxtFile} text="Download CV" />
          <div className="flex gap-x-3">
            <div className="flex items-center justify-center h-11 w-11 rounded-full bg-customPurple shadow-lg cursor-pointer">
              <LinkedIn />
            </div>
            <div className="flex items-center justify-center h-11 w-11 rounded-full bg-customPurple shadow-lg cursor-pointer">
              <GitHub />
            </div>
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
