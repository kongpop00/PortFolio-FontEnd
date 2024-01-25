import { useEffect, useLayoutEffect, useState } from "react";

import Close from "./colseNav";
import Hemberger from "./Hemberger";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
const Nav = ({isOpenNav}:any) => {
  const data = ["Hi !", " Hello ", "Welcome"];
  const [textnav, setTextNav] = useState(0);
  const [open, setopen] = useState(false);


  const handleOpen = () => {
    setopen(!open);
  };

  if (textnav < data.length) {
    setTimeout(() => {
      setTextNav(textnav + 1);
    }, 4000);
  } else setTextNav(0);

  const on_of_Hemberger = () => {
    setopen(!open);
  };

  useLayoutEffect(():any=>{
    gsap.from('.open' , {y:-300 })
  
  },[open])


  return (
    <div className= " bg-black w-[100%] h-[100px] flex justify-between fixed z-20 items-center px-[50px] text-white ">
      <div className="font-[500] text-[20px]">
        <Typewriter
          options={{
            strings: [`${data[textnav]}`],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div>
        {open ? (
          <div className=" absolute top-[150px] left-[50%] right-[50%] z-50 text-center  md:hidden">
            <Close on_of_Hemberger={on_of_Hemberger} open={open} />
          </div>
        ) : (
          <div className=" absolute top-[30px] right-[50px] md:hidden ">
            <Hemberger on_of_Hemberger={on_of_Hemberger} open={open}/>
          </div>
        )}
      </div>
        {isOpenNav &&
      <div className="menuNav md:flex w-[15%] justify-between font-[500] text-[20px] mr-[150px] lg:mr-[100px] hidden ">
        {}<NavLink end to={`/`} className={` border-b-4 border-black hover:border-[#8a40fa] "border-b-4 ` }  style={({ isActive }) => {return isActive ? { color: "#8a40fa" , borderBottomWidth:'2px',borderColor:'white' } : {};}}>About</NavLink>
        <NavLink  to={`/skill`} className={`border-b-4 border-black hover:border-[#8a40fa] "border-b-4 ` }  style={({ isActive }) => {return isActive ? {  color: "#8a40fa" , borderBottomWidth:'2px',borderColor:'white'  } : {};}}>Skill</NavLink>
        <NavLink to={`/project`} className={`border-b-4 border-black hover:border-[#8a40fa] "border-b-4 ` }  style={({ isActive }) => {return isActive ? { color: "#8a40fa" , borderBottomWidth:'2px',borderColor:'white'  } : {};}}>Project</NavLink>
       </div>
      }
      {open && (
        <div className="open leading-[60px] w-[100%] pt-[150px] left-4 flex flex-col items-center py-[20px] bg-black text-white text-[30px] z-40 h-[100vh] fixed top-[100px]">
          <button onClick={handleOpen}>
            <NavLink to={"/"}>
              <div className=" hover:text-[#8a40fa] ">ABOUT</div>
            </NavLink>
          </button>
          <button onClick={handleOpen}>
            <NavLink to={"/skill"}>
              <div className=" hover:text-[#8a40fa] ">SKILLS</div>
            </NavLink>
          </button>
          <button onClick={handleOpen}>
            <NavLink to={"/project"}>
              <div className=" hover:text-[#8a40fa] ">PROJECT</div>
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
