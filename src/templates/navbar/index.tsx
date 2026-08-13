"use client";

import { ReactNode, useEffect } from "react";
import { useState } from "react";
import { HamburguerIcon } from "../../components/hamburguer-icon";
import clsx from "clsx";
import { Menu } from "../../components/menu";

export const Navbar = (): ReactNode => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        `flex justify-between items-center fixed top-0 left-0 right-0 z-10 transition-background transition-height duration-300 ease-in-out`,
        hasScrolled && !isMenuOpen ? "bg-white  h-32" : "bg-transparent  h-40",
        `px-[3.2rem]  desktop1024:px-60 `,
        hasScrolled || isMenuOpen
          ? "border-b border-cream"
          : "border-b border-transparent",
      )}
    >
      <p
        className={clsx(
          "text-[4.5rem] line-height-[1] font-bold font-cormorant tracking-[0.5em] transition-colors duration-300 ease-in-out",
          isMenuOpen ? "text-white" : "text-dark-blue",
        )}
      >
        EVA
      </p>
      <HamburguerIcon
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((currentState) => !currentState)}
      />
      <Menu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </nav>
  );
};
