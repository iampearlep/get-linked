import Image from "next/image";
import IdeaImg from "../../public/images/The big idea.svg";
import Star from "../../public/images/star pu.svg";
import Arrow from "../../public/images/arrow.svg";
import Sata from "../../public/images/sata gra.svg";
const Intro = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="w-full px-5 py-10 md:w-10/12 md:py-16 flex flex-col md:flex-row gap-x-14 gap-y-5 mx-auto items-center">
        <div className="w-10/12 md:w-1/2 flex flex-row justify-center items-center max-h-[300px] md:max-h-full">
          <Image src={Sata} width={21} height={25} alt="" className="relative -mt-40" />
          <Image src={IdeaImg} width={490} height={477} alt="" />
          <Image src={Arrow} width={49} height={57} alt="" className="relative mt-[270px] md:mt-[420px]"/>
        </div>
        <div className="md:w-2/5">
          <div className="flex flex-row items-center text-center justify-center md:text-left md:justify-between">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight py-8">
              Introduction to getlinked <br />{" "}
              <span className="text-[#d434fe]">tech Hackathon 1.0</span>
            </h2>
            <Image src={Star} width={30} height={36} alt="" className="w-4 md:w-8" />
          </div>
          <p className="text-md md:text-lg text-center md:text-left">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
