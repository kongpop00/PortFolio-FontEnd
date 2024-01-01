import { useState } from "react";
import { HashLink  as Link } from "react-router-hash-link";
import Close from "./colseNav";
import Hemberger from "./Hemberger";
import Typewriter from "typewriter-effect";



const Nav = () => {

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

  const scrollWithOffset = (el:any, offset:any) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });    
  }
  return (
    <div className="bg-black w-[100%] h-[100px] flex justify-between fixed  z-20 items-center px-[50px] text-white">
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
            <Close on_of_Hemberger={on_of_Hemberger} />
          </div>
        ) : (
          <div className=" absolute top-[30px] right-[50px] md:hidden ">
            <Hemberger on_of_Hemberger={on_of_Hemberger} />
          </div>
        )}
      </div>

      <div className="md:flex w-[15%] justify-between font-[500] text-[20px] mr-[150px] lg:mr-[100px] hidden ">
      
          <Link smooth to={'#about'} scroll={el => scrollWithOffset(el,150)} ><div className="border-b-4 border-black hover:border-[#8a40fa] ">About</div></Link>
          <Link smooth to={'#skills'} scroll={el => scrollWithOffset(el, 100)} ><div className="border-b-4 border-black hover:border-[#8a40fa]">Skills</div></Link>
          <Link smooth to={'#project'} scroll={el => scrollWithOffset(el, 100)}><div className="border-b-4 border-black hover:border-[#8a40fa]">My Projec</div></Link>
       
      </div>

      {open && (
        <div className="leading-[60px] w-[100%] pt-[150px] left-4 flex flex-col items-center py-[20px] bg-black text-white text-[30px] z-40 h-[100vh] fixed top-[100px]">
          <button onClick={handleOpen}>
          <Link to={'/'}><div className=" hover:text-[#8a40fa] ">ABOUT</div></Link>
         
          </button>
          <button onClick={handleOpen}>
          <Link to={'/skill'}><div className=" hover:text-[#8a40fa] ">SKILLS</div></Link>
         
          </button>
          <button onClick={handleOpen}>
          <Link to={'/project'}><div className=" hover:text-[#8a40fa] ">PROJECT</div></Link>
         
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
