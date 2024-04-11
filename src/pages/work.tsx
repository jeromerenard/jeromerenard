import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Work() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [1, 0], [0, 600]);
  const opacity = useSpring(useTransform(scrollYProgress, [0, .8], [0, 1]));


  return (
    <main className="size-full h-screen py-16" id="work" ref={container}>
      <div className="h-full w-full bg-black rounded-3xl flex items-center">
        <motion.div className="flex-1 pl-24 2xl:pl-48 space-y-12" style={{opacity}}>
          <h2 className="text-white pl-0 text-8xl 2xl:text-[8rem] font-bold">Work That</h2>
          <h2 className="text-white 2xl:pl-48 text-8xl 2xl:text-9xl font-bold">Make A</h2>
          <h2 className="text-white 2xl:pl-96 text-8xl 2xl:text-9xl font-bold">Difference</h2>
        </motion.div>
        <motion.div className="flex-1 pl-24 2xl:pl-64 pr-24 2xl:pr-64" style={{ y }}>
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
