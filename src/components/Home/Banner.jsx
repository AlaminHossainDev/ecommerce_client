import 'animate.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className=''>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div
            className="hero min-h-[650px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/w6WprMd/Baseus-2024-Web-Banner-1920x400-1.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInTopRight">Whispers of Wonder</h1>
                <p className="mb-5 animate__animated animate__slideInUp">
                Journey through pages that echo with magic, mystery, and the promise of adventure, where every word is a whisper of wonder waiting to be heard.
                </p>
                <button className="btn btn-primary animate__animated animate__slideInUp">View Product</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-[650px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/MS27KMy/Anker-Web-Banner-1920x400-1.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInTopRight">Chronicles of Curiosity </h1>
                <p className="mb-5 animate__animated animate__slideInUp">
                Explore the uncharted territories of imagination and curiosity as you unravel tales that defy expectation, leaving you spellbound and craving more.
                </p>
                <button className="btn btn-primary animate__animated animate__slideInUp">View Product</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-[650px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Ntfp8zv/soundpeats-web.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInTopRight">Realm Rendezvous</h1>
                <p className="mb-5 animate__animated animate__slideInUp">
                Lose yourself in realms where reality and fantasy collide, where dreams take flight and the ordinary transforms into the extraordinary with every turn of the page.
                </p>
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider  4*/}
        <SwiperSlide>
          <div
            className="hero min-h-[650px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/w6WprMd/Baseus-2024-Web-Banner-1920x400-1.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInTopRight">Legends in Limelight</h1>
                <p className="mb-5 animate__animated animate__slideInUp">
                Step into the limelight of legendary tales, where heroes rise, villains fall, and the line between myth and reality blurs in a symphony of epic proportions.
                </p>
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider  5*/}
        <SwiperSlide>
          <div
            className="hero min-h-[650px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/MS27KMy/Anker-Web-Banner-1920x400-1.png)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInTopRight">Charcoal Sketching: Figure Charcoal Sketch</h1>
                <p className="mb-5 animate__animated animate__slideInUp">
                Unleash the expressive power of charcoal to create dynamic figure sketches brimming with energy and movement. Explore the contrast between light and shadow to sculpt forms with bold strokes and delicate nuances. Dive into the world of charcoal drawing to capture the essence of figures with striking clarity and dramatic flair.
                </p>
                <button className="btn btn-primary">View Product</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
