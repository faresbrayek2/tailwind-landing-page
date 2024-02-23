import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e293b] delay-75 ease-in-out translate-y-1">
      <div className="md:flex justify-between md:px-24 px-10 py-4 leading-10">
        <div>
          <div className="text-[#3b82f6] text-[25px]">
            What are you waiting for?
          </div>
          <div className="text-[35px] font-bold text-white ">
            Get the only custom super card
          </div>
        </div>
        <div className="flex md:p-6 py-6 gap-4">
          <div className="md:px-4">
            <button className="bg-primary w-fit text-white py-2 text-sm rounded-full px-4">
              Get your card
              <AiOutlineArrowRight className="inline-block ml-2 text-secondary hover:translate-x-1 duration-[0.5s]" />
            </button>
          </div>
          <div>
            <button className="bg-[#334155] py-2 text-sm rounded-full px-4 text-white">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex  md:px-24 px-10 py-4  leading-10">
        <div className="flex pr-24 gap-4">
          {/* <Image
            src="/images/finvo/logo.svg"
            alt="card"
            width={100}
            height={100}
          /> */}
        </div>
        <div className="md:flex w-full text-white justify-between">
          <ul>
            <li className="text-white font-bold">Essentials</li>
            <li>Payments</li>
            <li>Budgeting and analytics</li>
            <li>Open banking</li>
            <li>Pockets</li>
            <li>Subscriptions</li>
          </ul>
          <ul>
            <li className="text-white font-bold">Company</li>
            <li>About us</li>
            <li>Diversity / Inclusion</li>
            <li>Sustainability</li>
            <li>Code of conduct</li>
            <li>Financial statements</li>
          </ul>
          <ul>
            <li className="text-white font-bold">Lifestyle</li>
            <li>International products</li>
            <li>Currency exchange</li>
            <li>Lounge & Smart delay</li>
          </ul>
          <ul>
            <li className="text-white font-bold">Company</li>
            <li>Send us an email</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between md:px-24 px-10 py-4 text-xs">
        <p>
          If you would like to find out more about which entity you receive
          services from please click here If you have any other questions,
          please reach out to us via the in-app chat. Custom Bank is a bank
          established in the Republic of Ireland. Custom Bank is licensed by the
          European Central Bank and regulated by the Bank of Ireland. Cusom Bank
          provides credit, payment, current account and demand deposit account
          services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
