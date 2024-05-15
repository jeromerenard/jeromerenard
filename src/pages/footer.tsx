import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import SocialIcon from "@/components/common/social-h";
import { RiSendPlaneFill } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [1, 0], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.main
      
      className="size-full h-dvh lg:h-[85dvh]  items-center"
      ref={container}
    >
      <div className="h-full w-full bg-black flex flex-col items-center justify-center relative lg:space-y-20 3xl:space-y-24">
        <motion.div className="flex" style={{y, opacity}}>
          <h2 className="text-center text-5xl lg:text-8xl 2xl:text-9xl text-white font-bold">
            Let&apos;s Work
            <br />
            Together
          </h2>
        </motion.div>
        <div className="mt-16 lg:mt-0">
          <motion.button
            className="px-8 h-auto py-3 text-xl text-jgold border-2 border-spacing-16 border-jgold rounded-full shadow-2xl shadow-cyan-500/60 items-center space-x-4 inline-flex"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <RiSendPlaneFill />
            <Link href="/contact">Get in touch</Link>
          </motion.button>
        </div>
        <div className="mt-24 lg:mt-0 text-center">
          <span className="text-white">
            Based in Los Angeles, CA. <br />Working Worldwide
          </span>
        </div>
        <div className="absolute bottom-8 lg:bottom-16 lg:left-24">
          <span className="text-white">Copyright © 2024 Jerome Renard</span>
        </div>
        <div className="absolute bottom-24 lg:bottom-16 lg:right-24">
          <SocialIcon />
        </div>
      </div>
    </motion.main>
  );
}
