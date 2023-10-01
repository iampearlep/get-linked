import Image from "next/image";
import getLinked from "../../public/images/getlinked.svg";

const Footer = () => {
  return (
    <div className="bg-[#150E28] text-white">
      <div className="w-10/12 pt-14 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row gap-x-8 py-8 gap-y-10">
          <div className="md:w-2/3 text-xs flex flex-col gap-y-1">
            <Image src={getLinked} width={130} height={200} alt="" />
            <p className="pb-6">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <p>
              Terms of Use <span className="text-[#d434fe]">|</span> Privacy Policy
            </p>
          </div>
          <div className="md:w-3/12 text-xs flex flex-col gap-y-1">
            <h3 className="text-sm font-semibold text-[#d434fe]">Useful Links</h3>
            <p>Overview</p>
            <p>Timeline</p>
            <p>FAQs</p>
            <p>Register</p>
            <p>Follow us</p>
          </div>
          <div className="md:w-3/12 text-xs flex flex-col gap-y-1">
            <h3 className="text-sm font-semibold text-[#d434fe] ">Contact Us</h3>
            <p>+234 6707653444</p>
            <p>27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
        <div className="text-xs py-2">
          <p>All rights reserved. ©alwayspearlxx getlinked Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
