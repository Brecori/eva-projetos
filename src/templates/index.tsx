import { Header } from "@/components/organisms/header";
import { About } from "@/components/organisms/about";
import { Navbar } from "@/components/organisms/navbar";
import { Services } from "@/components/organisms/services";
import { ReactNode } from "react";

export const HomeTemplate = (): ReactNode => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
    </main>
  );
};
