import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface BurgerMenuProps {
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const menuToggle = useRef(gsap.timeline({ paused: true, reversed: true }));

  useGSAP(() => {
    const tl = menuToggle.current;

    tl.call(() => {
      if (svgRef.current) {
        svgRef.current.classList.remove("closemenu");
        svgRef.current.classList.add("openmenu");
      }
    })
      .to(".top", 0.2, { y: "-9px", transformOrigin: "50% 50%" }, "burg")
      .to(".bot", 0.2, { y: "9px", transformOrigin: "50% 50%" }, "burg")
      .to(".mid", 0.2, { scale: 0.1, transformOrigin: "50% 50%" }, "burg")
      .add("rotate")
      .to(".top", 0.2, { y: "5px" }, "rotate")
      .to(".bot", 0.2, { y: "-5px" }, "rotate")
      .to(".top", 0.2, { rotationZ: 45, transformOrigin: "50% 50%" }, "rotate")
      .to(
        ".bot",
        0.2,
        { rotationZ: -45, transformOrigin: "50% 50%" },
        "rotate"
      );
  }, []);

  const handleMenuClick = () => {
    const tl = menuToggle.current;
    tl.reversed() ? tl.restart() : tl.reverse();
    toggleMenu(); // Toggle the overlay when burger is clicked
  };

  return (
    <svg
      id="burger"
      ref={svgRef}
      width="30"
      className="openmenu"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      onClick={handleMenuClick}
      style={{ cursor: "pointer" }}
    >
      <path className="top" d="M0 9h30v2H0z" fill="white" />
      <line
        className="mid"
        x1="0"
        y1="15"
        x2="30"
        y2="15"
        stroke="white"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path className="bot" d="M0 19h30v2H0z" fill="white" />
    </svg>
  );
};

export default BurgerMenu;
