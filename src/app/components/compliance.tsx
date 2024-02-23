import Image from "next/image";
import React from "react";

const Compliance: React.FC = () => {
  return (
    <div className="md:px-40 py-20">
      <div className="grid md:flex-row flex-col bg-[#367bf3] rounded-tr-[3rem] p-10">
        <div className="p-10">
          <h3 className="flex text-[40px] leading-10 text-white font-bold md:w-8/12">
            Get started in minutes and connect all your accounts in one place
          </h3>
          <p className="text-white md:w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/finvo/logos-illustration.svg"
            alt="card"
            width={400}
            height={400}
            className="absolute z-0 justify-center items-center"
          />{" "}
          <Image
            src="/images/finvo/logos.png"
            alt="card"
            className="z-1"
            width={700}
            height={700}
          />
        </div>
        <div className="md:flex px-10 justify-center items-center">
          <div className="grid md:divide-x divide-[#60a5fa] md:divide-x-reverse p-2">
            <div className="rounded-[100%] px-3 w-fit text-xl bg-[#99f6e4] text-[#0d9488]">
              1
            </div>
            <div className="text-white text-xl font-bold ">
              Download the app
            </div>
            <p className="text-[#bfdbfe]">
              Create cards that work exactly as you configured them. Make
              real-time decisions on charges and spendings.
            </p>
          </div>
          <div className="grid md:divide-x divide-[#60a5fa] md:divide-x-reverse p-2">
            <div className="rounded-[100%] px-3 w-fit text-xl bg-[#99f6e4] text-[#0d9488]">
              2
            </div>
            <div className="text-white text-xl font-bold ">
              Request your card
            </div>
            <p className="text-[#bfdbfe]">
              Create cards that work exactly as you configured them. Make
              real-time decisions on charges and spendings.
            </p>
          </div>
          <div className="grid">
            <div className="rounded-[100%] px-3 w-fit text-xl bg-[#99f6e4] text-[#0d9488]">
              3
            </div>
            <div className="text-white text-xl font-bold ">
              Connect all your account
            </div>
            <p className="text-[#bfdbfe]">
              Create cards that work exactly as you configured them. Make
              real-time decisions on charges and spendings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
