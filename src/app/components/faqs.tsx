import React from "react";
import Image from "next/image";

const FAQS: React.FC = () => {
  return (
    <div className="md:px-40 py-20">
      <div className="text-[50px] text-black px-10 md:px-0">FAQs</div>
      <div className="grid md:grid-cols-2 gap-4 py-10 md:px-0 px-10">
        <div>
          {" "}
          <div className="text-[20px] font-bold text-black">
            How does it work?
          </div>
          <div className="text-[15px] text-[#6b7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div>
          <div className="text-[20px] font-bold text-black">
            How do I get started with card payments?
          </div>
          <div className="text-[15px] text-[#6b7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div>
          <div className="text-[20px] font-bold text-black">
            How is my document data stored/secured?
          </div>
          <div className="text-[15px] text-[#6b7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div>
          <div className="text-[20px] font-bold text-black">
            Can I get a standard card for free?
          </div>
          <div className="text-[15px] text-[#6b7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div>
          <div className="text-[20px] font-bold text-black">
            I do not want to pay now, how can I proceed?
          </div>
          <div className="text-[15px] text-[#6b7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div>
          <div className="text-[20px] font-bold text-black">
            I don&apos;t have the required documents, how can I proceed?
          </div>
          <div className="text-[15px] text-[#6b7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
