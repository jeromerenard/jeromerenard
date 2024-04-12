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

  const x = useTransform(scrollYProgress, [1, 0], [0, 800]);
  const x2 = useTransform(scrollYProgress, [1, 0], [0, -800]);

  const y = useTransform(scrollYProgress, [1, 0], [0, -800]);
  const y2 = useTransform(scrollYProgress, [1, 0], [0, -800]);
  
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const name1left = ["James Guido"]

  return (
    <motion.main className="size-full h-dvh py-16" id="trust"
    ref={container}

    >
      <motion.div className="h-full bg-gray-900 w-full rounded-3xl flex flex-col items-center justify-center">
        <motion.div className="text-center" style={{y, opacity}}>
        <h1 className="text-white text-5xl lg:text-9xl font-bold">They Trusted Me</h1>
        <div className="text-base text-white py-4 text-center">
          Over 150 millons streams in 15+ countries.
        </div>
        </motion.div>
       

        <motion.div className="flex flex-row pt-32 space-x-32 h-[80px] lg:h-[200px]" style={{x}} >
          <Image
          className="invert"           
            src={UMGLogo}
            alt="UMG Logo"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
          <Image
            className="invert"             
            src={SonyLogo}
            alt="Sony Logo"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
          <Image
          className="invert"           
            src={TikTokLogo}
            alt="Sony Logo"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
          <Image
          className="invert"           
            src={TheVoiceLogo}
            alt="Sony Logo"
            style={{
              width: "auto",
              height: "100%",
            }}
          />
        </motion.div>
        <div className="flex flex-col px-8 lg:pt-32 text-center">
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
      </motion.div>
    </motion.main>
  );
}