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
          <motion.span className="text-gray-300" style={{xx}}>
            Jerome Renard - James Guido - Lana Del Rey - Madona - Aaron - Kyle
          </motion.span>
        </div>
      </div>
    </motion.main>
  );
}

/*


 className="size-full  py-16"
      id="trust"
 
    >
      <div className="h-screen w-full bg-black rounded-3xl flex flex-col place-items-center place-content-center">
        <h1 className="flex text-white text-9xl font-bold">
          Partners who have trusted me // I've worked with
        </h1>
        <div className="text-base text-white py-4">
          Over 150 millons streams in 15+ countries.
        </div>
     
      </div>
      <div className="size-full h-screen py-16" id="work">
        <div className="h-full w-full bg-black rounded-3xl flex items-center">
          <div className="flex-1 pl-48">
            <h2 className="text-white pl-0 text-[8rem] font-bold">Work That</h2>
            <h2 className="text-white pl-48 py-16 text-9xl font-bold">
              Make A
            </h2>
            <h2 className="text-white pl-96 text-9xl font-bold">Difference</h2>
          </div>
          <div className="flex-1 pl-64 pr-64">
            <iframe
              className="rounded-3xl h-[38dvh]"
              src="https://open.spotify.com/embed/playlist/4JTckBoo42kMfL08AqDjsF?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>


   <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-white">this is a first test</h1>
        </motion.div>
        <div className="text-gray-500 font-semibold">
          this is me, this is you, this is us
        </div>
        */
