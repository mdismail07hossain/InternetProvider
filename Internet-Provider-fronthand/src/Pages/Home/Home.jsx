import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Popularplace from "../../Component/HomeComponent/Popularplace";
import TodaySellProperty from "../../Component/HomeComponent/TodaySellProperty";
import Review from "../../Component/HomeComponent/Review";
import Imge from "./imges/smart-3720021_1280.jpg";
import Imge1 from "./imges/computer-8045000_1280.jpg";
import Imge2 from "./imges/computer-3596169_1280.jpg";
import Pakeages from "../../Component/HomeComponent/Pakeages";
import { Package } from "lucide-react";

const Home = () => {
  return (
    <div className="">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative h-[100vh]">
            <img src={Imge} alt="" className="zoom-effect w-full h-[100vh]" />
            <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl font-bold">Discover Amazing Services</h2>
              <p className="text-lg mt-2">
                Everytime the network give you the best us.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[100vh]">
            <img src={Imge1} alt="" className="zoom-effect w-full h-[100vh]" />
            <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl font-bold">Experience New Adventures</h2>
              <p className="text-lg mt-2">
                Let’s make your next step with us Net services.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[100vh]">
            <img src={Imge2} alt="" className="zoom-effect w-full h-[100vh]" />
            <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl font-bold">Your Best Net Services</h2>
              <p className="text-lg mt-2">
                Plan your trip with the best travel guides.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <TodaySellProperty></TodaySellProperty>
      </div>
      <div>
        <Pakeages></Pakeages>
      </div>
      <div>
        <Popularplace></Popularplace>
      </div>
      <div>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;
