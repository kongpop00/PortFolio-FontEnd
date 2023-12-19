import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Slide_img_1 from "/folio/1.png";
import Slide_img_2 from "/folio/2.png";
import Slide_img_3 from "/folio/3.png";
import Slide_img_4 from "/folio/4.png";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
//import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Folio = () => {
  return (
    <div className="  w-[100%] h-[100vh] bg-black 0px]  flex flex-col ">
      <div className="flex items-center">
      <h1 className="text-[150px] pl-[150px]  font-[600] text-[#8a40fa] ">My</h1>
      <h1 className="text-[120px]  pl-[20px] font-[600] text-white ">PortFolio</h1>
      </div>
      <div className="container bg-black m-[auto]  relative  ">
        <Swiper
          spaceBetween={100}
          slidesPerView={2.1}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 50,
            modifier: 2,

            slideShadows: true,
          }}
          pagination={{ el: ".swiper-paginatid", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            hideOnClick: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className=" swiper_container  w-[100%] h-[60vh] "
        >
          <SwiperSlide>
            <div>
            
            <img className="rounded-[30px] mt-[20px]  border-4" src={Slide_img_1} alt="" />
            </div>
           
          
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-[30px] border-4  " src={Slide_img_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-[30px] border-4  " src={Slide_img_3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-[30px]  border-4 " src={Slide_img_4} alt="" />
          </SwiperSlide>

         
        </Swiper>
      </div>  
    </div>
  );
};

export default Folio;
