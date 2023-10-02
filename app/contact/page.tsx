import Image from "next/image";
import {ContactForm} from "../components/ContactForm"
import SocialMedia from "../../public/images/Social media.svg"
export default function About() {
  return (
    <div className="bg-[#150E28] text-white h-">
      <div className="flex flex-col h-screen md:flex-row md:w-11/12 mx-auto items-center justify-center ">
        <div className="hidden w-1/2 md:flex flex-col px-16">
          <h2>Get in touch</h2>
          <p>
            Contact <br />
            Information
          </p>
          <p>
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
         <div className="flex flex-row gap-x-3 items-center">
         <p>Share on</p>
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
