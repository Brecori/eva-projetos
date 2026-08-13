import clsx from "clsx";
import { MoveRight } from "lucide-react";
import { HeaderButtonProps } from "./props";

export const HeaderButton = ({
  children,
  href,
  isExternal = false,
  className,
}: HeaderButtonProps) => {
  return (
    <a
      href={href}
      className={clsx(
        "font-montserrat font-semibold text-[2rem] uppercase relative group inline-block overflow-hidden whitespace-nowrap",
        "before:absolute before:bottom-0 before:left-0 before:w-full before:h-[0.3rem] before:bg-bronze before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100",
        className,
      )}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <div className="relative flex w-max translate-x-0 items-center transition-transform duration-400 ease-in-out group-hover:translate-x-28">
        <div
          className="absolute top-0 right-full pr-8 flex items-center"
          aria-hidden="true"
        >
          <MoveRight
            strokeWidth={1}
            size={32}
            className="opacity-0 text-bronze transition-opacity duration-400 ease-in-out group-hover:opacity-100"
          />
        </div>
        <div className="flex gap-8 items-center text-dark-blue">
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
