import { useState } from "react";
const Nav = () => {
  const data = ["Hi !", " Hello ", "Welcome"];
  const [textnav, setTextNav] = useState(0);
const [open  ,setopen]=useState(false)

const handleOpen =()=>{
    setopen(!open)
}
  if (textnav < data.length) {
    setTimeout(() => {
      setTextNav(textnav + 1);
    }, 4000);
  } else setTextNav(0);

  return (
    <div className="w-full  fixed  z-50 ">
      <div className="flex p-[30px] justify-between w-full bg-black z-50 fixed">
        <div className="th text-center text-[22px] font-[600] text-white item-center animate-bounce">
          {data[textnav]}
        </div>
        <div >
          <label className="btn btn-circle swap swap-rotate bg-black text-white border-none ">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={handleOpen} />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
      {/**menu */}
        {open && (

              <div className="w-full  flex flex-col items-center py-[20px] text-white text-[30px] z-40 h-[100vh] bg-black absolute top-[100px]">
              <a>Home</a>
              <a>Folio</a>
              <a>About</a>
              <a>contact</a>
      
            </div>
        )}
    
    </div>
  );
};

export default Nav;
