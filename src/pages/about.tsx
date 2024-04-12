import Image from "next/image";
import JrNeve from "../../public/JeromeRenardNeve.jpeg";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, .4], [.6, 1]));

  return (
    <main className="size-full lg:h-dvh lg:py-16 bg-white" ref={container}>
      <div className="lg:h-full w-full flex flex-col lg:flex-row items-center px-8 lg:px-64 lg:gap-32">
        <div className="flex-1 pb-8">
          <h2 className="text-4xl lg:text-9xl font-bold pb-2 lg:pb-16">This Is Me</h2>
          <div className="leading-relaxed font-normal lg:pr-32">
            <p>Jerome Renard is Belgian-Born Mixing Engineer, living in sunny
            Los-Angeles.</p>
            <p>As a mixer he believes that every song deserves to have an engineer
            who understand the deepest needs and connections you have with your
            music.</p>
            
            As someone who has lived, experienced and engineered pop music
            internationally, he&apos;s able to bring a multicultural perspective to
            each project, helping to emphasize with goals of every artist he
            works with. <br />
            Having a deep fascination for the science behind the sound, his
            knowledge hovers not only engineering, but also acoustics and
            electronics. <br />
            That love of science comes in handy when he mixes, helping him
            minimize the technical “guesswork” and allowing him to focus on the
            artistry. <br />
            With a modern twist to a classic story, he started his journey as a
            curious 16-year-old kid pushing every button and faders he could get
            his hands on, Jerome had a wide array of opportunities to travel,
            develop his skills, and work with some of the tops producers,
            composes and A-list artists. <br />
            His experience working alongside John Metcalfe brought him to Real
            World Studio, Universal Music brought him more than once in the
            Studio La Grande Armee in Paris, and his sessions with Simon
            Phillips, were the catalyst for bringing him to Los-Angeles.
          </div>
        </div>
        <motion.div className="flex-1 pb-4 lg:pg-0" style={{scale}}>
          <Image
            src={JrNeve}
            alt="Jerome Renard"
            width={1000}
            height={1000}
            className="rounded-2xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
     <div className="">
     <motion.div style={{ height }} className="circleContainer ">
        <div className="circle"></div>
      </motion.div>
     </div>
    </main>
  );
}
