import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAward, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../../styles/Dish.module.scss";
import { motion } from "framer-motion";
const Dish = ({ dish }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15, y: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      exit={{ opacity: 0, x: 0, y: 0 }}
      layout
      className={styles.dishConatiner}
    >
      <Image
        src={dish.image}
        alt={dish.name}
        className={styles.Image}
        width={500}
        height={500}
      />

      <FontAwesomeIcon icon={faHeart} className={styles.heart} />

      <div className="flex justify-between items-center ">
        <h1 className="text-base lg:text-xl font-bold text-left mali ">
          {dish.name}
        </h1>
        {dish.new ? (
          <p className="text-sm bg-[#E0EBE1] text-green-700 p-2 rounded-full text-left  ">
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            New
          </p>
        ) : (
          <p className="text-sm bg-red-100 text-red-700 p-2 rounded-full text-center  ">
            <FontAwesomeIcon icon={faAward} className="mr-1" />
            Top Rated
          </p>
        )}
      </div>
      <p className="text-sm   lg:text-base bg-slate-50 px-2 hover:bg-yellow-200 hover:text-yellow-500 transition-all duration-250 w-fit rounded-full  text-gray-500 text-left ">
        {dish.category_name}
      </p>
    </motion.div>
  );
};

export default Dish;
