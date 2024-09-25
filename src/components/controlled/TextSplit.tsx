import { TextSplitProps } from "@/types/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const TextSplit: React.FC<TextSplitProps> = ({
  text,
  style,
  fontSize = "text-5xl",
  fontWeight = "font-bold",
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  const splitTextIntoSpans = () => {
    const textElement = textRef.current;
    if (textElement) {
      const splitText = text.split("");
      textElement.innerHTML = splitText
        .map((char: string) => `<span class="char">${char}</span>`)
        .join("");
    }
  };

  const animateText = () => {
    gsap.fromTo(
      ".char",
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, stagger: 0.04, duration: 0.3, ease: "power2.out" }
    );
  };

  useGSAP(() => {
    splitTextIntoSpans();
    animateText();
  }, [text]);

  return (
    <h1
      style={style}
      className={`${fontSize} ${fontWeight} text-customWhite max-w-2xl`}
      ref={textRef}
    >
      {text}
    </h1>
  );
};
