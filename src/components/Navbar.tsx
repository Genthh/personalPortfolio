"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const line3Ref = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".ref", { y: -100 }, { y: 0, duration: 1.2, ease: "bounce.out" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();
      tl.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      ).fromTo(
        linksRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      gsap.to(line1Ref.current, {
        y: 8,
        rotation: 45,
        transformOrigin: "50% 50%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(line2Ref.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(line3Ref.current, {
        y: -8,
        rotation: -45,
        transformOrigin: "50% 50%",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in",
      });

      gsap.to(line1Ref.current, {
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(line2Ref.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      });
      gsap.to(line3Ref.current, {
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <header className="fixed md:w-[72rem] mx-auto top-0 left-0 right-0 bg-accent z-10 py-4 ref">
      <nav className="flex items-center justify-between w-full">
        <h1 className="text-3xl text-customPurple">PIRROX</h1>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={line1Ref}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16"
              />
              <path
                ref={line2Ref}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 12h16"
              />
              <path
                ref={line3Ref}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center cursor-pointer lg:justify-center gap-[35px] text-[25px]">
          <div
            className={`md:flex gap-x-10 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <Link href="/" className="text-white text-l">
              Home
            </Link>
            <Link href="/about_me" className="text-white text-l">
              About
            </Link>
          </div>
        </div>
      </nav>
      <div
        ref={menuRef}
        className={`lg:hidden absolute h-screen top-full left-0 right-0 bg-primary shadow-md shadow-white/10 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center items-start pl-5 gap-10 text-[25px] py-4">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            ref={(el) => {
              linksRef.current[0] = el;
            }}
          >
            Home
          </a>
          <a
            href="/about_me"
            onClick={() => setIsOpen(false)}
            ref={(el) => {
              linksRef.current[1] = el;
            }}
          >
            About Me
          </a>
          <a
            href="/experience"
            onClick={() => setIsOpen(false)}
            ref={(el) => {
              linksRef.current[2] = el;
            }}
          >
            Experience
          </a>
          <a
            href="/work"
            onClick={() => setIsOpen(false)}
            ref={(el) => {
              linksRef.current[3] = el;
            }}
          >
            Work
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            ref={(el) => {
              linksRef.current[4] = el;
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};
