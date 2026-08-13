import { HeaderButton } from "@/components/header-button";
import clsx from "clsx";
import { ReactNode } from "react";
import { C } from "./constants";

export const Header = (): ReactNode => {
  return (
    <header
      className={clsx(
        `flex flex-col gap-[2.4rem] justify-center min-h-screen px-[3.2rem] desktop1024:px-60 relative`,
        `before:content-[''] before:absolute before:right-0 before:bg-[url('/header/grafismo.png')] before:bg-cover before:bg-center before:bg-no-repeat before:w-[126.4rem] before:h-[94.1rem] before:opacity-90 before:z-[-1]`,
      )}
    >
      <h1
        className={clsx(
          "text-[16rem] font-semi-bold font-cormorant text-dark-blue tracking-[0.3em] relative leading-none",
          "before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-24 before:h-[0.3rem] before:bg-bronze",
        )}
      >
        {C.title}
      </h1>
      <h2 className="text-[4rem] font-regular font-montserrat  text-dark-blue">
        {C.description}
      </h2>
      <div className="flex gap-[4.8rem] mt-20">
        {C.buttons.map((button) => (
          <HeaderButton key={button.key} href={button.href}>
            {button.title}
          </HeaderButton>
        ))}
      </div>
    </header>
  );
};
