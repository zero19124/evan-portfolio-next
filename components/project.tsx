"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxVideo } from "react-icons/rx";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import YouTube from "react-youtube";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  videoUrl,
  description,
  tags,
  imageUrl,
  feats,
  link,
}: ProjectProps) {
  // console.log(feats, "feats");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [show, setShow] = useState(false);
  const getVideoContent = (title: string) => {
    if (title === "AI SaaS Platform") {
      return (
        <YouTube
          className=" absolute  top-0 bottom-0 left-0 right-0"
          videoId="3rfHoSe_oMU"
          opts={{
            height: "100%",
            width: "100%",
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          }}
          onEnd={() => {
            setShow(false);
          }}
          onReady={(event) => {
            // access to player in all event handlers via event.target
            // event.target.pauseVideo();
          }}
        />
      );
    }
    return (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
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
          src={videoUrl}
          // src="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        />
      </div>
    );
  };
  const getPlatform = (title: string) => {
    if (title === "Wechat") {
      return "on BiliBili";
    }
    if (title === "AI SaaS Platform") {
      return "on Youtube";
    }
    return "";
  };
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 transition"
    >
      <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-3 px-5 sm:pl-6 sm:pr-2 sm:pt-4 sm:max-w-[55%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex gap-4 justify-center items-center">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <a target="_blank" href="https://github.com/zero19124">
              <FaGithubSquare className=" w-6 h-6" />
            </a>
          </div>

          <p className="text-xl  leading-relaxed text-gray-700 dark:text-white/70  ">
            {description}
          </p>
          <p className="text-center underline text-sm">
            {link.type === "web" && link.web && (
              <a href={link.web} target="_blank">
                Check it out
              </a>
            )}
          </p>
          <p className="text-center  text-sm">
            {link.type === "mobile" && link.android && (
              <a className="underline mr-4" href={link.android} target="_blank">
                Install Android
              </a>
            )}
            {link.type === "mobile" && link.ios && (
              <span
                onClick={() => {
                  alert(
                    "send me gmail. I will invite u to TestFlight for installing or download the android directly."
                  );
                }}
                className="underline cursor-pointer"
              >
                Install IOS
              </span>
            )}
          </p>
          {feats ? (
            <div style={{ overflow: "scroll" }}>
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

          <ul className="flex flex-wrap mt-4 gap-2 ">
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
                  if (title === "Wechat") {
                    alert(
                      "this video have the en and cn subtitle, turn it on if u need it! and also dont forget to turn the voice on!"
                    );
                    window.open(videoUrl, "_blank");
                    return;
                  }

                  setShow(!show);
                }}
                style={{ width: "5rem", height: "5rem" }}
                className=" m-auto "
              />
              <span
                className="hover:opacity-[0.7] opacity-[1] text-white"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Play the Demo {getPlatform(title)}
              </span>
            </div>
          </div>
        )}
        {show && getVideoContent(title)}
      </section>
    </motion.div>
  );
}
