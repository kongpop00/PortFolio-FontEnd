
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Skills = () => {



  const imgSkills = [
    "/skills/html.png",
    "/skills/css.png",
    "/skills/js.png",
    "/skills/ts.png",
    "/skills/vite.png",
  ];
  const imgLibery = ["/skills/react.png", "/skills/tailwin.png"];
  gsap.registerPlugin(ScrollTrigger);
 
  


  return (
    <div
      id="skills"
      className=" bg-black text-white px-[40px]  relative pt-[10px] w-[100%]"
    >
      <img
        className="box-1 hidden lg:block z-0  absolute right-0 bottom-[250px] w-[700px]"
        src="/skills/DEV (1).gif"
        alt=""
      />

      <div className="box-1 h-[100vh] max-w-7xl m-[auto] mt-[100px]">
        <span className="text-[22px] font-[500] ">SKILLS</span>
        <h1 className="text-[50px] sm:text-[80px] font-[600] text-[#8a40fa]">
          My Skills
        </h1>
        <div className="box-1 w-[100%]  sm:w-[70%] lg:w-[60%] mt-[20px]">
          <span className="text-[20px] sm:text-[32px] font-[400] sm:font-[200]  relative z-20">
            Currently interested in website development and design well as
            understanding of responsive design.
          </span>
        </div>

        <h1 className="text-[18px] sm:text-[25px] font-[500] mt-[60px]">
          LANGUAES AND TOOLS
        </h1>

        <div className="flex  w-[65%] h-[40px] relative  md:w-[40%] sm:h-[80px] lg:w-[35%] justify-between mt-[20px] gap-2">
          {imgSkills.map((index) => (
            <img src={index} alt="" />
          ))}
        </div>

        <div>
          <h1 className="text-[18px] relative sm:text-[25px] font-[500] mt-[30px]">
            LIBRARIES AND FRAMEWORKS
          </h1>
          <div className="flex  w-[65%] h-[40px] relative  md:w-[40%] sm:h-[80px] lg:w-[35%]  mt-[20px] gap-2">
            {imgLibery.map((index) => (
              <img src={index} alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
