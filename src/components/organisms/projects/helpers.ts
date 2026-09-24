"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/constants/projects/type";
import { C } from "./const";

export const PROJECT_DURATION = 10000;

export const formatProjectNumber = (id: number) => String(id).padStart(2, "0");

export const getProjectAriaLabel = (project: Project) =>
  `${C.showProjectAriaLabel} ${formatProjectNumber(project.id)}: ${project.title}`;

export const useProjectsGallery = () => {
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

  const selectProject = (index: number) => setActiveIndex(index);
  const setProjectButton = (index: number, element: HTMLButtonElement | null) => {
    projectButtons.current[index] = element;
  };

  return {
    activeIndex,
    activeProject: PROJECTS[activeIndex],
    fadeEdges,
    projectList,
    selectProject,
    setProjectButton,
    updateFadeEdges,
  };
};
