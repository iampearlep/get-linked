import Image from "next/image";
import Ellipse from "../public/images/Ellipse 1.svg";
import Judges from "../public/images/judges.svg";
import Star from "../public/images/star pu.svg";
import Star1 from "../public/images/star.svg";

const Attributes = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="md:w-10/12 px-5 flex flex-col md:flex-row mx-auto py-20">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
        <Image src={Star} width={30} height={36} alt="" className="w-4 md:w-8 mr-auto ml-16 relative -mt-10" />
          <di className="py-5">
          <Image src={Ellipse} width={134} height={134} alt="" className="hidden md:block" />
          <Image src={Judges} width={710} height={587} alt="" className="relative z-20 md:-mt-20 md:-ml-20" />
          </di>
          <Image src={Star1} width={21} height={25} alt="" className="ml-auto mr-20" />
        </div>
        <div className="md:w-1/2 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight py-8">
            Judging Criteria <br />
            <span className="text-[#d434fe]">Key attributes</span>
          </h2>
        <div className="flex flex-col gap-y-6 text-lg md:text-md">
        <p>
            <span className="text-[#ff26b9] font-semibold">Innovation and Creativity</span>: Evaluate the uniqueness and creativity of
            the solution. Consider whether it addresses a real-world problem in
            a novel way or introduces innovative features.
          </p>
          <p>
            <span className="text-[#ff26b9] font-semibold">Functionality:</span> Assess how well the solution works. Does it perform
            its intended functions effectively and without major issues? Judges
            would consider the completeness and robustness of the solution.
          </p>
          <p>
           <span className="text-[#ff26b9] font-semibold">Impact and Relevance:</span> Determine the potential impact of the solution
            in the real world. Does it address a significant problem, and is it
            relevant to the target audience? Judges would assess the potential
            social, economic, or environmental benefits.
          </p>
          <p>
            <span className="text-[#ff26b9] font-semibold">Technical Complexity:</span> Evaluate the technical sophistication of the
            solution. Judges would consider the complexity of the code, the use
            of advanced technologies or algorithms, and the scalability of the
            solution.
          </p>
          <p>
            <span className="text-[#ff26b9] font-semibold">Adherence to Hackathon Rules:</span> Judges will Ensure that the team
            adhered to the rules and guidelines of the hackathon, including
            deadlines, use of specific technologies or APIs, and any other
            competition-specific requirements.
          </p>
        </div>
          <button className="button px-7 py-2 rounded-sm my-8 mx-auto md:mx-0">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
