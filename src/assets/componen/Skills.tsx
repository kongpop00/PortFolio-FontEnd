
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
const Skills = () => {



  const imgSkills = [
    "/skills/html.png",
    "/skills/css.png",
    "/skills/js.png",
    "/skills/ts.png",
    "/skills/vite.png",
  ];
  const imgLibery = ["/skills/react.png", "/skills/tailwin.png"];

 
  

  useLayoutEffect(():any=>{
    gsap.from('.menuNav' , {opacity:0 , direction:1  ,delay:1, stagger:2})
      gsap.from(".box1", { translateY: 360, duration: 1});
      gsap.from('.box2' , {opacity:0  ,delay:1 , duration:1.4 })
     
  },[])



  
  

  return (
    <div
      id='section-skill' 
      className=" bg-black text-white px-[40px] mt-[100px]  fixed pt-[10px] w-[100%]"
    >
      <img
        className="hidden lg:block z-0  absolute right-0 bottom-[250px] w-[700px]"
        src="/skills/DEV (1).gif"
        alt=""
      />

      <div className=" h-[100vh] max-w-7xl m-[auto] mt-[100px]">
        <h1 className=" box1 text-[22px] font-[500] ">SKILLS</h1>
        <h1 className="box1 text-[50px] sm:text-[80px] font-[600] text-[#8a40fa]">
          My Skills
        </h1>
        <div className="box1 w-[100%]  sm:w-[70%] lg:w-[60%] mt-[20px]">
          <span className="text-[20px] sm:text-[32px] font-[500] sm:font-[500]  relative z-20">
            Currently interested in website development and design well as
            understanding of responsive design.
          </span>
        </div>

        <h1 className="box1 text-[18px] sm:text-[25px] font-[500] mt-[60px]">
          LANGUAES AND TOOLS
        </h1>

        <div className=" box2 flex  w-[65%] h-[40px] relative  md:w-[40%] sm:h-[80px] lg:w-[35%] justify-between mt-[20px] gap-2">
          {imgSkills.map((index) => (
            <img className="" src={index} alt="" />
          ))}
        </div>

        <div>
          <h1 className="box1 text-[18px] relative sm:text-[25px] font-[500] mt-[30px]">
            LIBRARIES AND FRAMEWORKS
          </h1>
          <div className="box2 flex  w-[65%] h-[40px] relative  md:w-[40%] sm:h-[80px] lg:w-[35%]  mt-[20px] gap-2">
            {imgLibery.map((index) => (
              <img className="" src={index} alt="" />
            ))}
          </div>
        </div>
        <button className="box2 mt-[40px] border-[1px] p-[8px] px-[10px] border-[#8a40fa] text-[22px] rounded-xl hover:border-[#ff64f2]  z-50 mx-[10px]"><NavLink to='/project'>N E X T</NavLink></button>
      </div>
      
    </div>
  );
};

export default Skills;
