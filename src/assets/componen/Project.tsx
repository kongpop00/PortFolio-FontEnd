import items from "./dataFolio.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCube, Pagination } from "swiper/modules";

const Project = () => {
  return (
    <div className="">
      {items.map((e) => {
        return (
          <div
            key={e.id}
            className="box flex gap-y-[100px] m-[auto] w-[100%]  h-[350px] mt-[50px] border-[1px] rounded-[10px] items-center "
          >
            <div className="w-[30%] ">
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
                className="mySwiper w-[350px] h-[300px] bg-cover rounded-3xl"
              >
                <SwiperSlide>
                  <img
                    className="w-[350px] h-[300px] rounded-3xl"
                    src={e.img1}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-[350px] h-[300px] rounded-3xl"
                    src={e.img2}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="w-[350px] h-[300px] rounded-3xl"
                    src={e.img3}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className=" w-[60%] p-[40px] flex flex-col h-[100%] text-white">
              <h1 className="text-[40px] font-[600]">{e.name}</h1>
              <h2 className="mt-[20px] text-[20px]">{e.data}</h2>
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
