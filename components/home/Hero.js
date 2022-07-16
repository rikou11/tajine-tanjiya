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
  autoplay:false,
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className=" text-5xl lg:text-7xl font-bold mali "
              >
                Order Now Our Special{" "}
                <span className="text-green-700 ">Marocain Dishes</span>{" "}
              </motion.h1>

              <div className="flex  mt-8">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="  lg:text-xl py-5 px-12 text-yellow-400 rounded-[60px]  bg-green-700 hover:bg-green-800  transition-all duration-300"
                >
                  View Menu
                </motion.button>
              </div>
            </div>
            {/* plat */}
            <Slider {...settings}>
              {images.map((i) => {
                return (
                  <div key={i}>
                    <motion.div
                      className={`  flex justify-center`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
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
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
