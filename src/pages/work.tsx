import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Work() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  }); 

  const y = useTransform(scrollYProgress, [1, 0], [0, 600]);

  return (
    <main className="size-full h-screen py-16" id="work" ref={container}>
      <div className="h-full w-full bg-black rounded-3xl flex items-center">
        <div className="flex-1 pl-48">
          <h2 className="text-white pl-0 text-[8rem] font-bold">
            Work That
          </h2>
          <h2 className="text-white pl-48 py-16 text-9xl font-bold">
            Make A
          </h2>
          <h2 className="text-white pl-96 text-9xl font-bold">
            Difference
          </h2>
        </div>
        <motion.div className="flex-1 pl-64 pr-64" style={{y}}>
          <iframe
            className="rounded-3xl h-[38dvh]"
            src="https://open.spotify.com/embed/playlist/4JTckBoo42kMfL08AqDjsF?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </main>
  );
}
