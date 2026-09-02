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
        "relative inline-block w-max overflow-hidden whitespace-nowrap font-montserrat text-[2rem] font-semibold uppercase",
        "group",
        className,
      )}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <div
        className={clsx(
          "relative flex w-max translate-x-0 items-center transition-transform duration-400 ease-in-out",
          "group-hover:translate-x-[4.6rem]",
        )}
      >
        <div
          className={clsx("absolute top-0 right-full flex items-center pr-8")}
          aria-hidden="true"
        >
          <MoveRight
            strokeWidth={1}
            size={32}
            className={clsx(
              "text-bronze opacity-0 transition-opacity duration-400 ease-in-out",
              "group-hover:opacity-100",
            )}
          />
        </div>
        <div className={clsx("flex items-center gap-8 text-dark-blue")}>
          {children}
          <MoveRight
            strokeWidth={1}
            size={32}
            className={clsx(
              "text-bronze opacity-100 transition-opacity duration-400 ease-in-out",
              "group-hover:opacity-0",
            )}
          />
        </div>
      </div>
    </a>
  );
};
