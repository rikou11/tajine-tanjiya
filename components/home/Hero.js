import { motion } from "framer-motion";

import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Testmonials";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const images = [
  { img: "/plate/1.png", demention: 500 },
  { img: "/plate/2.png", demention: 500 },

  { img: "/plate/3.png", demention: 500 },

  { img: "/plate/4.png", demention: 500 },
  { img: "/plate/5.png", demention: 500 },
];
const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className="px-2 py-3 mx-auto flex justify-center  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-4  ">
          <div className="grid grid-cols-1 justify-center gap-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 max-w-2xl  items-center  ">
              <motion.h1
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration:  0.8 ,ease: "easeOut"}}
                className=" text-5xl lg:text-7xl font-bold mali "
              >
                Taste Now Our Special{" "}
                <span className="text-green-700 ">Marocain Dishes</span>{" "}
              </motion.h1>

              <div className="flex  mt-8">
                <button
              
                  className="  lg:text-xl shadow-lg shadow-[#D6FDE9] py-5 px-12 text-yellow-400 rounded-[60px]  bg-green-700 hover:bg-green-800  transition-all duration-300"
                >
                  View Menu
                </button>
              </div>
            </div>
            {/* plat */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: [0, 100, 0] }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <Slider {...settings}>
                {images.map((i) => {
                  return (
                    <div key={i}>
                      <motion.div className={`  flex justify-center`}>
                        <Image
                          alt="plat"
                          className={`${styles.shadow} mt-10 lg:mt-0 `}
                          src={i.img}
                          width={i.demention}
                          height={i.demention}
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </Slider>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
