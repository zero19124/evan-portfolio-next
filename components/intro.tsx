"use client";

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
import * as html2pdf from "html2pdf.js";
import RingLoader from "react-spinners/ClipLoader";
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
          >
            <Image
              src="/avatar.jpg"
              alt="Ricardo portrait"
              width="256"
              height="256"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
        <p className="font-bold">with 6 years of experience.</p>
        <p>I have experience working with </p>
        <p className="underline">
          ReactNative, Vue, Node.js<span className="text-sm"> etc.</span>
        </p>
        <p className="text-sm">
          Speaker of <span className="font-bold">English Japanese Chinese</span>
        </p>
        <a className="text-sm font-bold underline" href="/#skills">
          more Skill details pls click to check{" "}
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
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
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
              await html2pdf().from(cloneEle).save("evan-cv");
              setLoading(false);
            }, 1000);
          }}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
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
