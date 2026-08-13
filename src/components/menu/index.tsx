import { ReactNode } from "react";
import { MenuProps } from "./props";
import clsx from "clsx";

export const Menu = ({ isOpen, closeMenu }: MenuProps): ReactNode => {
  return (
    <div
      className={clsx(
        `fixed inset-0 -z-1 transition-bg duration-300 ease-in-out pointer-events-auto cursor-default`,
        isOpen ? "bg-black/20 " : "bg-transparent pointer-events-none",
      )}
      onClick={closeMenu}
      role="button"
    >
      <aside
        className={clsx(
          `h-screen desktop1024:h-320 w-screen bg-dark-blue absolute left-0 right-0 shadow-lg transition-transform duration-500 ease-in-out`,
          isOpen ? "translate-y-0" : "-translate-y-full",
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></aside>
    </div>
  );
};
