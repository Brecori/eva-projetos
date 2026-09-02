import { C } from "./const";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

export const About = (): ReactNode => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className={clsx(
        "flex items-start justify-between bg-cream-gradient px-60 py-48 text-dark-blue",
        "max-desktop1024:px-32",
        "max-mobile:px-[3.2rem]",
      )}
    >
      <div
        className={clsx(
          "flex min-w-0 flex-1 items-center justify-between",
          "max-desktop1024:flex-col",
        )}
      >
        <h2
          id="about-title"
          className={clsx(
            "relative m-0 shrink-0 pl-30 font-montserrat text-[5.6rem] font-normal leading-[1.18] tracking-[-0.04em]",
            "max-desktop1024:mt-0 max-desktop1024:w-full",
            "max-mobile:text-[3.2rem] max-mobile:leading-[1.28]",
            "before:absolute before:top-1/2 before:left-0 before:h-200 before:w-[0.3rem] before:translate-y-[-50%] before:bg-bronze before:content-['']",
          )}
        >
          {C.title}
        </h2>

        <div
          className={clsx(
            "flex h-[64.6rem] w-[49.2rem] shrink-0 rounded-t-[25rem] border-2 border-bronze p-8",
            "max-desktop1024:h-208 max-desktop1024:w-[39.6rem]",
            "max-mobile:h-232 max-mobile:w-full max-mobile:p-[1.2rem]",
          )}
        >
          <Image
            src="/sobre/image-1.png"
            alt={C.imageAlt}
            width={563}
            height={750}
            sizes="(max-width: 599px) calc(100vw - 8.8rem), 452px"
            className="h-full w-full rounded-t-[25rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
