"use client";
import Image from "next/image";
import { useEffect } from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Hero from "@/pages/hero";
import Herotest from "@/pages/herotest";
import Trust from "@/pages/trust";
import Footer from "@/pages/footer";
import Work from "@/pages/work";
import About from "@/pages/about";
import Test from "@/pages/text";
import Lenis from "@studio-freight/lenis";
import BannerMP from "@/pages/banner";
import NavBar from "@/components/common/navbar";


function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

export default function Home() {
  /*useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])*/

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main className="w-full min-h-sreen">
             <div className="w-screen flex flex-col invisible lg:visible">
             <NavBar/>
              
              </div>
      <Herotest />
      <div className="w-full h-full px-2 lg:px-16 bg-white">
        <Test />
      </div>
      <About />
      <Footer />
    </main>
  );
}
/*#0E1011*/
/* flex min-h-screen flex-col items-center  */