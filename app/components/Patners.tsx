import Image from "next/image";
import Sponsors from "../../public/images/Partner and sponsors section.svg";
const Patners = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="px-5 md:px-0 md:w-10/12 mx-auto flex flex-col gap-y-8 md:gap-y-16 text-center justify-center items-center py-16">
        <div className="md:w-1/2 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight py-3">Partners and Sponsors</h2>
          <p className="text-sm md:text-md w-11/12 md:w-full mx-auto">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div>
          <Image
            src={Sponsors}
            width={1255}
            height={560}
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Patners;
