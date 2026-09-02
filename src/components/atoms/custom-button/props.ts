import { ComponentPropsWithoutRef } from "react";

export type CustomButtonProps = ComponentPropsWithoutRef<"a"> & {
  isExternal?: boolean;
};
