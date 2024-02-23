import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card: React.FC = () => {
  return (
    <div className="md:px-40 py-20">
      <div className="bg-[#1e293b] rounded-tr-[8rem]">
        <div className="py-20 px-10 flex  justify-between">
          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col justify-center">
              <h6 className="text-[50px] leading-[50px] font-bold text-white">
                Build a flexible card program for your business needs
              </h6>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam, quis nostrud exercitation.
              </p>
              <button className="bg-primary w-fit text-white py-2 text-sm rounded-full px-4">
                Get your card
                <AiOutlineArrowRight className="inline-block ml-2 text-secondary hover:translate-x-1 duration-[0.5s]" />
              </button>
              <div className="flex mt-8 gap-4 text-white">
                <Image
                  src="/images/finvo/quote-author-01.jpg"
                  className="rounded-full h-10 w-10"
                  alt="card"
                  width={40}
                  height={40}
                />
                “ We know the card market very well and this product provides
                the speed, flexible account model and API-first approach that no
                one else can. ”
              </div>
            </div>
            <div className="px-2 pt-15">
              <Image
                src="/images/finvo/features-02.png"
                className="md:rotate-45"
                alt="card"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
