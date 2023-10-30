import React from "react";
import Reveal from "./Reveal";
import vslogo from "../assets/brands/VS logo.png";
import bsclogo from "../assets/brands/bsc.png";
import pwclogo from "../assets/brands/pwclogo.jpg";
import aonlogo from "../assets/brands/aonlogo.png";

const WorkedWith = () => {
  return (
    <section className="h-screen overflow-x relative z-100 mt-10  flex flex-col gap-5">
      <div className="">
        <Reveal>
          <p className="text-2xl	">Worked With</p>
        </Reveal>
      </div>
      <Reveal
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "100%",
          },
        }}
        delay={0.75}
      >
        <div className="flex z-10 gap-16 bg-red-60 w-[80vw] h-[40vh] items-center justify-center">
          <img src={pwclogo} alt="pwc logo" width={200}></img>
          <img
            src={vslogo}
            alt="vs logo"
            width={200}
            height={200}
            className="object-"
          ></img>
          <img src={aonlogo} alt="aon logo" width={200}></img>
          <img
            src={bsclogo}
            alt="bsc logo"
            width={200}
            className="object-fit"
          ></img>
        </div>
      </Reveal>
    </section>
  );
};
export default WorkedWith;
