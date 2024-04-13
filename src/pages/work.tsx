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
    <main className="size-full h-dvh py-16" id="work" ref={container}>
      <div className="h-full w-full bg-black rounded-3xl flex flex-col lg:flex-row items-center pt-16 lg:pt-0 lg:px-8 space-y-16">
        <motion.div className="flex-col lg:flex-1 2xl:pl-48 space-y-4 lg:space-y-10 2xl:space-y-12 text-center lg:text-left" style={{opacity}}>
          <h2 className="text-white lg:pl-0 2xl:pl-0 text-5xl lg:text-7xl 2xl:text-9xl font-bold">Work That</h2>
          <h2 className="text-white lg:pl-16 2xl:pl-48 text-5xl lg:text-7xl 2xl:text-9xl font-bold">Make A</h2>
          <h2 className="text-white lg:pl-32 2xl:pl-96 text-5xl lg:text-7xl 2xl:text-9xl font-bold">Difference</h2>
        </motion.div>
        <motion.div className="flex-1 2xl:pl-64 2xl:pr-64 pb-8" style={{ y }}>
          <iframe
            title="Spotify Playlist Portfolio"
            className="rounded-3xl h-fill lg:h-[38dvh]"
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
