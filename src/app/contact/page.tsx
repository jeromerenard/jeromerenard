"use client";
import React, { useState} from "react";
import emailjs from "@emailjs/browser";
import CurrentDate from "@/components/common/currentdate";
import { RiSendPlaneFill } from "react-icons/ri";
import SocialIconHB from "@/components/common/social-h";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          "contact_service_jr",
          "template_cil111o",
          e.target as HTMLFormElement,
          "5MBm-BFy31XoGCZ9y"
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus("SUCCESS");
            // Clear form fields
            setName("");
            setEmail("");
            setRole("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            setStatus("ERROR");
          }
        );
    } else {
      setStatus("ERROR");
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const renderStatus = () => {
    if (status === "SUCCESS") {
      return <div className="success-message">Thank you for your message!</div>;
    } else if (status === "ERROR") {
      return (
        <div className="error-message">
          Something went wrong. Please try again.
        </div>
      );
    }
  };

  const renderErrors = () => {
    return Object.entries(errors).map(([key, value]) => (
      <div key={key} className="error-message">
        {value}
      </div>
    ));
  };

  return (
    <main className="size-full h-screen">
      <div className="sm:h-full min-h-dvh w-full bg-black flex flex-col lg:flex-row px-8 lg:px-32 py-16 lg:py-32">
        <div className="lg:flex-1 2xl:pl-96">
          <h1 className="sm:max-w-[70%] text-4xl lg:text-7xl 2xl:text-8xl font-bold text-white">
            Let&apos;s work on a project together.
          </h1>
          <div className="pt-4 sm:pt-16">
            <span className="text-gray-500">
              Click here to schedule a call or fill out the form.
            </span>
          </div>
          <div className="pt-24">
            <SocialIconHB />
          </div>
        </div>
        <div className="lg:flex-1 h-full py-8 lg:py-0">
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-10">
            <div className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="text-white font-semibold lg:text-3xl 2xl:text-4xl"
              >
                What&apos;s your name?
              </label>
              <input
                type="text"
                name="name"
                placeholder={errors.name || "Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`text-white sm:w-1/2 bg-transparent border-b border-gray-500 focus:outline-none focus:text-blue-500 focus:border-blue-500 ${
                  errors.name ? "placeholder-red-500" : "placeholder-gray-400"
                }`}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-white font-semibold lg:text-3xl 2xl:text-4xl"
              >
                What&apos;s your email?
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`text-white sm:w-1/2 bg-transparent border-b border-gray-500 focus:outline-none focus:text-blue-500 focus:border-blue-500 ${
                  errors.email ? "placeholder-red-500" : "placeholder-gray-400"
                }`}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-white font-semibold lg:text-3xl 2xl:text-4xl"
              >
                What&apos;s your role?
              </label>
              <input
                type="text"
                name="role"
                placeholder="Artist, Producer, A&R, Executive, Others"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="text-white sm:w-1/2 bg-transparent border-b border-gray-500 focus:outline-none focus:text-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-white font-semibold lg:text-3xl 2xl:text-4xl"
              >
                What do you have in mind?
              </label>
              <textarea
                placeholder="Message *"
                name="message"
                value={message}
                rows={3}
                onChange={(e) => setMessage(e.target.value)}
                className={`text-white sm:w-1/2 bg-transparent border-b border-gray-500 focus:outline-none focus:text-blue-500 focus:border-blue-500 ${
                  errors.message
                    ? "placeholder-red-500"
                    : "placeholder-gray-400"
                }`}
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="text-jgold h-auto sm:text-xl border-2 border-jgold rounded-full py-2 px-6 shadow-2xl shadow-cyan-500/60 inline-flex gap-4 items-center"
              >
                <RiSendPlaneFill />
                Send
              </button>
            </div>
          </form>
          <div className="text-white mt-6">{renderStatus()}</div>
        </div>
      </div>
      <div className="absolute bottom-4 right-1/2 translate-x-1/2 sm:-translate-x-0 sm:bottom-16 sm:right-24 text-gray-500">
        <span>
          Los Angeles | <CurrentDate />
        </span>
      </div>
    </main>
  );
}
