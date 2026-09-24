"use client";

import clsx from "clsx";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectNavigationButton } from "@/components/atoms/project-navigation-button";
import { PROJECTS } from "@/constants/projects";
import { C } from "./const";
import {
  formatProjectNumber,
  getProjectAriaLabel,
  PROJECT_DURATION,
  useProjectsGallery,
} from "./helpers";
import styles from "./styles.module.css";

export const Projects = () => {
  const {
    activeIndex,
    activeProject,
    fadeEdges,
    projectList,
    selectProject,
    setProjectButton,
    showNextProject,
    showPreviousProject,
    updateFadeEdges,
  } = useProjectsGallery();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className={clsx(
        "overflow-hidden bg-white px-60 py-48 text-dark-blue",
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
          "mt-28 grid grid-cols-[minmax(0,115.2rem)_minmax(0,41.8rem)] gap-20",
          "max-desktop1024:mt-24 max-desktop1024:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] max-desktop1024:gap-12",
          "max-mobile:mt-16 max-mobile:grid-cols-1 max-mobile:gap-12",
        )}
      >
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={activeProject.image}
            alt={activeProject.imageAlt}
            fill
            sizes="(max-width: 600px) calc(100vw - 6.4rem), (max-width: 1024px) 60vw, 60vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-black/30"
          />
        </div>

        <div
          className={clsx(
            "min-w-0 pt-32",
            "max-desktop1024:pt-12",
            "max-mobile:pt-0",
          )}
        >
          <div className="flex items-center gap-10">
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
              className="block h-[0.2rem] w-28 shrink-0 bg-bronze"
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
              "mt-12 font-montserrat text-[2rem] font-light leading-[1.2]",
              "max-desktop1024:mt-6 max-desktop1024:text-[1.6rem]",
              "max-mobile:text-[1.8rem]",
            )}
          >
            {activeProject.description}
          </p>
        </div>
      </div>

      <div
        className={clsx(
          "mt-20 flex items-start justify-between",
          "max-mobile:mt-16",
        )}
      >
        <div>
          <h3 className="font-manrope text-[2rem] font-semibold tracking-[0.2rem] text-bronze uppercase">
            {C.otherProjectsLabel}
          </h3>
          <span
            aria-hidden="true"
            className="mt-6 block h-[0.2rem] w-28 bg-bronze"
          />
        </div>

        <div className={clsx("flex items-center gap-4")}>
          <ProjectNavigationButton
            aria-label={C.previousProjectAriaLabel}
            onClick={showPreviousProject}
          >
            <ChevronLeft aria-hidden="true" size={40} strokeWidth={1.5} />
          </ProjectNavigationButton>
          <ProjectNavigationButton
            aria-label={C.nextProjectAriaLabel}
            onClick={showNextProject}
          >
            <ChevronRight aria-hidden="true" size={40} strokeWidth={1.5} />
          </ProjectNavigationButton>
        </div>
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
              className="relative mr-12 h-36 w-[18rem] shrink-0"
            >
              <button
                ref={(element) => setProjectButton(index, element)}
                type="button"
                aria-label={getProjectAriaLabel(project)}
                aria-pressed={isActive}
                onClick={() => selectProject(index)}
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
                  {formatProjectNumber(project.id)}
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
                  className="pointer-events-none absolute top-4 right-0 h-26 w-[0.2rem] bg-dark-blue/50"
                />
              )}

              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[0.3rem] w-60 bg-bronze/50"
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
