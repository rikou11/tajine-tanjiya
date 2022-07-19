import { useState } from "react";
import Dish from "./components/Dish";
import Filter from "./components/Filter";
import { dishes } from "./Content/Dishes";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/Home.module.scss";

const OurDishes = () => {
  const [popular] = useState(dishes);
  const [filltred, setFiltred] = useState(dishes);
  const [activeGenre, setActiveGenre] = useState(9);
  return (
    <div className=" flex flex-col justify-center">
      <div className={styles.section}>
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl text-green-700 lg:text-6xl font-bold my-4 mali mb-10"
        >
          We Cook Our Food With Love
        </motion.h1>

        <Filter
          popular={popular}
          setFiltred={setFiltred}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />

        <motion.div
          layout
          className="flex flex-row  flex-wrap justify-center content-center gap-x-8 gap-y-4"
        >
          <AnimatePresence>
            {filltred.map((dish) => {
              return (
                <motion.div layout key={dish.id}>
                  <Dish dish={dish} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default OurDishes;
