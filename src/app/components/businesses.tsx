import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Business: React.FC = () => {
  return (
    <div className="md:px-40 py-20 transform duration-250 ">
      <div className="flex md:flex-row flex-col bg-gradient-to-b from-[#f1f5f9] rounded-tl-[3rem] p-10">
        <div className="flex">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="md:w-1/2 "
          >
            <SwiperSlide>
              <Image
                src="/images/finvo/testimonial-02.jpg"
                alt="card"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/finvo/testimonial-01.jpg"
                alt="card"
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col justify-center">
          <h6 className="text-[50px] leading-[50px] font-bold text-black">
            Compliance built card for businesses and professionals
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud exercitation.
          </p>
          <div className="gap-y-8">
            <div className="flex gap-2 items-center">
              <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                ✓
              </div>
              Identity verifications
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                ✓
              </div>
              Secure credit card data tokenization
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                ✓
              </div>
              Online and mobile payments
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-[100%] w-fit h-fit p-1 bg-[#dbeafe] text-xs text-primary">
                ✓
              </div>
              IGlobal regulations and compliance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
