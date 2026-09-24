"use client";

import clsx from "clsx";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/constants/projects";
import { C } from "./const";
import styles from "./styles.module.css";

const PROJECT_DURATION = 10000;

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projectButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const projectList = useRef<HTMLOListElement>(null);
  const [fadeEdges, setFadeEdges] = useState({ left: false, right: false });

  const updateFadeEdges = useCallback(() => {
    const list = projectList.current;
    if (!list) return;

    const left = list.scrollLeft > 1;
    const right = list.scrollLeft + list.clientWidth < list.scrollWidth - 1;
    setFadeEdges((current) =>
      current.left === left && current.right === right
        ? current
        : { left, right },
    );
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % PROJECTS.length);
    }, PROJECT_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    const list = projectList.current;
    const button = projectButtons.current[activeIndex];
    if (!list || !button) return;

    const itemLeft =
      button.getBoundingClientRect().left -
      list.getBoundingClientRect().left +
      list.scrollLeft;
    const itemRight = itemLeft + button.offsetWidth;

    if (itemLeft < list.scrollLeft) list.scrollLeft = itemLeft;
    if (itemRight > list.scrollLeft + list.clientWidth) {
      list.scrollLeft = itemRight - list.clientWidth;
    }

    const frame = window.requestAnimationFrame(updateFadeEdges);
    return () => window.cancelAnimationFrame(frame);
  }, [activeIndex, updateFadeEdges]);

  useEffect(() => {
    const list = projectList.current;
    if (!list) return;

    const observer = new ResizeObserver(updateFadeEdges);
    observer.observe(list);
    const frame = window.requestAnimationFrame(updateFadeEdges);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [updateFadeEdges]);

  const activeProject = PROJECTS[activeIndex];

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className={clsx(
        "overflow-hidden bg-white px-[15rem] py-[12rem] text-dark-blue",
        "max-desktop1024:px-24 max-desktop1024:py-32",
        "max-mobile:px-[3.2rem] max-mobile:py-24",
      )}
    >
      <h2
        id="projects-title"
        className={clsx(
          "font-cormorant text-[8rem] font-bold leading-[1.1]",
          "max-desktop1024:text-[6.4rem]",
          "max-mobile:text-[5.6rem]",
        )}
      >
        {C.titleLeading}
        <br />
        <span className="text-bronze">{C.titleEmphasis}</span>
      </h2>

      <p
        className={clsx(
          "mt-[2.4rem] max-w-[60.6rem] font-montserrat text-[2.4rem] leading-[1.2]",
          "max-desktop1024:mt-12 max-desktop1024:text-[2rem]",
          "max-mobile:mt-8 max-mobile:text-[2rem]",
        )}
      >
        {C.description}
      </p>

      <div
        className={clsx(
          "mt-28 grid grid-cols-[minmax(0,115.2rem)_minmax(0,41.8rem)] gap-[5rem]",
          "max-desktop1024:mt-24 max-desktop1024:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] max-desktop1024:gap-12",
          "max-mobile:mt-16 max-mobile:grid-cols-1 max-mobile:gap-12",
        )}
      >
        <div className="relative aspect-video overflow-hidden rounded-[1rem]">
          <Image
            src={activeProject.image}
            alt={activeProject.imageAlt}
            fill
            sizes="(max-width: 600px) calc(100vw - 6.4rem), (max-width: 1024px) 60vw, 60vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/30"
          />
        </div>

        <div
          className={clsx(
            "min-w-0 pt-[8rem]",
            "max-desktop1024:pt-12",
            "max-mobile:pt-0",
          )}
        >
          <div className="flex items-center gap-[2.5rem]">
            <p
              className={clsx(
                "font-montserrat text-[2rem] font-semibold whitespace-nowrap text-bronze uppercase",
                "max-desktop1024:text-[1.6rem]",
              )}
            >
              {C.featuredLabel}
            </p>
            <span
              aria-hidden="true"
              className="block h-[0.2rem] w-[7rem] shrink-0 bg-bronze"
            />
          </div>

          <h3
            className={clsx(
              "mt-[3.3rem] font-cormorant text-[3.2rem] font-bold leading-[1.2]",
              "max-desktop1024:mt-8",
            )}
          >
            {activeProject.title}
          </h3>
          <p
            className={clsx(
              "mt-[3rem] font-montserrat text-[2rem] font-light leading-[1.2]",
              "max-desktop1024:mt-6 max-desktop1024:text-[1.6rem]",
              "max-mobile:text-[1.8rem]",
            )}
          >
            {activeProject.description}
          </p>
        </div>
      </div>

      <div className={clsx("mt-[5rem]", "max-mobile:mt-16")}>
        <h3 className="font-manrope text-[2rem] font-semibold tracking-[0.2rem] text-bronze uppercase">
          {C.otherProjectsLabel}
        </h3>
        <span
          aria-hidden="true"
          className="mt-[1.5rem] block h-[0.2rem] w-[7rem] bg-bronze"
        />
      </div>

      <ol
        ref={projectList}
        aria-label={C.listAriaLabel}
        onScroll={updateFadeEdges}
        className={clsx(
          styles.projectList,
          fadeEdges.left && styles.fadeLeft,
          fadeEdges.right && styles.fadeRight,
          "mt-[2.8rem] flex w-full max-w-full overflow-x-auto",
        )}
      >
        {PROJECTS.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <li
              key={project.id}
              className="relative mr-[3rem] h-[9rem] w-[18rem] shrink-0"
            >
              <button
                ref={(element) => {
                  projectButtons.current[index] = element;
                }}
                type="button"
                aria-label={
                  C.showProjectAriaLabel +
                  " " +
                  String(project.id).padStart(2, "0") +
                  ": " +
                  project.title
                }
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={clsx(
                  "block w-full origin-top-left text-left font-manrope text-dark-blue transition-transform duration-300 ease-out",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze",
                  "motion-reduce:transition-none",
                  !isActive && "scale-90",
                )}
              >
                <span
                  className={clsx(
                    "block font-bold leading-[1.2] transition-[opacity,color,font-size] duration-300 ease-out",
                    "motion-reduce:transition-none",
                    isActive
                      ? "text-[2.4rem] text-bronze"
                      : "text-[2rem] opacity-50",
                  )}
                >
                  {String(project.id).padStart(2, "0")}
                </span>
                <span
                  className={clsx(
                    "mt-[0.8rem] block text-[2.2rem] font-bold leading-[1.2] whitespace-nowrap transition-opacity duration-300 ease-out",
                    "motion-reduce:transition-none",
                    !isActive && "opacity-50",
                  )}
                >
                  {project.title}
                </span>
              </button>

              {index < PROJECTS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-[1rem] right-0 h-[6.5rem] w-[0.2rem] bg-dark-blue/50"
                />
              )}

              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[0.3rem] w-[15rem] bg-bronze/50"
                >
                  <span
                    key={activeIndex}
                    style={{ animationDuration: `${PROJECT_DURATION}ms` }}
                    className={clsx(
                      styles.progress,
                      "block h-full w-full bg-bronze",
                    )}
                  />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};
