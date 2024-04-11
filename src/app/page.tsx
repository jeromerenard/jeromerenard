"use client";
import Image from "next/image";
import { useEffect } from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Hero from "@/pages/hero";
import Trust from "@/pages/trust";
import Footer from "@/pages/footer";
import Work from "@/pages/work";
import About from "@/pages/about";
import Test from "@/pages/text";
import Lenis from "@studio-freight/lenis";

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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="w-full h-full px-16">
        <Test />
      </div>
      <About />
      <Footer />
    </main>
  );
}