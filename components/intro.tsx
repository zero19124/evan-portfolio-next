"use client";
// @ts-nocheck
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { CSSProperties, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { TypeAnimation } from "react-type-animation";
import RingLoader from "react-spinners/ClipLoader";
import { url } from "inspector";
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [loading, setLoading] = useState(false);
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <section
      ref={ref}
      id="home"
      className="mb-6 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            style={{ width: "20vh", height: "20vh" }}
          >
            <Image
              src="/avatar-1.png"
              // src="/avatar.jpg"
              alt="Evan portrait"
              quality="95"
              fill={true}
              objectFit="cover"
              priority={true}
              className="rounded-full  object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm</span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1
            id="name"
            className=" text-center  text-3xl  sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold"
          >
            <TypeAnimation
              sequence={[
                "Evan",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>
        <p className="font-bold">with 6 years of experience</p>
        <p className="text-xl">
          in ReactNative, Vue, Node<span className="text-sm"> etc.</span>
        </p>

        <p className="text-base">
          <a
            className="underline mr-2 "
            href="mailto:qq534883225@gmail.com@gmail.com"
          >
            qq534883225@gmail.com
          </a>
          <span className="w-150 inline-block sm:inline"> +86-18376639110</span>
        </p>
        <p className=" text-lg">Frontend Dev | Mobile Dev | FullStack</p>
        <p className="text-base">
          Speaker of <span className="font-bold">English Japanese Chinese</span>
        </p>
        <a className=" block text-sm font-bold underline" href="/#skills">
          more skills check here{" "}
        </a>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          // target="_blank"
          href={`${
            process.env.NODE_ENV === "production"
              ? "https://evan-portfolio-next.onrender.com"
              : "localhost:3000"
          }#projects`}
          className=" relative mr-2 group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          <>
            Check My Projects here
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </>
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          download
          onClick={(e) => {
            e.preventDefault();
            setLoading(true);
            const element = document.getElementById("main");
            const small = document.getElementById("small");
            if (!element) return;
            const cloneEle = element.cloneNode(true);
            (cloneEle as any).querySelector(
              "#name"
            ).children[0].firstChild.nodeValue = "Evan";
            console.dir((cloneEle as any).querySelector("#name").children[0]);
            // console.dir(cloneEle.querySelector("#name").children[0].nodeValue = );
            small?.scrollIntoView();
            setTimeout(async () => {
              const { default: html2pdf } = await import("html2pdf.js");

              if (typeof window === "undefined") return;
              if (typeof document === "undefined") return;

              await html2pdf().from(cloneEle).save("evan-cv");
              setLoading(false);
            }, 1000);
          }}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex">
          {/* <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a> */}

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/zero19124"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>

        {loading && (
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "fixed",
              zIndex: 999,
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div>
              <RingLoader
                color={"#fff"}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <p className="text-white">
                downloading
                <span className="animate-ping"> .</span>
                <span className="animate-ping">.</span>
                <span className="animate-ping">.</span>
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
