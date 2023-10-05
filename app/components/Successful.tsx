import React from 'react'
import Image from "next/image";
import Confirmation from "../../public/images/Confirmation.svg"
const Successful = () => {
  return (
    <div>
         <Image src={Confirmation} width={699} height={664} alt="" className="" />
    </div>
  )
}

export default Successful