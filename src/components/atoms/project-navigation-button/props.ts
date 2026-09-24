import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ProjectNavigationButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "type"
> & {
  "aria-label": string;
  children: ReactNode;
};
