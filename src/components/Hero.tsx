import React from "react";
import Reveal from "./Reveal";
import Aim from "./Aim";
import { useEffect, useRef } from "react";
import Game from "./Game";

import { ChevronDown } from "lucide-react";

const Hero = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    section1Ref.current?.addEventListener("mousemove", (e) => {
      cursorRef.current!.style.left = `${e.clientX - 20}px`;
      cursorRef.current!.style.top = `${e.clientY - 20}px`;
    });
  });
  return (
    <section
      className="h-screen w-screen grid place-items-center relative z-100 cursor-none "
      ref={section1Ref}
    >
      <div className="items-center flex flex-col gap-2 select-none backdrop-blur-sm  rounded">
        <div className="items-center flex flex-col gap-2 select-none backdrop-blur-sm  rounded h-screen w-screen justify-center">
          <Reveal
            variants={{
              hidden: {
                left: 0,
                visibility: "hidden",
              },
              visible: {
                left: 0,
                visibility: "hidden",
              },
            }}
          >
            <p className="font-cursive text-8xl p-2	">Subhash nayak</p>
          </Reveal>
          <Reveal
            variants={{
              hidden: {
                left: 0,
                visibility: "hidden",
              },
              visible: {
                left: 0,
                visibility: "hidden",
              },
            }}
            delay={0.8}
          >
            <p className="text-4xl font-cursive p-2">Front-End Developer</p>
          </Reveal>
        </div>
      </div>

      <div
        className="absolute rounded-full border select-none  w-10 h-10 items-center flex justify-center"
        ref={cursorRef}
      >
        <Aim />
      </div>
      <div className="absolute bottom-10 scroll-down flex flex-col">
        <Reveal
          variants={{
            hidden: {
              left: 0,
              visibility: "hidden",
            },
            visible: {
              left: 0,
              visibility: "hidden",
            },
          }}
          delay={4}
        >
          <label className="m-auto text-md font-cursive select-none">
            scroll
          </label>
        </Reveal>
        <button className="cursor-none ">
          <ChevronDown className="m-auto" />
        </button>
      </div>

      <Game />
    </section>
  );
};

export default Hero;
