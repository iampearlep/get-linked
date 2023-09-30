import Image from "next/image";
import Man from "../../public/images/08 1.svg";
import Vector from "../../public/images/Vector (11).svg";
import Check from "../../public/images/list terms.svg";
const Privacy = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="md:w-10/12 px-5 md:px-0 mx-auto flex flex-col md:flex-row justify-center items-center py-20 gap-x-14">
        <div className="md:w-2/4">
          <div className="py-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight py-2">
                Privacy Policy and <br />
              <span className="text-[#d434fe]">Terms</span>
            </h2>
            <span className="text-xs text-[#9ba4bb]">Last updated on September 12, 2023</span>
            <p className="text-sm py-3 w-11/12">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="md:w-[560px] h-auto border border-[#d434fe] p-6 md:p-12 text-sm flex flex-col justify-center">
            <p className="pb-4 text-center md:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h4 className="font-semibold text-sm text-[#d434fe] py-1">Licensing Policy</h4>
            <h5 className="font-semibold text-sm">Here are terms of our Standard License:</h5>
            <div className="flex flex-row py-2 gap-x-3">
              <Image src={Check} width={17} height={17} alt="" className="" />
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="flex flex-row py-2 gap-x-3">
              <Image src={Check} width={17} height={17} alt="" className="" />
              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <button className="button w-1/2 md:w-2/6 px-7 py-2 rounded-sm my-10 mx-auto">
              Read More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src={Vector} width={530} height={648} alt="" className="w-11/12 mx-auto mt-9" />
          <Image src={Man} width={559} height={749} alt="" className="w-10/12 mx-auto relative z-10 -mt-[350px] md:-mt-[440px] -ml-3" />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
