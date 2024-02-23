import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#3276f2] rounded-bl-[8rem]  h-full">
      <div className="py-13 md:px-50 px-10">
        <div className="flex justify-between">
          {/* <Image
            src="/images/finvo/Logo.svg"
            alt="logo"
            width={100}
            height={100}
          /> */}
        </div>
        <div className="flex md:flex-row flex-col md:w-7/12 md:pl-24 justify-center md:justify-between">
          <div className="py-12 grid items-center">
            <h3 className="grid tracking-wide leading-[45px] text-[55px] text-white font-bold">
              Create physical and virtual cards for your business
              <p className="grid text-[18px] text-[#bbd8fe] font-normal">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="flex mt-8 gap-4">
                <button className="bg-black text-white py-2 text-sm rounded-full px-4">
                  Get your card
                  <AiOutlineArrowRight className="inline-block ml-2 text-primary hover:translate-x-1 duration-[0.5s]" />
                </button>
                <button className="bg-[#bbd8fe] py-2 text-sm text-white rounded-full px-4">
                  read documentation
                </button>
              </div>
            </h3>
          </div>
          <div className="flex-1">
            <div className="md:flex">
              <Image
                src="/images/finvo/hero-image.png"
                width={580}
                alt="hero"
                className="md:absolute"
                height={580}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
