"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxVideo } from "react-icons/rx";
import { IoMdArrowRoundBack } from "react-icons/io";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  feats,
}: ProjectProps) {
  console.log(feats, "feats");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [show, setShow] = useState(false);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 transition"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-gray-700 dark:text-white/70  overflow-auto">
            {description}
          </p>
          {feats ? (
            <div style={{ height: "6rem", overflow: "scroll" }}>
              {feats.split("-").map((subDesc, subDescIndex) => {
                return subDescIndex ? (
                  <p className="!mt-0" key={subDescIndex}>
                    {subDescIndex}. {subDesc}
                  </p>
                ) : null;
              })}
            </div>
          ) : (
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {feats}
            </p>
          )}

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute  hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
        {!show && (
          <div
            style={{ zIndex: 99 }}
            className=" absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2  bg-true-gray-400 flex justify-center items-center"
          >
            <div
              className=" opacity-[0.3] justify-center
         hover:scale-150  hover:opacity-[0.7] cursor-pointer 
       transition"
            >
              <RxVideo
                onClick={() => {
                  setShow(!show);
                }}
                style={{ width: "5rem", height: "5rem" }}
                className=" m-auto "
              />
              <span className="hover:opacity-[0.7] opacity-[1]">
                Play the Demo
              </span>
            </div>
          </div>
        )}
        {show && (
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 95,
            }}
            className=" absolute  top-0 bottom-0 left-0 right-0"
          >
            <div style={{ zIndex: 1 }} className="absolute top-5 left-3  flex">
              <IoMdArrowRoundBack
                onClick={() => {
                  setShow(!show);
                }}
                fill="#fff"
                className="w-6 h-6 cursor-pointer"
              />
              <span className="text-white"> {title} Demo</span>
            </div>
            <video
              style={{ objectFit: "cover" }}
              className="w-full h-full"
              autoPlay
              controls
              src="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
            />
          </div>
        )}
      </section>
    </motion.div>
  );
}
