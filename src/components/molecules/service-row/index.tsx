"use client";

import clsx from "clsx";
import { useState } from "react";
import { ServiceRowProps } from "./props";

export const ServiceRow = ({ id, title, details }: ServiceRowProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `service-${id}-panel`;

  return (
    <li
      className={clsx(
        "grid grid-cols-[1fr_1fr] items-center gap-16 border-b-[0.2rem] border-dark-blue py-16",
        "max-desktop1024:gap-[2.4rem] max-desktop1024:py-[2.4rem]",
        "max-mobile:min-h-0 max-mobile:grid-cols-1 max-mobile:gap-0 max-mobile:py-0",
      )}
    >
      <h3
        className={clsx(
          "text-[3.2rem] font-semibold leading-[1.4]",
          "max-desktop1024:text-[2.3rem]",
          "max-mobile:text-[2.8rem]",
        )}
      >
        <span className="max-mobile:hidden">{title}</span>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((current) => !current)}
          className={clsx(
            "hidden w-full cursor-pointer items-center justify-between gap-[2.4rem] text-left",
            "max-mobile:flex max-mobile:min-h-[7.2rem] max-mobile:py-[2.4rem]!",
            "focus-visible:outline-[0.2rem]! focus-visible:outline-offset-[0.4rem] focus-visible:outline-bronze!",
          )}
        >
          {title}
          <span
            aria-hidden="true"
            className={clsx(
              "relative size-[2.8rem] shrink-0",
              "before:absolute before:top-1/2 before:left-1/2 before:-ml-3 before:h-[0.2rem] before:w-6 before:rotate-45 before:rounded-full before:bg-bronze before:transition-transform before:duration-300 before:ease-in-out before:content-['']",
              "after:absolute after:top-1/2 after:left-1/2 after:-ml-3 after:h-[0.2rem] after:w-6 after:-rotate-45 after:rounded-full after:bg-bronze after:transition-transform after:duration-300 after:ease-in-out after:content-['']",
              "motion-reduce:before:transition-none",
              "motion-reduce:after:transition-none",
              isOpen
                ? "before:translate-x-[0.53033rem]"
                : "before:translate-x-[-0.53033rem]",
              isOpen
                ? "after:translate-x-[-0.53033rem]"
                : "after:translate-x-[0.53033rem]",
            )}
          />
        </button>
      </h3>
      <div
        id={panelId}
        className={clsx(
          "grid grid-rows-[1fr] transition-[grid-template-rows,visibility] duration-300 ease-in-out",
          "motion-reduce:transition-none",
          isOpen
            ? "max-mobile:visible max-mobile:grid-rows-[1fr]"
            : "max-mobile:invisible max-mobile:grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <ul
            className={clsx(
              "space-y-[0.4rem] text-right text-[2rem] font-light leading-normal",
              "max-desktop1024:text-[1.4rem]",
              "max-mobile:pb-[2.4rem] max-mobile:text-left max-mobile:text-[2.4rem] max-mobile:leading-[1.6]",
            )}
          >
            {details.map((detail) => (
              <li key={detail} className="list-inside list-disc!">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
