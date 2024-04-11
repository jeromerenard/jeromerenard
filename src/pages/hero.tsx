"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora";
import SocialIcon from "@/components/common/social-v";
import CurrentDate from "@/components/common/currentdate";
import { useRef } from "react";
import Link from "next/link";
export default function Hero() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end start", "end end"]
  });

  const x = useTransform(scrollYProgress, [1, 0], [0, -100]);
  const y = useTransform(scrollYProgress, [1, 0], [0, -800]);

  return (
    <main className="size-full h-full" id="hero" ref={container}>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-16 w-full h-full"
        >
          <h1 className="text-[11em] font-bold dark:text-white text-center leading-tight tracking-wide">
            Jerome <br />Renard
          </h1>
          <div className="font-extralight text-base md:text-6xl dark:text-neutral-200 py-4">
            Mixing Worldwide Records. 
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Over 150 millons streams in 15+ countries. 
          </div>
          
       <div className="mt-16">
          <motion.button
            className="px-8 h-auto py-3 text-xl text-jgold text-semibold border-2 border-spacing-16 border-jgold rounded-full shadow-2xl shadow-jblue/60"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/contact">Let&apos;s work together</Link>
          </motion.button>
        </div>
          <motion.div className="absolute left-24 bottom-16" style={{y}} > 
            <SocialIcon/>
          </motion.div>
          <div className="absolute bottom-16 right-32 text-gray-500 font-medium">
        <span>
          Los Angeles | <CurrentDate />
        </span>
      </div>
        </motion.div>
      </AuroraBackground>
    </main>
  );
}
