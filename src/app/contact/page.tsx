import { Suspense } from "react";
import CurrentDate from "@/components/common/currentdate";
import { time } from "console";
import {SignupFormDemo} from "@/components/common/contactform";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";


function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}
export default async function Contact() {

  await timeout(1000); //for 1 sec delay

  return (
    <main className="size-full h-screen">
      <div className="h-full w-full bg-black flex flex-col lg:flex-row px-8 lg:px-16 py-16 lg:py-32">
        <div className="lg:flex-1 2xl:pl-96">
          <h1 className="text-5xl lg:text-7xl 2xl:text-9xl font-bold text-white">
            Let&apos;s Work <br />
            On A Project <br />
            Together
          </h1>
        </div>
        <div className="lg:flex-1 h-full py-8 lg:py-0">  
          <form className="space-y-4 lg:space-y-10">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="lg:text-4xl 2xl:text-5xl font-semibold text-white"
              >
                What&apos;s Your Name?
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe *"
                className="text-[#888888] text-xl lg:text-2xl bg-transparent border-none outline-none"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="email"
                className="lg:text-4xl 2xl:text-5xl font-semibold text-white"
              >
                What&apos;s Your Email?
              </label>
              <input
                type="email"
                name="email"
                placeholder="John@Doe.com *"
                className="text-[#888888] text-xl lg:text-2xl bg-transparent border-none outline-none"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="role"
                className="lg:text-4xl 2xl:text-5xl font-semibold text-white"
              >
                What&apos;s Your Role?
              </label>
              <input
                type="text"
                name="role"
                placeholder="Artist, A&Rs, Executive *"
                className="text-[#888888] text-xl lg:text-2xl bg-transparent border-none outline-none"
                id="role"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="message"
                className="lg:text-4xl 2xl:text-5xl font-semibold text-white"
              >
                Your Message?
              </label>
              <textarea
                name="message"
                rows={2}
                className="text-[#888888] text-xl lg:text-2xl bg-transparent border-none outline-none resize-none"
                id="message"
                placeholder="Hello Jerome, can you help me with ..."
              />
            </div>
            <div className="">
            <button
            className="px-8 h-auto py-3 text-xl text-jgold border-2 border-spacing-16 border-jgold rounded-full shadow-2xl shadow-cyan-500/60 items-center space-x-4 inline-flex"
          >
            <RiSendPlaneFill />
            Send
          </button>
        </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-16 right-24 text-red-500">
        <span>
          Los Angeles | <CurrentDate />
        </span>
      </div>
    </main>
  );
}
