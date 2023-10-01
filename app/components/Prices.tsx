import Image from "next/image";
import Award from "../../public/images/award.svg";
import Reward from "../../public/images/Rewards.svg";
import PurpleLens from "../../public/images/Purple-Lens.svg";
import Star from "../../public/images/star pu.svg";
import Star1 from "../../public/images/star.svg";
const Prices = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="md:w-10/12 px-5 md:px-0 flex flex-col items-center justify-center mx-auto py-16">
        <div className="md:w-2/6 text-center md:ml-auto md:mr-[100px]">
          <h2 className="z-10 text-2xl md:text-3xl font-bold tracking-tight py-8">
            Prizes and <br />
            <span className="text-[#d434fe]">Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-8 py-10">
          <div className="">
          <Image src={Star} width={30} height={36} alt="" className="w-4 md:-mt-20 ml-32 absolute" />
          <Image
              src={PurpleLens}
              width={600}
              height={150}
              alt=""
              className="absolute ml-20 -mt-10 brightness-75"
            />
            <Image src={Award} width={548} height={482} alt="" className="relative z-10" />
          </div>
          <div>
          <Image src={Star1} width={30} height={36} alt="" className="w-4 absolute mt-5 ml-[40px]" />
          <Image src={Star1} width={30} height={36} alt="" className="w-4 ml-[520px] absolute mt-24 z-10" />
            <Image src={Reward} width={692} height={494} alt="" className="relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
