import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import Typewriter from "typewriter-effect";
import "../componen/header.css";
const Header = ({ setIsOpenNav }: any) => {
  const [data, setData] = useState<string>("0");
  const numData = parseInt(data);

  useLayoutEffect((): any => {
    gsap.from(".menuNav", { opacity: 0, direction: 2, delay: 0.5, stagger: 2 });
    gsap.from(".step1", { opacity: 0, duration: 1, delay: 0.5, y: 10 });
    gsap.to(".stap2", { delay: 2, opacity: 1, duration: 1, ease: "elastic" });
    gsap.to(".stap3", {
      delay: 2,
      duration: 1,
      ease: "elastic",
      translateY: 20,
    });
  }, []);

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

  const styleBtn =
    "sm:mt-[20px] border-[1px] p-[8px] px-[10px] border-[#8a40fa] text-[22px] hover:border-[#ff64f2] rounded-xl h-[40px] W-[120px] text-[12px] md:w-[150px] md:h-[60px] md:text-[22px] z-50 mx-[10px]";
  return (
    <div id="section-about" className="bg-black fixed w-full p-[20px]  ">
      <div className="w-[100%] h-[100vh] grid grid-cols-1  max-w-7xl m-[auto]   items-center  text-center">
        <div className="flex flex-col mt-[50px] md:mt-0  ">
          {numData == 10 ? (
            <div>
              <div className="   mt-[10px] md:mt-[-10px] lg:mt-[-50px] xl:mt-[90px]">
                <div className=" borderImg w-[200px] relative sm:w-[350px] sm:h-[350px] bg-[#a09f9f00] m-[auto]   ">
                  <img
                    className="w-[350px]  relative  h-[350] z-30"
                    src="/profile.png"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="step1 leading-[80px] text-white relative ">
              <h1 className=" text-[50px] sm:text-[100px] font-[600]">
                WELCOME
              </h1>
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
              className="step1 w-full range range-[white] border-2 h-2 md:h-3 lg:h-4"
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
              <h1 className="text-[#8a40fa] text-[19px] md:text-[30px]">
                <label className="px-[5px]">Hi,</label>
                <label className="px-[5px]">my</label>
                <label className="px-[5px]">name</label>
                <label className="px-[5px]">is</label>
              </h1>

              <h1 className="text-[22px] md:text-[60px]  ">
                <div className="text-center m-[auto] mt-[20px] flex justify-center from-neutral-400 ">
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
                    <a href="mailto:kongpop.nu@ku.th?subject = Feedback&body = Message" >
                      <button className="p-[10px]  hover:text-[#8a40fa]">
                        {" "}
                        <EmailOutlinedIcon />
                      </button>
                    </a>
                    <a href="https://github.com/kongpop00 " target="_blank">
                    <button className="p-[10px]  hover:text-[#8a40fa]">
                      <GitHubIcon />
                    </button>
                    
                    <a href="https://www.instagram.com/konggg__/" target="_blank"></a>
                    <button className="p-[10px]  hover:text-[#8a40fa]">
                      <InstagramIcon />
                    </button>
                    </a>
                  </div>
                 
                <a href="https://drive.google.com/file/d/1Y_wfpqirL32McRXvMqk1Wv8PIWQcK6f0/view?usp=sharing" target="_blank" > <button className={`${styleBtn}`} >Dowload CV</button></a>
                  <button className={`${styleBtn}`}>
                    <button onClick={() => setIsOpenNav(true)}>
                      <NavLink to="skill"> Get Started</NavLink>
                    </button>
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
