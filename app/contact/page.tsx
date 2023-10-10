import Image from "next/image";
import {ContactForm} from "../components/ContactForm"
import SocialMedia from "../../public/images/Social media.svg"
export default function About() {
  return (
    <div className="bg-[#150E28] text-white h-screen">
      <div className="flex flex-col pt-32 md:flex-row md:w-11/12 mx-auto items-center justify-center ">
        <div className="hidden w-1/2 md:flex flex-col px-16">
          <h2 className="py-6 text-3xl text-[#D434FE] font-bold">Get in touch</h2>
          <p className="text-md py-3">
            Contact <br />
            Information
          </p>
          <p className="text-md py-3">
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>
          <p className="text-md py-3">Call Us : 07067981819</p>
          <p className="text-sm py-3">we are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
         <div className="flex flex-col py-3 gap-y-2 items-start justify-start">
         <p className="text-[#D434FE] font-bold text-sm">Share on</p>
         <Image src={SocialMedia} width={129} height={24} alt="" className="" />
         </div>
        </div>
        <div className="w-1/2">
          <h2>Questions or need assistance? Let us know about it</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
