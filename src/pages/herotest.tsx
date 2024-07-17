"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SocialIcon from "@/components/common/social-v";
import SocialIconHB from "@/components/common/social-h";
import CurrentDate from "@/components/common/currentdate";
import { useRef } from "react";
import Link from "next/link";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import JRnbg from "../../public/JRnobg.png";
import {Button, ButtonGroup} from "@nextui-org/button";


export default function Herotest() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "end end"],
  });

  const x = useTransform(scrollYProgress, [1, 0], [0, -100]);
  const y = useTransform(scrollYProgress, [1, 0], [0, -800]);

  const up = useTransform(scrollYProgress, [1, 0], [0, -800]);

  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <main className="size-full h-screen relative" id="hero" ref={container}>
      <div className="relative flex flex-col items-center justify-center px-16 w-full h-screen overflow-hidden">
        <div className="bg-black -z-30 absolute w-full h-full"></div>
        <motion.div
          className="-z-10 circlehero rounded-full -top-10 lg:top-48 absolute motion-reduce:animate-bounce scale-50 lg:scale-100"
          style={{ opacity }}
        ></motion.div>
        <motion.div
          className="-z-10 absolute top-4 lg:top-32 translate-x-8 lg:translate-x-16 vignette"
          style={{ opacity }}
        >
          <Image src={JRnbg} alt="Jerome Renard" className="" width={800} height={1274}/>
        </motion.div>
        <motion.div
          className="mt-32 lg:mt-48 items-center flex flex-col gap-1 lg:gap-2 2xl:gap-4"
          style={{ y }}
          initial={{ opacity: 0.0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",}}
        >
          
          <h1 className="text-6xl lg:text-8xl 2xl:text-[7em] text-slate-200 font-bold text-center leading-tight tracking-wide">
            Jerome 
            Renard
          </h1>
          <div className="font-semibold text-center text-xl lg:text-3xl 2xl:text-4xl text-slate-200 dark:text-neutral-200 py-2">
            Mixing Worldwide Records
          </div>
          <div className="text-xl text-center font-medium lg:text-xl 2xl:text-2xl text-gray-500 dark:text-neutral-200 py-2">
            Over 250 millons streams in 15+ countries
          </div>

          <div className="z-99 mt-4 lg:mt-8 2xl:mt-8">
            <motion.button
              className="inline-flex px-4 lg:px-8 h-auto py-4 sm:text-xl text-jgold text-semibold border-2 border-spacing-16 border-jgold rounded-full shadow-2xl shadow-cyan-500/60 items-center gap-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RiSendPlaneFill />
              <Link href="/contact">Let&apos;s work together</Link>
            </motion.button>
          
          </div>
        </motion.div>
        <motion.div
          className="absolute left-24 bottom-16 invisible lg:visible"
          style={{ y }}

          initial={{ opacity: 0.0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",}}
        >
          <SocialIcon />
        </motion.div>
        <div className="absolute bottom-16 visible lg:invisible">
          <SocialIconHB />
        </div>
        <div className="absolute bottom-16 right-32 text-gray-500 font-medium invisible lg:visible">
          <span>
            Los Angeles | <CurrentDate />
          </span>
        </div>
      </div>
    </main>
  );
}
