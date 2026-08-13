import { ComponentPropsWithoutRef } from "react";

export type HeaderButtonProps = ComponentPropsWithoutRef<"a"> & {
  isExternal?: boolean;
};
