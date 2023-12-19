import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  const [data, setData] = useState<string>("0");
  const numData = parseInt(data);
 
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

  useEffect(() => {
    console.log("data", numData);
  }, [data]);
  return (
    <div className="bg-black relative ">
    <img src="public/vite.svg" alt="" />
    <div className="w-[100%] h-[100vh] grid grid-cols-1 md:grid-cols-1 max-w-7xl m-[auto]  items-center  text-center">

      <div className="flex flex-col mt-[100px]  ">
        {numData == 10 ? (
          <div>
            <div className="avatar mb-[40px]">
              <div className="w-[300px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="public/img (2).png" />
              </div>
            </div>
          </div>
        ) : (
          <div className="leading-[80px] text-white relative ">
            <h1 className="text-[100px] font-[600]">WELCOME</h1>
            <h1 className="text-[50px] font-[600] px-[10px]">
              to my portfolio
            </h1>
            <div className="text-[30px] px-[10px] text-[#8a40fa]">
              <h1>slide me</h1>
            </div>
            <div
              style={{ backgroundColor: colorCahnge2 }}
              className="absolute bg-white top-0 w-full h-full"
            ></div>
          </div>
        )}

        <div className="relative  w-[300px] m-[auto]">
          <input
            className="w-full range range-[white] border-2 h-4"
            type="range"
            min="0"
            max="10"
            step={2}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className=" w-full ">
          <div className="w-[50%] h-[60%] absolute left-0 z-30"></div>
          <div className="text-white   text-[26px] font-[500]  relative w-full mt-[20px]">
            <div
              style={{ backgroundColor: colorCahnge }}
              className="absolute w-full h-full z-20"
            ></div>
            <h1 className="text-[#8a40fa]">
              <label className="px-[5px]">Hi,</label>
              <label className="px-[5px]">my</label>
              <label className="px-[5px]">name</label>
              <label className="px-[5px]">is</label>
            </h1>

            <h1 className="text-[72px]  ">
              <div className="text-center m-[auto] flex justify-center">
                <h1 className="px-[20px]"> Kongpop Nualsaard</h1>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 via-[#8a40fa] to-[#8a40fa] h-2 rounded-lg w-[50%] m-[auto]"></div>
            </h1>
            {/**Typewriter */}
            <div className="mt-[20px] font-[400] text-[22px] text-slate-400 ">
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
            <div className="flex justify-center w-[100%] ">
              <div className="p-[10px]">
                <EmailOutlinedIcon />
              </div>
              <div className="p-[10px]">
                <GitHubIcon />
              </div>
              <div className="p-[10px]">
                <InstagramIcon />
              </div>
            </div>
            <button className="mt-[20px] border-[1px] p-[5px] px-[10px] border-[#8a40fa] text-[22px] rounded-xl">
              Dowload CV
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center"></div>
    </div>
    </div>
  );
};

export default Header;
