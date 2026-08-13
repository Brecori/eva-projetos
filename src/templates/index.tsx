import { Navbar } from "@/templates/navbar";
import { ReactNode } from "react";
import { Header } from "./header";

export const HomeTemplate = (): ReactNode => {
  return (
    <main className="min-h-[150vh]">
      <Navbar />
      <Header />
    </main>
  );
};
