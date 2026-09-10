import clsx from "clsx";
import { ReactNode } from "react";
import { ServiceRow } from "@/components/molecules/service-row";
import { C } from "./const";

export const Services = (): ReactNode => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className={clsx(
        "bg-white px-60 py-48 font-montserrat text-dark-blue",
        "max-desktop1024:px-24 max-desktop1024:py-32",
        "max-mobile:px-[3.2rem] max-mobile:py-24",
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-[2fr_3fr] gap-12 font-montserrat",
          "max-mobile:grid-cols-1 max-mobile:gap-8",
        )}
      >
        <h2
          id="services-title"
          className={clsx(
            "max-w-xl text-[4rem] font-semibold leading-tight",
            "max-desktop1024:text-[3.2rem]",
            "max-mobile:text-[3.6rem]",
          )}
        >
          {C.subtitle}
        </h2>
        <p
          className={clsx(
            "text-[2.4rem] font-light leading-[1.4]",
            "max-desktop1024:text-[2rem]",
            "max-mobile:text-[2.4rem] max-mobile:leading-[1.6]",
          )}
        >
          {C.description}
        </p>
      </div>

      <ul
        className={clsx(
          "mt-[6.6rem] border-t-[0.2rem] border-dark-blue",
          "max-mobile:mt-16",
        )}
      >
        {C.services.map((service) => (
          <ServiceRow key={service.id} {...service} />
        ))}
      </ul>
    </section>
  );
};
