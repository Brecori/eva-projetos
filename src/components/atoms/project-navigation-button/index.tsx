"use client";

import clsx from "clsx";
import type { ProjectNavigationButtonProps } from "./props";

export const ProjectNavigationButton = ({
  children,
  className,
  ...props
}: ProjectNavigationButtonProps) => (
  <button
    type="button"
    {...props}
    className={clsx(
      "flex size-18 items-center justify-center text-dark-blue transition-colors duration-300",
      "max-mobile:size-14",
      "hover:text-bronze",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze",
      "motion-reduce:transition-none",
      className,
    )}
  >
    {children}
  </button>
);
