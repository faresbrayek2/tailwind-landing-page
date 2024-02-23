import React from "react";
import Image from "next/image";

const Pricing: React.FC = () => {
  return (
    <div className="md:px-40 py-20">
      <div className="flex flex-col bg-gradient-to-b from-[#ffffff] border border-b-0 border-[#e5e7eb] rounded-tl-[3rem] p-10">
        <div className="grid">
          <div className="text-[40px] leading-10 font-bold  w-7/12">
            Get the only custom super card you&apos;ll ever need
          </div>
          <p className="w-9/12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="md:flex grid justify-center items-center">
          <div>
            <div className="font-bold flex justify-center items-center p-4">
              Starter
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/finvo/pricing-01.png"
                alt=""
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="font-bold flex justify-center items-center p-4">
              $0/m
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-primary px-8 py-1 text-white font-bold rounded-full">
                Get starter
              </button>
            </div>
            <div className="font-bold px-4">Features include</div>
            <ul className="p-4">
              <li>✓ Contactless payments</li>
              <li>✓ Mobile payments</li>
              <li>✓ Extra card (optional)</li>
              <li>✓ Free payments worldwide</li>
              <li>✓ Free domestic ATM withdrawals</li>
            </ul>
          </div>
          <div className="bg-[#dcebfe] rounded-br-[8rem]">
            <div className="font-bold flex justify-center items-center p-4">
              Smart
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/finvo/pricing-02.png"
                alt=""
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="font-bold flex justify-center items-center p-4">
              $0/m
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-primary px-8 py-1 text-white font-bold rounded-full">
                Get starter
              </button>
            </div>
            <div className="font-bold px-4">Everything in Starter, plus</div>
            <ul className="p-4">
              <li>✓ Contactless payments</li>
              <li>✓ Mobile payments</li>
              <li>✓ Extra card (optional)</li>
              <li>✓ Free payments worldwide</li>
              <li>✓ Free domestic ATM withdrawals</li>
            </ul>
          </div>
          <div>
            <div className="font-bold flex justify-center items-center p-4">
              You
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/finvo/pricing-03.png"
                alt=""
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="font-bold flex justify-center items-center p-4">
              $0/m
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-primary px-8 py-1 text-white font-bold rounded-full">
                Get starter
              </button>
            </div>
            <div className="font-bold px-4">Everything in Starter, plus</div>
            <ul className="p-4">
              <li>✓ Contactless payments</li>
              <li>✓ Mobile payments</li>
              <li>✓ Extra card (optional)</li>
              <li>✓ Free payments worldwide</li>
              <li>✓ Free domestic ATM withdrawals</li>
            </ul>
          </div>
          <div>
            <div className="font-bold flex justify-center items-center p-4">
              Black
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/images/finvo/pricing-04.png"
                alt=""
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="font-bold flex justify-center items-center p-4">
              $0/m
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-primary px-8 py-1 text-white font-bold rounded-full">
                Get starter
              </button>
            </div>
            <div className="font-bold px-4">Everything in You, plus</div>
            <ul className="p-4">
              <li>✓ Contactless payments</li>
              <li>✓ Mobile payments</li>
              <li>✓ Extra card (optional)</li>
              <li>✓ Free payments worldwide</li>
              <li>✓ Free domestic ATM withdrawals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
