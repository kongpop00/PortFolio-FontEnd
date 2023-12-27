
const Skills = () => {
  return (
    <div id="skills" className="bg-black text-white px-[40px] relative  pt-[10px] m-[auto]">
        <img  className="hidden lg:block z-0 absolute right-0 bottom-[250px] w-[700px]" src="/skills/DEV (1).gif" alt="" />
    <div className=" h-[100vh] max-w-7xl m-[auto]">
      <span className="text-[22px] font-[500] ">SKILLS</span>
      <h1 className="text-[50px] sm:text-[80px] font-[600] text-[#8a40fa]">My Skills</h1>
      <div className="w-[100%]  sm:w-[70%] lg:w-[60%] mt-[20px]">
      <span className="text-[20px] sm:text-[32px] font-[400] sm:font-[600]  relative z-20">
        Currently interested in website development and design well as
        understanding of responsive design.
      </span>
      </div>
      <div>
           <h1  className="text-[18px] sm:text-[25px] font-[500] mt-[60px]">LANGUAES AND TOOLS</h1>
           <div className="flex  w-[15%] h-[40px] sm:w-[40%] sm:h-[80px] justify-between mt-[20px] gap-2">
                <img src="/skills/html.png" alt="" />
                <img src="/skills/css.png" alt="" />
                <img src="/skills/js.png" alt="" />
                <img src="/skills/ts.png" alt="" />
                <img src="/skills/vite.png" alt="" />
           </div>
      </div>
      <div>
            <h1 className="text-[18px] sm:text-[25px] font-[500] mt-[30px]" >LIBRARIES AND FRAMEWORKS</h1>
            <div className="flex  w-[15%] h-[40px] sm:w-[40%] sm:h-[80px] mt-[20px] gap-2">
                <img src="/skills/react.png" alt="" />
                <img src="/skills/tailwin.png" alt="" />
              
            </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
