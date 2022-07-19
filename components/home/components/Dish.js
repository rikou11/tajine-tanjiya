import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../../styles/Dish.module.scss";
import { motion } from "framer-motion";
const Dish = ({ dish }) => {
  return (
    <motion.div    layout
  className={styles.dishConatiner}>
      <Image
        src={dish.image}
        alt={dish.name}
        className={styles.Image}
        width={500}
        height={500}
      />

         <FontAwesomeIcon icon={faHeart} className={styles.heart} />
    
      <div className="flex justify-between items-center ">
        <h1 className="text-base lg:text-lg font-bold text-left mali ">{dish.name}</h1>
        {dish.new ? (
          <p className="text-lg text-left ">
            <FontAwesomeIcon icon={faStar} />
            New
          </p>
        ) : (
          <FontAwesomeIcon icon={faStar} />
        )}
      </div>
      <p className="text-sm   lg:text-base  text-gray-500 text-left ">{dish.category_name}</p>
    </motion.div>
  );
};

export default Dish;
