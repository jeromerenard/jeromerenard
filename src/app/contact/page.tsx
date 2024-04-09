import { Suspense } from "react";
import CurrentDate from "@/components/common/currentdate";
import { time } from "console";
import {SignupFormDemo} from "@/components/common/contactform";

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}
export default async function Contact() {

  await timeout(1000); //for 1 sec delay

  return (
    <main className="size-full h-screen">
      <div className="h-full w-full bg-black flex pt-96">
        <div className="flex-1 pl-96">
          <h1 className="text-9xl font-bold text-white">
            Let&apos;s Work <br />
            On A Project <br />
            Together
          </h1>
        </div>
        <div className="flex-1">
          <form className=" space-y-10">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="text-5xl font-semibold text-white"
              >
                What&apos;s Your Name?
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe *"
                className="text-[#888888] text-2xl bg-transparent border-none outline-none"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="email"
                className="text-5xl font-semibold text-white"
              >
                What&apos;s Your Email?
              </label>
              <input
                type="email"
                name="email"
                placeholder="John@Doe.com *"
                className="text-[#888888] text-2xl bg-transparent border-none outline-none"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="role"
                className="text-5xl font-semibold text-white"
              >
                What&apos;s Your Role?
              </label>
              <input
                type="text"
                name="role"
                placeholder="Artist, A&Rs, Executive *"
                className="text-[#888888] text-2xl bg-transparent border-none outline-none"
                id="role"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="message"
                className="text-5xl font-semibold text-white"
              >
                Your Message?
              </label>
              <textarea
                name="message"
                rows={2}
                className="text-[#888888] text-2xl bg-transparent border-none outline-none resize-none"
                id="message"
                placeholder="Hello Jerome, can you help me with ..."
              />
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
