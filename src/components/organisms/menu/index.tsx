import { ReactNode } from "react";
import clsx from "clsx";
import { MenuProps } from "./props";

export const Menu = ({ isOpen, closeMenu }: MenuProps): ReactNode => {
  return (
    <div
      className={clsx(
        "fixed inset-0 -z-1 pointer-events-auto cursor-default transition-bg duration-300 ease-in-out",
        isOpen ? "bg-black/20" : "pointer-events-none bg-transparent",
      )}
      onClick={closeMenu}
      role="button"
    >
      <aside
        className={clsx(
          "absolute left-0 right-0 h-screen w-screen bg-dark-blue shadow-lg transition-transform duration-500 ease-in-out desktop1024:h-320",
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};
