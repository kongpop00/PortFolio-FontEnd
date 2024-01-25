import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import {  useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import Typewriter from "typewriter-effect";
import '../componen/header.css'
const Header = ({setIsOpenNav}:any) => {
  const [data, setData] = useState<string>("0");
  const numData = parseInt(data);

  useLayoutEffect(():any=>{

    gsap.from('.menuNav' , {opacity:0 , direction:2  ,delay:0.5, stagger:2})
    gsap.from(".step1", { opacity:0 , duration:1 ,delay:0.5 , y:10});
    gsap.to('.stap2' , {delay:2 , opacity:1, duration: 1 ,ease:'elastic'})
    gsap.to('.stap3' , {delay:2 , duration: 1 ,ease:'elastic', translateY:20})
},[])





 



  let colorCahnge = "";
  let colorCahnge2 = "";

  if (numData === 0) {
    colorCahnge = "black";
  } else if (numData === 2) {
    colorCahnge = "rgba(0, 0, 0, 0.753)";
  } else if (numData === 4) {
    colorCahnge = "rgba(0, 0, 0, 0.589)";
  } else if (numData === 6) {
    colorCahnge = "rgba(0, 0, 0, 0.315)";
  } else if (numData === 8) {
    colorCahnge = "rgba(0, 0, 0, 0.137)";
  } else if (numData === 10) {
    colorCahnge = "rgba(0, 0, 0, 0)";
  }

  if (numData === 0) {
    colorCahnge2 = "rgba(0, 0, 0, 0)";
  } else if (numData === 2) {
    colorCahnge2 = "rgba(0, 0, 0, 0.137)";
  } else if (numData === 4) {
    colorCahnge2 = "rgba(0, 0, 0, 0.589)";
  } else if (numData === 6) {
    colorCahnge2 = "rgba(0, 0, 0, 0.589)";
  } else if (numData === 8) {
    colorCahnge2 = "rgba(0, 0, 0, 0.753)";
  } else if (numData === 10) {
    colorCahnge2 = "black";
  }

 
  return (
    <div id='section-about' className="bg-black fixed w-full p-[20px]  ">
      <div className="w-[100%] h-[100vh] grid grid-cols-1  max-w-7xl m-[auto]  items-center  text-center">
        <div className="flex flex-col mt-[100px]  ">
          {numData == 10 ? (
            <div>
              <div className=" mb-[40px]   mt-[29px] ">
                <div className=" borderImg w-[200px] relative sm:w-[350px] sm:h-[350px] bg-white m-[auto]  bg-gradient-to-r from-[#471facd7] via-[#9a12a4d3] to-[#d8079dd5]  ">
                  <img className="w-[350px]  backdrop-brightness-125 relative  h-[350] z-30" src="/kongImg.png.png" />
                </div>
              </div>
            </div>
          ) : (
            <div className= "step1 leading-[80px] text-white relative ">
              <h1 className=" text-[50px] sm:text-[100px] font-[600]">WELCOME</h1>
              <h1 className="box1 text-[30px] sm:text-[50px] font-[600] px-[10px]">
                to my portfolio
              </h1>
              <div className="text-[20px] sm:text-[30px] px-[10px] text-[#8a40fa]">
                <h1>slide me</h1>
              </div>
              <div
                style={{ backgroundColor: colorCahnge2 }}
                className="absolute bg-white top-0 w-full h-full"
              ></div>
            </div>
          )}

          <div className="relative w-[250px] sm:w-[300px] m-[auto]">
            <input
              className="step1 w-full range range-[white] border-2 h-4"
              type="range"
              min="0"
              max="10"
              step={2}
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className=" w-full ">
            <div className="text-white   text-[26px] font-[500]  relative w-full mt-[20px]">
              <div
                style={{ backgroundColor: colorCahnge }}
                className="absolute w-full h-full z-10 "
              ></div>
              <h1 className="text-[#8a40fa]">
                <label className="px-[5px]">Hi,</label>
                <label className="px-[5px]">my</label>
                <label className="px-[5px]">name</label>
                <label className="px-[5px]">is</label>
              </h1>

              <h1 className="text-[50px] sm:text-[72px]  ">
                <div className="text-center m-[auto] flex justify-center">
                  <h1 className="px-[20px]"> Kongpop Nualsaard</h1>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 via-[#8a40fa] to-[#8a40fa] h-1 sm:h-2 rounded-lg  w-[70%] sm:w-[50%] m-[auto]"></div>
              </h1>
              {/**Typewriter */}
              <div className="mt-[20px] font-[400]  text-[14px] sm:text-[22px] text-slate-400 ">
                <Typewriter
                  options={{
                    strings: [
                      "Entry level web developer in front-end development",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {/** icon */}
              {numData == 10 && (
                <div className="z-20 relative">
                  <div className="flex justify-center w-[100%]  ">
                    <button className="p-[10px]  hover:text-[#8a40fa]">
                      <EmailOutlinedIcon  />
                    </button>
                    <button className="p-[10px]  hover:text-[#8a40fa]">
                      <GitHubIcon />
                    </button>
                    <button className="p-[10px]  hover:text-[#8a40fa]">
                      <InstagramIcon />
                    </button>
                  </div>
                  <button className="mt-[20px] border-[1px] p-[8px] px-[10px] border-[#8a40fa] text-[22px] hover:border-[#ff64f2] rounded-xl  z-50 mx-[10px] ">
                   Dowload CV
                  </button>
                  <button className="mt-[20px] border-[1px] p-[8px] px-[10px] border-[#8a40fa] text-[22px] rounded-xl hover:border-[#ff64f2]  z-50 mx-[10px] ">
                  <button onClick={()=>setIsOpenNav(true)}><NavLink to='skill'> Get Started</NavLink></button>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center"></div>
      </div>
    </div>
  );
};

export default Header;
