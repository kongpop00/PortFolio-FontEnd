import items from "./dataFolio.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination } from "swiper/modules";


const Project = () => {
  

  return (
    <div className="py-[20px]">
      {items.map((e) => {
        return (
          <div
            key={e.id}
            className=" project-1 flex flex-col md:flex-row md:p-[20px]  lg:gap-y-[100px] m-[auto] w-[90%] md:w-[95%] xl:w-[100%] h-[500px]  md:h-[350px] mt-[20px] border-[1px] rounded-[10px] items-center lg:overflow-hidden overflow-scroll "
          >
            <div className=" w-[250px]  md:w-[30%] mt-[20px] md:mt-0 ">
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCube, Pagination]}
                className="mySwiper w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[250px]  lg:w-[350px] lg:h-[300px] bg-cover rounded-3xl "
              >
                <SwiperSlide>
                  <img
                    className="w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[250px] lg:w-[350px] lg:h-[300px] rounded-3xl"
                    src={e.img1}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[250px] lg:w-[350px] lg:h-[300px] rounded-3xl"
                    src={e.img2}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[250px] lg:w-[350px] lg:h-[300px] rounded-3xl"
                    src={e.img3}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className=" w-[90%] lg:w-[60%] py-[20px] md:ml-[50px] lg:p-[40px] flex flex-col h-[100%] text-white">
              <h1 className="  text-[30px] sm:text-[40px] md:text-[30px] font-[600]">{e.name}</h1>
              <h2 className="mt-[20px] md:text-[18px] text-[18px] sm:text-[20px]">{e.data}</h2>
              <div className="deploy">
                deploy: <a href="">{e.deploy}</a>
              </div>
              <div className="github">
                deploy: <a href="">{e.github}</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
