import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const SectionMoney: React.FC = () => {
  return (
    <div className="md:px-40 py-20">
      <div className="flex md:flex-row flex-col bg-gradient-to-b from-[#f1f5f9] rounded-tl-[3rem] p-10">
        <div className="flex">
          <Image
            src="/images/finvo/features-03.png"
            alt="card"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h6 className="text-[50px] leading-[50px] font-bold text-black">
            Spend your money everywhere, pay anyone effortlessly
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud exercitation.
          </p>
          <button className="bg-primary w-fit text-white py-2 text-sm rounded-full px-4">
            Get your card
            <AiOutlineArrowRight className="inline-block ml-2 text-secondary hover:translate-x-1 duration-[0.5s]" />
          </button>
          <div className="flex mt-8 gap-4">
            <Image
              src="/images/finvo/quote-author-01.jpg"
              className="rounded-full h-10 w-10"
              alt="card"
              width={40}
              height={40}
            />
            “ We know the card market very well and this product provides the
            speed, flexible account model and API-first approach that no one
            else can. ”
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMoney;
