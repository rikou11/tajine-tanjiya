import { motion } from "framer-motion";

import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./Testmonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBicycle,
  faTruckMoving,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
            <div className="grid grid-flow-row max-w-2xl  items-center  ">
              <motion.h1
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=" text-6xl lg:text-7xl font-bold mali text-center lg:text-left"
              >
                Taste Now Our Special{" "}
                <span className="text-green-700 ">
                  Marocain <br /> Dishes
                </span>{" "}
                <div className="flex justify-center lg:justify-start">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  // viewport={{ once: true }}
                  onClick={() => {
                    window.location.href = "#reserve";
                  }}
                  className="bg-green-700 mali border-2 border-yellow-300 text-base mt-12 lg:mt-28 shadow-lg shadow-[#D6FDE9] text-yellow-300 hover:bg-green-800 lg:text-xl hover:text-yellow-400 rounded-full px-10 py-3 transition-all duration-300"
                >
                  Reserve Now
                </motion.button>
              </div>
                <div className="flex flex-row gap-5 justify-center lg:justify-start mt-8">
                  <div className="flex flex-row gap-2 items-center">
                    <svg 
                      className="h-6 w-6 lg:h-10 lg:w-10 "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                        stroke="#47895f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                        stroke="#47895f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="text-left">
                      <p className="text-sm lg:text-xl   font-normal">5k+</p>
                      <p className="text-xs lg:text-base   font-normal">Costumers</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <svg 
                      className="h-6 w-6 lg:h-10 lg:w-10 "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 8H8"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 11H6"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 14H4"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="text-left">
                      <p className="text-sm lg:text-xl   font-normal">5k+</p>
                      <p className="text-xs lg:text-base   font-normal">Delivery</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <svg 
                      className="h-6 w-6 lg:h-10 lg:w-10 "
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                        stroke="#47895F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="text-left">
                      <p className="text-sm lg:text-xl   font-normal">2.5k+</p>
                      <p className="text-xs lg:text-base   font-normal">Likes</p>
                    </div>
                  </div>
                </div>
              </motion.h1>
            </div>
            {/* plat */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
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
