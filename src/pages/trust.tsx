import { useScroll, motion, useTransform, easeOut } from "framer-motion";
import { use, useRef } from "react";
import { LampContainer } from "@/components/ui/lamp";

import Image from "next/image";
import UMGLogo from "../../public/UMGLogo.png";
import SonyLogo from "../../public/SonyLogo.png";
import TheVoiceLogo from "../../public/TheVoiceLogo.png";
import TikTokLogo from "../../public/TikTokLogo.png";

export default function Trust() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [1, 0], [0, 100]);
  const xx = useTransform(scrollYProgress, [1, 0], [0, -100]);

  const y = useTransform(scrollYProgress, [1, 0], [0, -800]);
  const yy = useTransform(scrollYProgress, [1, 0], [0, -800]);


  return (
    <motion.main className="size-full h-screen py-16" id="trust"
    ref={container}

    >
      <div className="h-full bg-gray-900 w-full rounded-3xl flex flex-col items-center justify-center">
        <motion.div className="" style={{y}} >
        <h1 className="text-white text-9xl font-bold">They Trusted Me</h1>
        <div className="text-base text-white py-4 text-center">
          Over 150 millons streams in 15+ countries.
        </div>
        </motion.div>
       

        <motion.div className="flex flex-row pt-32 space-x-32 h-[200px]" style={{x}} >
          <Image
            src={UMGLogo}
            alt="UMG Logo"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
          <Image
            src={SonyLogo}
            alt="Sony Logo"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
          <Image
            src={TikTokLogo}
            alt="Sony Logo"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
          <Image
            src={TheVoiceLogo}
            alt="Sony Logo"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </motion.div>
        <div className="flex flex-col pt-32">
          <motion.span className="text-gray-300" style={{x}} 
          transition={
            easeOut
          }>
            Jerome Renard - James Guido - Lana Del Rey - Madona - Aaron - Kyle
          </motion.span>
          <motion.span className="text-gray-300" style={{x}}>
            Jerome Renard - James Guido - Lana Del Rey - Madona - Aaron - Kyle
          </motion.span>
        </div>
      </div>
    </motion.main>
  );
}