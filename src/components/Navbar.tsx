"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Logo from "../_svgs/logo.svg";
import BurgerMenu from "./BurgerMenu";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerMenuRef = useRef(null);

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    if (burgerMenuRef.current && "reverseBurger" in burgerMenuRef.current) {
      (burgerMenuRef.current as { reverseBurger: () => void }).reverseBurger();
    }
  };

  return (
    <div className="max-w-6xl flex flex-col md:mx-auto md:px-4 mx-5">
      <nav className="sticky top-0 z-10 bg-primary flex justify-between items-center">
        <div className="flex items-center justify-between w-full py-5">
          <Logo />
        </div>

        <div className="hidden md:flex gap-x-5 text-lg">
          <Link href="/" className="text-white" onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            href="/about_me"
            className="text-white"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <BurgerMenu toggleMenu={toggleMenu} ref={burgerMenuRef} />
        </div>

        <div
          ref={menuRef}
          className="absolute left-0 top-full w-full bg-primary overflow-hidden opacity-0"
          style={{ height: 0 }}
        >
          <div className="flex flex-col pt-16 px-2 space-y-5">
            <Link href="/" className="text-white" onClick={handleLinkClick}>
              Home
            </Link>
            <Link
              href="/about_me"
              className="text-white"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
