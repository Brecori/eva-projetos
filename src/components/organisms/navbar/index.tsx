"use client";

import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { HamburguerIcon } from "@/components/atoms/hamburguer-icon";
import { Menu } from "@/components/organisms/menu";

export const Navbar = (): ReactNode => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed left-0 right-0 top-0 z-10 flex items-center justify-between transition-background transition-height duration-300 ease-in-out",
        hasScrolled && !isMenuOpen ? "h-32 bg-white" : "h-40 bg-transparent",
        "px-[3.2rem] desktop1024:px-60",
        hasScrolled || isMenuOpen ? "border-b border-cream" : "border-b border-transparent",
      )}
    >
      <p className={clsx(
        "font-cormorant text-[4.5rem] font-bold line-height-[1] tracking-[0.5em] transition-colors duration-300 ease-in-out",
        isMenuOpen ? "text-white" : "text-dark-blue",
      )}>EVA</p>
      <HamburguerIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen((currentState) => !currentState)} />
      <Menu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </nav>
  );
};
