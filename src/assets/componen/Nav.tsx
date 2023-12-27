import {  useState } from "react";
import { HashLink } from "react-router-hash-link";
import Close from "./colseNav";
import Hemberger from "./Hemberger";
import Typewriter from "typewriter-effect";
const Nav = () => {
  const data = ["Hi !", " Hello ", "Welcome"];
  const [textnav, setTextNav] = useState(0);
  const [open, setopen] = useState(false);
  const scrollWithOffsetNav = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -200;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  const scrollWithOffsetproject = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

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

  return (
    <div className="bg-black w-[100%] h-[100px] flex justify-between fixed z-30 items-center px-[50px] text-white">
      <div className="font-[500] text-[20px]">
      <Typewriter
                  options={{
                    strings: [
                      `${data[textnav]}`
                    ],
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

      <div className="md:flex w-[20%] justify-between font-[500] text-[20px] mr-[150px] lg:mr-[100px] hidden ">
        <HashLink
          className="hover:border-b-2 border-[#8a40fa] p-2"
          smooth
          to={"#about"}
          scroll={(el) => scrollWithOffsetNav(el)}
        >
          {" "}
          About
        </HashLink>
        <HashLink
          className="hover:border-b-2 border-[#8a40fa] p-2"
          smooth
          to={"#skills"}
          scroll={(el) => scrollWithOffsetNav(el)}
        >
          {" "}
          Skills
        </HashLink>
        <HashLink
          className="hover:border-b-2 border-[#8a40fa] p-2"
          smooth
          to={"#project"}
          scroll={(el) => scrollWithOffsetproject(el)}
        >
          {" "}
          Projects
        </HashLink>
        <HashLink
          className="hover:border-b-2 border-[#8a40fa] p-2"
          smooth
          to={"#skills"}
          scroll={(el) => scrollWithOffsetNav(el)}
        >
          {" "}
          Contact
        </HashLink>
      </div>

      {open && (
        <div className="leading-[60px] w-[100%] pt-[150px] left-4 flex flex-col items-center py-[20px] bg-black text-white text-[30px] z-40 h-[100vh] fixed top-[100px]">
          <button onClick={handleOpen}><HashLink
              smooth
              to={"#about"}
              scroll={(el) => scrollWithOffsetNav(el)}
              className="hover:text-[#8a40fa]"
            >
             
             ABOUT
            </HashLink>
          </button>
          <button onClick={handleOpen}><HashLink
              smooth
              to={"#skills"}
              scroll={(el) => scrollWithOffsetNav(el)}
              className="hover:text-[#8a40fa]"
            >
             
              SKILL
            </HashLink>
          </button>
          <button onClick={handleOpen}><HashLink
              smooth
              to={"#project"}
              scroll={(el) => scrollWithOffsetNav(el)}
              className="hover:text-[#8a40fa]"
            >
             
            PROJECT
            </HashLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
