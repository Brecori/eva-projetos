"use client";

import { ReactNode, useState } from "react";
import clsx from "clsx";
import { HamburguerIconProps } from "./props";
import S from "./styles.module.css";
import { C } from "./const";

export const HamburguerIcon = ({
  isOpen,
  onClick,
}: HamburguerIconProps): ReactNode => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const lineColor = isOpen ? "bg-white" : "bg-dark-blue";

  const handleClick = (): void => {
    setHasInteracted(true);
    onClick();
  };

  return (
    <button
      aria-label={isOpen ? C.aria.close : C.aria.open}
      aria-expanded={isOpen}
      onClick={handleClick}
      className="relative h-[2.8rem] w-[4.6rem] cursor-pointer bg-transparent p-0"
      type="button"
    >
      <span
        className={clsx(
          S.line,
          isOpen ? S.topOpen : hasInteracted && S.topClose,
          lineColor,
          "absolute left-0 top-0 h-[0.3rem] w-full origin-center rounded-full",
        )}
      />
      <span
        className={clsx(
          lineColor,
          "absolute left-0 top-[1.2rem] h-[0.3rem] w-full rounded-full",
          "transition-opacity delay-300 duration-300 ease-[cubic-bezier(0.5,0.2,0.2,1.01)]",
          isOpen ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={clsx(
          S.line,
          isOpen ? S.bottomOpen : hasInteracted && S.bottomClose,
          lineColor,
          "absolute left-0 top-[2.4rem] h-[0.3rem] w-full origin-center rounded-full",
        )}
      />
    </button>
  );
};
