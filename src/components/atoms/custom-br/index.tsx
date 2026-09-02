import clsx from "clsx";
import { CustomBrProps } from "./props";

export const CustomBr = ({
  breakpoint,
  className,
  ...props
}: CustomBrProps) => {
  return (
    <br
      {...props}
      className={clsx(
        breakpoint === "mobile" && "max-mobile:hidden",
        breakpoint === "desktop1024" && "max-desktop1024:hidden",
        className,
      )}
    />
  );
};
