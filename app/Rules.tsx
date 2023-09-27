import Image from "next/image";
import Star1 from "../public/images/star1.svg";
import Star from "../public/images/star.svg";
import Ellipse from "../public/images/Ellipse 1.svg";
import Lady from "../public/images/lady.svg";
import PurpleLens from "../public/images/Purple-Lens.svg";

const Rules = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="flex flex-row w-10/12 mx-auto gap-x-20 py-16">
        <div className="w-1/2 flex flex-col py-6">
          <div className="flex flex-row justify-center items-center ">
          <Image src={Star1} width={21} height={25} alt="" className="relative z-50" />
          <Image
            src={PurpleLens}
            width={600}
            height={150}
            alt=""
            className="absolute w-10/12 brightness-50 mt-[60px]"
          />
          </div>
          <h2 className="z-10 text-3xl font-bold tracking-tight leading-tight py-8">
            Rules and <br />
            <span className="text-[#d434fe]">Guidelines</span>
          </h2>
          <p className="z-10 text-md md:text-lg text-center md:text-left">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <Image src={Star} width={21} height={25} alt="" className="ml-auto" />
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <div className="absolute -mt-8 ml-32">
          <Image src={Ellipse} width={134} height={134} alt="" className="" />
          </div>
         <div className="absolute">
         <Image src={Lady} width={664} height={664} alt="" className="" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
