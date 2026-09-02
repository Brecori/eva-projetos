import { Header } from "@/components/organisms/header";
import { Navbar } from "@/components/organisms/navbar";
import { ReactNode } from "react";

export const HomeTemplate = (): ReactNode => {
  return (
    <main className="min-h-[150vh]">
      <Navbar />
      <Header />
    </main>
  );
};
