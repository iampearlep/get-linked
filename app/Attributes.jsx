import Image from "next/image";
import Judges from "../public/images/judges.svg";
import Star from "../public/images/star pu.svg";
import Star1 from "../public/images/star.svg";
const Attributes = () => {
  return (
    <div className="bg-[#150E28] text-white border-b border-[#3d364d]">
      <div className="w-10/12 flex flex-row mx-auto py-28">
        <div className="w-1/2">
        <Image src={Star} width={30} height={36} alt="" className="w-4 md:w-8" />
          <Image src={Judges} width={710} height={587} alt="" className="" />
          <Image src={Star1} width={21} height={25} alt="" className="relative z-50" />
        </div>
        <div className="w-1/2">
          <h2>
            Judging Criteria <br />
            <span>Key attributes</span>
          </h2>
          <p>
            Innovation and Creativity: Evaluate the uniqueness and creativity of
            the solution. Consider whether it addresses a real-world problem in
            a novel way or introduces innovative features.
          </p>
          <p>
            Functionality: Assess how well the solution works. Does it perform
            its intended functions effectively and without major issues? Judges
            would consider the completeness and robustness of the solution.
          </p>
          <p>
            Impact and Relevance: Determine the potential impact of the solution
            in the real world. Does it address a significant problem, and is it
            relevant to the target audience? Judges would assess the potential
            social, economic, or environmental benefits.
          </p>
          <p>
            Technical Complexity: Evaluate the technical sophistication of the
            solution. Judges would consider the complexity of the code, the use
            of advanced technologies or algorithms, and the scalability of the
            solution.
          </p>
          <p>
            Adherence to Hackathon Rules: Judges will Ensure that the team
            adhered to the rules and guidelines of the hackathon, including
            deadlines, use of specific technologies or APIs, and any other
            competition-specific requirements.
          </p>
          <button className="button px-7 py-2 rounded-sm my-3 mx-auto md:mx-0">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
