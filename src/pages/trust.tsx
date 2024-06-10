import { useScroll, motion, useTransform, easeOut, useSpring } from "framer-motion";
import { use, useRef } from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

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

  const scale = useSpring(useTransform(scrollYProgress, [.9, .6], [1, .9]));

  const name1left = ["James Guido"];

  return (
    <motion.main className="size-full h-dvh py-16" id="trust" ref={container}>
      <motion.div className="h-full border-2 border-white/20 bg-neutral-950 shadow-stone-800 shadow-md	 w-full rounded-3xl flex flex-col items-center justify-center space-y-20 lg:space-y-32 2xl:space-y-48">
        
        <motion.div className="text-center" style={{ y, opacity }}>
          <h1 className="text-white text-5xl lg:text-8xl 2xl:text-8xl font-bold">
            They Trusted Me
          </h1>
          <div className="text-base text-white py-4 text-center">
            Over 250 millons streams in 15+ countries.
          </div>
        </motion.div>

        <motion.div
          className="flex flex-row space-x-4 lg:space-x-16 2xl:space-x-32 h-[24px] lg:h-16 2xl:h-[80px]"
          style={{ scale, opacity }}
        >
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
              height: "120%",
            }}
          />
          <Image
            className="invert"
            src={TheVoiceLogo}
            alt="Sony Logo"
            style={{
              width: "auto",
              height: "125%",
            }}
          />
        </motion.div>
        
        <div className="flex flex-col px-8 text-center">
        <VelocityScroll
      text="Sheldon Riley - Brooke - Ivri Lider - Sam Halabi - Erthling - Paradisio - Gaida - Sam Louis - Vitaa - Serel - Ryan Skyy - Max Landry - Kwanza Jones - Jon Car - Dan Knight - Victor Perry - Julie Elody - Tanae - Roberto Bellarosa - Jamiison - TonyB - SlabCity - Dina Layzis - Chelsko - Mishell Ivon"
      default_velocity={1}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  
        </div>
      </motion.div>
    </motion.main>
  );
}
        /*
          <motion.span
            className="text-gray-300"
            style={{ x }}
            transition={easeOut}
          >
            Sheldon Riley - Brooke - Ivri Lider - Sam Halabi - Erthling - Paradisio - Gaida - Sam Louis - Vitaa - Serel - Ryan Skyy - Max Landry - Kwanza Jones
          </motion.span>
          <motion.span className="text-gray-300" style={{ x }}>
            Jon Car - Dan Knight - Victor Perry - Julie Elody - Tanae - Roberto Bellarosa - Jamiison - TonyB - SlabCity - Dina Layzis - Chelsko - Mishell Ivon
          </motion.span>*/