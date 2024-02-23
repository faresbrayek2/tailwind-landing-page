import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const CashBack: React.FC = () => {
  return (
    <div className="md:px-40 py-20">
      <div className="flex md:flex-row flex-col bg-gradient-to-b from-[#ffffff] border border-b-0 border-[#e5e7eb] rounded-tl-[3rem] p-10">
        <div className="flex flex-col justify-center">
          <h6 className="text-[50px] leading-[50px] font-bold text-black">
            Get cashback rewards on your favourite brands
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <table className="table-auto mt-4">
            <th>
              <td>Physical Stores</td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Starbucks
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Tesco
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                American Eagle
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Bershka
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Sainsbury&apos;s
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Marks & Spencer
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Primark
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                SportsDirect
              </td>
            </th>
            <th>
              <td>Online Stores</td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Starbucks
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Tesco
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                American Eagle
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Bershka
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Sainsbury&apos;s
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Marks & Spencer
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                Primark
              </td>
              <td className="flex gap-2 items-center">
                <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                  ✓
                </div>
                SportsDirect
              </td>
            </th>
          </table>
          <div className="p-4">
            <button className="bg-[#3b82f6] w-fit text-white py-2 text-sm rounded-full px-4">
              Get your card
              <AiOutlineArrowRight className="inline-block ml-2 text-[#7dd3fc] hover:translate-x-1 duration-[0.5s]" />
            </button>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/images/finvo/features-04.png"
            alt="card"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default CashBack;
