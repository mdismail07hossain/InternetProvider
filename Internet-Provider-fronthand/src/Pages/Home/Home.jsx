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
import Avat from "./imges/laptop-person.webp";
import Avat1 from "./imges/inner-slide-img.webp";
import Avat2 from "./imges/forth-slide-inner.webp";
import Paymentimg from "./imges/payment-methods2.webp";
import Contactus from "./imges/brands-logo.webp";
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
            <div className="absolute inset-0 flex mx-40 items-center justify-between text-white">
              <div className="flex flex-col items-start justify-center">
              <div>
              <h2 className="text-4xl font-bold ml-5">Discover Amazing Services</h2>
              <p className="text-lg ml-5">
                Everytime the network give you the best us.
              </p>
              </div>
              <div>
                <img className="contactus" src={Contactus} alt="" />
              </div>
              </div>
              <div className="flex justify-end zoom-effect">
                  <img src={Avat2} alt="" srcset="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[100vh]">
            <img src={Imge1} alt="" className="zoom-effect w-full h-[100vh]" />
            <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
            <div>
            <div className="absolute inset-0 flex mx-40  items-center justify-between text-white">
              <div className=" flex flex-col items-start justify-center">
                <div>
                <h2 className="text-4xl font-bold ml-5">Experience New Adventures</h2>
              <p className="text-lg ml-5">
                Let’s make your next step with us Net services.
              </p>
                </div>
              <div className="">
                <img className="paymentimg" src={Paymentimg} alt="" srcset="" />
              </div>
              </div>
              <div className="flex justify-end zoom-effect">
                  <img src={Avat} alt="" srcset="" />
              </div>

            </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[100vh]">
            <img src={Imge2} alt="" className="zoom-effect w-full h-[100vh]" />
            <div className="absolute inset-0 bg-black opacity-60 h-[100vh]"></div>
            <div className="absolute inset-0 flex mx-40 items-center justify-between text-white">
              <div className="flex flex-col items-start justify-center">
                <div>
                <h2 className="text-4xl ml-5 font-bold">Your Best Net Services</h2>
              <p className="text-lg ml-5">
                Plan your trip with the best travel guides.
              </p>
                </div>
              <div className="">
                <img className="paymentimg" src={Paymentimg} alt="" srcset="" />
              </div>
              </div>
              <div className="flex justify-end zoom-effect">
                  <img src={Avat1} alt="" srcset="" />
              </div>
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
