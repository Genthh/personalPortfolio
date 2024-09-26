"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Logo from "../_svgs/logo.svg";
import BurgerMenu from "./BurgerMenu";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        height: "100vh",
        duration: 0.5,
        ease: "power2.out",
        opacity: 1,
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power2.in",
        opacity: 0,
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-6xl  flex flex-col md:mx-auto md:px-4 mx-5 ">
      <nav className="sticky top-0 z-10 bg-primary flex justify-between items-center">
        <div className="flex items-center justify-between w-full py-5">
          <Logo />
        </div>

        <div className="hidden md:flex gap-x-5 text-lg">
          <Link
            href="/"
            className="text-white hover:text-darkPurple ease-in duration-150 relative group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/about_me"
            className="text-white hover:text-darkPurple ease-in duration-150 relative group"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>{" "}
          <Link
            href="/"
            className="text-white hover:text-darkPurple ease-in duration-150 relative group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="md:hidden">
          <BurgerMenu toggleMenu={toggleMenu} />
        </div>

        <div
          ref={menuRef}
          className="absolute left-0 top-full w-full bg-primary overflow-hidden opacity-0"
          style={{ height: 0 }}
        >
          <div className="flex flex-col pt-16 px-2 space-y-5">
            <Link
              href="/"
              className={`text-white flex flex-col gap-y-1 hover:text-darkPurple ease-in duration-150 text-xl relative group ${
                isMenuOpen ? "after:w-full" : "after:w-0 "
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
            <Link
              href="/about_me"
              className={`text-white flex flex-col gap-y-1 hover:text-darkPurple ease-in duration-150 text-xl relative group ${
                isMenuOpen ? "after:w-full" : "after:w-0 "
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
            <Link
              href="/"
              className={`text-white flex flex-col gap-y-1 hover:text-darkPurple ease-in duration-150 text-xl relative group ${
                isMenuOpen ? "after:w-full" : "after:w-0 "
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <span
                className={`absolute left-0 bottom-0 h-[2px]  bg-white transition-all  duration-300 ${
                  isMenuOpen ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
