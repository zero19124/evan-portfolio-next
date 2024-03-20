"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mt-12 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className=" font-bold text-xl">I make apps for fun</span> and
        continuously expanding my skill set. I'm a quick learner with a strong
        passion for tackling new challenges.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. and knowing how the apps work.
        <span className="underline"> love </span> the feeling of finally
        figuring out a solution to a problem.
      </p>

      <p className="mb-4">
        <span className="italic ">in my spare time</span>, I enjoy cloning apps
        that catch my interest, watching tech video to learn new technologies.
        or play the sports like ball games and enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
