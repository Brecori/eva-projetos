import { ComponentPropsWithoutRef } from "react";

export type CustomBrBreakpoint = "desktop1024" | "mobile";

export type CustomBrProps = ComponentPropsWithoutRef<"br"> & {
  breakpoint?: CustomBrBreakpoint;
};
