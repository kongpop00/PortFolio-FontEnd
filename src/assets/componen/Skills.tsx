
const Skills = () => {
  return (
    <div className="bg-black text-white  relative">
        <img  className="absolute right-0 bottom-[250px] w-[700px]" src="/skills/DEV (1).gif" alt="" />
    <div className=" h-[100vh] max-w-7xl m-[auto]">
      <span className="text-[22px] font-[500]">SKILLS</span>
      <h1 className="text-[80px] font-[600] text-[#8a40fa]">My Skills</h1>
      <div className="w-[60%] mt-[20px]">
      <span className="text-[32px] font-[700] w-[10px] ">
        Currently interested in website development and design well as
        understanding of responsive design.
      </span>
      </div>
      <div>
           <h1  className="text-[25px] font-[500] mt-[60px]">LANGUAES AND TOOLS</h1>
           <div className="flex  w-[40%] h-[80px] justify-between mt-[20px]">
                <img src="/skills/html.png" alt="" />
                <img src="/skills/css.png" alt="" />
                <img src="/skills/js.png" alt="" />
                <img src="/skills/ts.png" alt="" />
                <img src="/skills/vite.png" alt="" />
           </div>
      </div>
      <div>
            <h1 className="text-[25px] font-[500] mt-[30px]" >LIBRARIES AND FRAMEWORKS</h1>
            <div className="flex w-[15%] h-[80px] mt-[20px]">
                <img src="/skills/react.png" alt="" />
                <img src="/skills/tailwin.png" alt="" />
              
            </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
