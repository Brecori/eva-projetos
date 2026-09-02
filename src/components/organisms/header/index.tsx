import clsx from "clsx";
import { ReactNode } from "react";
import { HeaderButton } from "@/components/atoms/header-button";
import { C } from "./const";

export const Header = (): ReactNode => {
  return (
    <header className={clsx(
      "relative flex min-h-screen flex-col justify-center gap-[2.4rem] px-[3.2rem] desktop1024:px-60",
      "before:absolute before:right-0 before:z-[-1] before:h-[94.1rem] before:w-[126.4rem] before:bg-[url('/header/grafismo.png')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-90 before:content-['']",
    )}>
      <h1 className={clsx(
        "relative font-cormorant text-[16rem] font-semi-bold leading-none tracking-[0.3em] text-dark-blue",
        "before:absolute before:bottom-0 before:left-0 before:h-[0.3rem] before:w-24 before:bg-bronze before:content-['']",
      )}>{C.title}</h1>
      <h2 className="font-montserrat text-[4rem] font-regular text-dark-blue">{C.description}</h2>
      <div className="mt-20 flex gap-[4.8rem]">
        {C.buttons.map((button) => (
          <HeaderButton key={button.key} href={button.href}>{button.title}</HeaderButton>
        ))}
      </div>
    </header>
  );
};
