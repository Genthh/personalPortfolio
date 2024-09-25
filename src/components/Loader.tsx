import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../_svgs/Logo";
export const Loader = () => {
  const svgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
      defaults: { duration: 0.6, ease: "power2.inOut" },
    });

    gsap.set("#target1", { rotation: 45, svgOrigin: "50 50" });
    gsap.set("#target2", { rotation: 135, svgOrigin: "50 50" });

    tl.to("line", { attr: { x2: 100 } });
    tl.to("#target1", { rotation: 0 }, "turn");
    tl.to("#target2", { rotation: 180 }, "turn");
    tl.to("#target1", { y: -10 }, "move");
    tl.to("#target2", { y: 10 }, "move");
    tl.to("#theSquare", { attr: { height: 22, y: 38 } }, "move");
    tl.to("line", { attr: { x1: 50, x2: 50 } });
    tl.to("text", { duration: 1, opacity: 0, ease: "none" });
  }, []);

  return (
    <div className="flex justify-center h-screen items-center">
      <svg
        ref={svgRef}
        id="demo"
        xmlns="http://www.w3.org/2000/svg"
        width="1000"
        height="1000"
        viewBox="0 0 100 100"
        className="w-3/4 h-3/4 "
      >
        <defs>
          <clipPath id="theClipPath">
            <rect
              id="theSquare"
              x="0"
              y="50"
              width="100"
              height="0"
              fill="red"
            />
          </clipPath>
        </defs>
        <line
          id="target1"
          x1="0"
          y1="50"
          x2="0"
          y2="50"
          strokeWidth="1"
          stroke="#fff"
        />
        <line
          id="target2"
          x1="0"
          y1="50"
          x2="0"
          y2="50"
          strokeWidth="1"
          stroke="#fff"
        />
        <g id="clipPathReveal" clipPath="url(#theClipPath)">
          <text
            transform="translate(50 55)"
            textAnchor="middle"
            fontSize="18"
            fill="#D9D9D9"
          >
            PIRROX
            {/* <Logo /> */}
          </text>
        </g>
      </svg>
    </div>
  );
};
