

import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Project from './Project'
const PortFolio = () => {
  return (
    <div id="project" className=' h-[100%] bg-black'>
        <div className="flex items-center justify-start max-w-7xl p-[20px] m-[auto] ">
        <h1 className="text-[50px] sm:text-[80px]  font-[600] text-[#8a40fa] ">
          My
        </h1>
        <h1 className="text-[50px]  sm:text-[72px]  pl-[20px] font-[600] text-white ">
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