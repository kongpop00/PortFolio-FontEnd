

import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import gsap from "gsap";
import Project from './Project'
import { useLayoutEffect } from "react";

const PortFolio = () => {
 
  useLayoutEffect(():any=>{
  
    gsap.from(".step1", { opacity:0 , duration:1 ,delay:0.5 , y:10});
    gsap.from('.menuNav' , {opacity:0 , direction:1  ,delay:1, stagger:2})
    gsap.from(".project-1", {  duration: 1.5 ,y:700});
   
   
},[])


 
  return (
    <div id= 'section-project' className=' h-[100%] bg-black '>
        <div className="step1 flex items-center justify-start max-w-7xl   p-[20px] m-[auto] ">
        <h1 className="text-[50px] sm:text-[80px]  font-[600] text-[#8a40fa] mt-[140px] ">
          My
        </h1>
        <h1 className="text-[50px]  sm:text-[72px]  pl-[20px] font-[600] text-white mt-[140px]">
          Projects
        </h1>
      </div>
        <div className='container max-w-7xl  m-[auto] '>
          <Project/>
        </div>

    </div>
  )
}

export default PortFolio