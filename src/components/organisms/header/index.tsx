import clsx from "clsx";
import { ReactNode } from "react";
import { CustomButton } from "@/components/atoms/custom-button";
import { C } from "./const";

export const Header = (): ReactNode => {
  return (
    <header
      className={clsx(
        "relative isolate flex min-h-screen flex-col justify-center gap-[2.4rem] px-60",
        "max-desktop1024:px-24 overflow-hidden",
        "max-mobile:min-h-0 max-mobile:justify-start max-mobile:gap-6 max-mobile:px-[3.2rem] max-mobile:pt-128 max-mobile:pb-192",
        "before:absolute before:right-0 before:z-[-1] before:h-[94.1rem] before:w-[126.4rem] before:bg-[url('/header/grafismo.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-100 before:content-['']",
        "max-desktop1024:before:left-[48%] max-desktop1024:before:right-auto max-desktop1024:before:h-280 max-desktop1024:before:w-[62%] max-desktop1024:before:bg-contain",
        "max-mobile:before:bottom-0 max-mobile:before:left-auto max-mobile:before:right-[-8%] max-mobile:before:h-168 max-mobile:before:w-[90%] max-mobile:before:bg-bottom-right max-mobile:before:opacity-80",
      )}
    >
      <h1
        className={clsx(
          "relative font-cormorant text-[16rem] font-semi-bold leading-none tracking-[0.3em] text-dark-blue",
          "max-desktop1024:text-[12rem]",
          "max-mobile:pb-6 max-mobile:text-[10rem] max-mobile:tracking-[0.18em]",
          "before:absolute before:bottom-0 before:left-0 before:h-[0.3rem] before:w-24 before:bg-bronze before:content-['']",
          "max-mobile:before:w-16",
          "max-desktop1024:max-w-260",
        )}
      >
        {C.title}
      </h1>
      <h2
        className={clsx(
          "font-montserrat text-[4rem] font-regular text-dark-blue",
          "max-desktop1024:text-[3.2rem]",
          "max-mobile:max-w-[34ch] max-mobile:text-[2.6rem] max-mobile:leading-normal",
          "max-desktop1024:max-w-260",
        )}
      >
        {C.description}
      </h2>
      <div
        className={clsx(
          "mt-20 flex gap-[4.8rem]",
          "max-desktop1024:mt-12 max-desktop1024:flex-col max-desktop1024:gap-[2.4rem]",
          "max-mobile:mt-12 max-mobile:gap-[3.2rem]",
        )}
      >
        {C.buttons.map((button) => (
          <CustomButton key={button.key} href={button.href}>
            {button.title}
          </CustomButton>
        ))}
      </div>
    </header>
  );
};
