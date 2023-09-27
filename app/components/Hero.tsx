import CountdownTimer from "./CountdownTimer";
import Image from "next/image";
import HeroImg from "../../public/images/Image 1.svg";
import Vector from "../../public/images/Vector 4.svg";
import ManImg from "../../public/images/man.svg";
import PurpleLens from "../../public/images/Purple-Lens.svg";
import Title from "../../public/images/Title.svg";
import Star from "../../public/images/star.svg";
import Title2 from "../../public/images/Title2.svg"

const targetDate = new Date("2023-12-31 23:59:59");
const Hero: React.FC = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="w-12/12 mx-auto px-5 max-h-[730px] md:px-0 md:pl-[7.25rem] md:pr-2 md:max-h-[750px] overflow-y-hidden">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between relative py-6 md:py-10">
          <div className="flex flex-col md:flex-row">
            <Image src={Star} width={20} height={10} alt="" className="absolute mt-10 -ml-16 md:mt-0 md:ml-0 md:relative md:w-full" />
            <Image
              src={PurpleLens}
              width={600}
              height={150}
              alt=""
              className="absolute -ml-52 -mt-3 md:-mt-32 md:ml-3 brightness-75"
            />
          </div>
          <div className="flex flex-col md:justify-end items-end md:pr-20">
            <h2 className="text-md md:text-4xl font-semibold ">
              Igniting a Revolution in HR Innovation
            </h2>
            <Image src={Vector} width={200} height={200} alt="" className="w-4/12" />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 md:flex-row md:justify-between relative">
          <div className="z-10 relative flex flex-col justify-center items-center text-center md:text-left md:items-start md:justify-start">
          <Image src={Title2} width={600} height={200} alt="" className="block md:hidden" />
            <Image src={Title} width={600} height={200} alt="" className="hidden md:block" />
            <p className="md:w-9/12 text-md py-4">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <button className="button px-7 py-2 rounded-sm my-3 mx-auto md:mx-0">
              Register
            </button>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="md:-mt-6">
          <div className="relative">
              <Image src={ManImg} width={828} height={715} alt="" />
            </div>
            <div className="relative z-20 -mt-[300px] md:-mt-[670px] md:ml-10">
              <Image src={HeroImg} width={647} height={611} alt="" className="w-11/12 md:w-full" />
            </div>
            <div className="hidden md:block md:absolute md:-mt-[660px] md:ml-[330px]">
              <Image src={PurpleLens} width={700} height={200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
