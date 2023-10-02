import Image from "next/image";
import ThumbsUp from "../../public/images/thumbs-up.svg"
import { RegisterForm } from "../components/RegisterForm";
export default function Register() {
    return(
      <div className="bg-[#150E28] text-white">
        <div className="flex flex-row w-11/12 mx-auto items-center justify-center">
          <div>
          <Image src={ThumbsUp} width={717} height={717} alt="" className="" />
          </div>
          <div>
            <h2>Register</h2>
            <p>Be part of this movement</p>
            <h3>create your account</h3>
            <RegisterForm />
          </div>
        </div>
      </div>
    )
  }