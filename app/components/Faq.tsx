import Image from "next/image";
import AccordionBox from "./AccordionBox";
import FaqImg from "../../public/images/faq.svg";
import Qmark from "../../public/images/_ (1).svg";
import Qmark2 from "../../public/images/_ (2).svg";
import Star from "../../public/images/star pu.svg";
import Star1 from "../../public/images/star.svg";
import Star2 from "../../public/images/star1.svg";

const Faq = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="md:w-10/12 px-5 md:px-0 flex flex-col md:flex-row mx-auto gap-x-14 py-10">
        <div className="py-3 md:w-2/5 md:py-5">
        <div className="text-center md:text-left">
        <Image src={Star} width={30} height={36} alt="" className="w-4 md:w-6" />
          <h2 className="z-10 text-2xl md:text-3xl font-bold tracking-tight leading-tight py-4 md:py-8">
            Frequently Ask <br />
            <span className="text-[#d434fe]">Question</span>
          </h2>
        </div>
          <p className="text-sm md:text-md text-center md:text-left">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <AccordionBox />
        </div>
        <div className="flex flex-col md:w-2/3">
          <div className="relative flex flex-row justify-between w-1/2 ml-12 md:ml-24">
          <Image src={Qmark2} width={114} height={71} alt="" className="w-4 md:w-10 mt-24 md:mt-28" />
         <div className="flex flex-row gap-x-2 md:gap-x-5">
         <Image src={Qmark} width={114} height={71} alt="" className="w-6 md:w-20" />
         <Image src={Star} width={30} height={36} alt="" className="w-2 md:w-6 mt-12" />
         </div>
          <Image src={Qmark2} width={114} height={71} alt="" className="w-4 md:w-10 mt-24 md:mt-28" />
          </div>
          <Image src={Star} width={30} height={36} alt="" className="w-4 md:w-6 absolute mt-64 ml-36" />
          <Image src={Star2} width={30} height={36} alt="" className="w-4 md:w-6 absolute ml-16 mt-[480px]" />
          <Image src={FaqImg} width={741} height={741} alt="" className="-mt-4 md:-mt-8" />
          <Image src={Star1} width={30} height={36} alt="" className="w-4 md:w-8 ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
