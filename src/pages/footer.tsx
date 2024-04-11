import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import SocialIcon from "@/components/common/social-h";
import Link from "next/link";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 0]));
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.main
      style={{ y }}
      className="size-full h-[85dvh] pt-[100px] items-center"
      ref={container}
    >
      <div className="h-full w-full bg-black flex flex-col items-center justify-center">
        <div className="flex">
          <h2 className="text-center text-9xl text-white font-bold">
            Let&apos;s Work
            <br />
            Together
          </h2>
        </div>
        <div className="mt-24">
          <motion.button
          href="/contact"
            className="px-8 h-auto py-3 text-xl text-jgold border-2 border-spacing-16 border-jgold rounded-full shadow-2xl shadow-cyan-500/60"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in touch
          </motion.button>
        </div>
        <div className="absolute bottom-16 right-24">
          <SocialIcon />
        </div>
      </div>
    </motion.main>
  );
}
