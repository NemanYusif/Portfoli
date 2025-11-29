import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[50%] pt-24">
        <h1 className="text-3xl tracking-wider text-white font-bold ">
          Neman Yusif is a{" "}
          <span className="text-lime-500">front-end,mobile developer</span> and
          <span className="text-lime-500"> IT help desk specialist</span>
        </h1>
              <div className="border-lime-500  border w-[50px] h-[50] mt-8 ">
        <div className="border-lime-500  border w-[60px] h-[60px]">
          <div className="border-lime-500  border w-[70px] h-[70px]">
            <div className="border-lime-500  border w-[81px] h-[81px]">
              <div className="border-lime-500  border w-[90px] h-[90px]"></div>
            </div>
          </div>
        </div>
      </div>
        <div className="mt-14">
          <button className="border-lime-500 border hover:bg-lime-400 duration-700 text-white px-4 py-1 text-xl">
            Contact me!!
          </button>
          
        </div>
        
      </div>

      <div className="pt-14">
        <Image
          className="shadow-2xl shadow-gray-950 rounded-ss-full rounded-br-full"
          src={"/images/neman.png"}
          alt="Neman Yusif"
          width={300}
          height={300}
        />
      </div>

      <div className="mt-20 flex-col gap-x-10">
        <div>
          <Link
            className="text-[#abb2bf] text-3xl"
            target="_blank"
            href="https://github.com/NemanYusif"
          >
            <FaGithub />
          </Link>
        </div>
        <div className="mt-5 mb-5">
          <Link
            className="text-[#abb2bf] text-3xl"
            target="_blank"
            href="https://www.linkedin.com/in/neman-yusif/"
          >
            <BsLinkedin />
          </Link>
        </div>
        <div>
          <Link
            className="text-[#abb2bf] text-3xl"
            target="_blank"
            href="https://www.linkedin.com/in/neman-yusif/"
          >
            <FaSquareWhatsapp />
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
