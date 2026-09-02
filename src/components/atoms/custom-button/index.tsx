import clsx from "clsx";
import { MoveRight } from "lucide-react";
import { CustomButtonProps } from "./props";

export const CustomButton = ({
  children,
  href,
  isExternal = false,
  className,
}: CustomButtonProps) => {
  return (
    <a
      href={href}
      className={clsx(
        "font-montserrat font-semibold text-[2rem] uppercase relative group inline-block overflow-hidden whitespace-nowrap",
        className,
      )}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <div className="relative flex w-max translate-x-0 items-center transition-transform duration-400 ease-in-out group-hover:translate-x-[4.6rem]">
        <div
          className="absolute top-0 right-full flex items-center pr-8"
          aria-hidden="true"
        >
          <MoveRight
            strokeWidth={1}
            size={32}
            className="text-bronze opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
          />
        </div>
        <div className="flex items-center gap-8 text-dark-blue">
          {children}
          <MoveRight
            strokeWidth={1}
            size={32}
            className="text-bronze opacity-100 transition-opacity duration-400 ease-in-out group-hover:opacity-0"
          />
        </div>
      </div>
    </a>
  );
};
