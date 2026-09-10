import clsx from "clsx";
import { ReactNode } from "react";
import { C } from "./const";

export const OnlineService = (): ReactNode => {
  return (
    <section
      aria-labelledby="online-service-title"
      className={clsx(
        "bg-cream-gradient px-60 py-48 text-center text-dark-blue",
        "max-desktop1024:px-24 max-desktop1024:py-32",
        "max-mobile:px-[3.2rem] max-mobile:py-24",
      )}
    >
      <p
        className={clsx(
          "flex flex-col items-center gap-12 font-montserrat text-[2.8rem] font-semibold text-bronze",
          "max-desktop1024:text-[2.4rem]",
          "max-mobile:gap-8",
          "after:block after:h-[0.2rem] after:w-30 after:bg-bronze after:content-['']",
        )}
      >
        {C.label}
      </p>
      <h2
        id="online-service-title"
        className={clsx(
          "mt-18 font-cormorant text-[8rem] font-semibold leading-[1.2]",
          "max-desktop1024:text-[6.4rem]",
          "max-mobile:mt-12 max-mobile:text-[5.6rem]",
        )}
      >
        {C.title}
      </h2>
      <p
        className={clsx(
          "mx-auto mt-8 max-w-260 font-montserrat text-[2rem] leading-[1.4]",
          "max-mobile:text-[2.4rem] max-mobile:leading-[1.6]",
        )}
      >
        {C.description}
      </p>
      <ul
        className={clsx(
          "relative mx-auto mt-48 grid max-w-[152rem] grid-cols-5",
          "max-desktop1024:mt-48",
          "max-mobile:mt-20 max-mobile:w-fit max-mobile:grid-cols-1 max-mobile:py-12",
          "before:absolute before:top-[0.45rem] before:right-[10%] before:left-[10%] before:h-[0.1rem] before:bg-bronze before:content-['']",
          "max-mobile:before:top-24 max-mobile:before:bottom-24 max-mobile:before:right-auto max-mobile:before:left-[0.45rem] max-mobile:before:h-auto max-mobile:before:w-[0.1rem]",
          "after:absolute after:top-[0.45rem] after:inset-x-0 after:h-[0.1rem] after:bg-[linear-gradient(to_right,transparent,var(--color-bronze)_10%,var(--color-bronze)_90%,transparent)] after:content-['']",
          "max-mobile:after:top-0 max-mobile:after:bottom-0 max-mobile:after:right-auto max-mobile:after:left-[0.45rem] max-mobile:after:h-auto max-mobile:after:w-[0.1rem] max-mobile:after:bg-[linear-gradient(to_bottom,transparent,var(--color-bronze)_17%,var(--color-bronze)_83%,transparent)]",
        )}
      >
        {C.regions.map((region) => (
          <li
            key={region}
            className={clsx(
              "relative z-1 flex min-w-0 flex-col items-center gap-8 px-[0.4rem] font-montserrat text-[1.2rem] font-bold tracking-[0.24rem] text-dark-blue/75 uppercase",
              "max-mobile:min-h-24 max-mobile:flex-row max-mobile:gap-[2.4rem] max-mobile:px-0 max-mobile:text-left max-mobile:text-[2rem] max-mobile:tracking-[0.08rem]",
              "before:block before:size-4 before:shrink-0 before:rounded-full before:bg-bronze before:content-['']",
            )}
          >
            <span>{region}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
