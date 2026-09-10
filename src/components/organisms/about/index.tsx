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
        "max-desktop1024:px-24",
        "max-mobile:px-[3.2rem]",
      )}
    >
      <div
        className={clsx(
          "flex min-w-0 flex-1 flex-row items-center justify-between",
          "max-desktop1024:gap-12",
          "max-mobile:flex-col max-mobile:gap-48",
        )}
      >
        <h2
          id="about-title"
          className={clsx(
            "relative m-0 shrink-0 pl-30 font-montserrat text-[5.6rem] font-normal leading-[1.18] tracking-[-0.04em]",
            "max-desktop1024:mt-0 max-desktop1024:text-[3.6rem]",
            "mobile:max-desktop1024:min-w-0 mobile:max-desktop1024:flex-1 mobile:max-desktop1024:pl-16",
            "max-mobile:w-full max-mobile:text-[3.2rem] max-mobile:leading-[1.28]",
            "before:absolute before:top-1/2 before:left-0 before:h-200 before:w-[0.3rem] before:translate-y-[-50%] before:bg-bronze before:content-['']",
            "max-desktop1024:before:h-144",
            "mobile:max-desktop1024:before:h-112",
          )}
        >
          {C.title}
        </h2>

        <div
          className={clsx(
            "flex h-[64.6rem] w-[49.2rem] shrink-0 rounded-t-[25rem] border-2 border-bronze p-8",
            "max-desktop1024:h-[36.8rem] max-desktop1024:w-md",
            "max-mobile:h-160 max-mobile:w-3/5 max-mobile:p-[1.2rem]",
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
