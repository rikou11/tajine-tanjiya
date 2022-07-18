import { motion } from "framer-motion";
import styles from "../../styles/Home.module.scss";

const OurStory = () => {
  return (
    <div className={styles.section}>
      <div className="px-2 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl text-green-700 lg:text-8xl font-bold my-4 mali mb-10"
        >
          Our Story
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="113.8"
            height="6.933"
            viewBox="0 0 113.8 6.933"
          >
            <path
              id="Path_6"
              data-name="Path 6"
              d="M4,8H115.8M4,12.933H115.8"
              transform="translate(-3 -7)"
              fill="none"
              stroke="#1e5509"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div className="grid grid-cols-1 mx-4 lg:grid-cols-2 text-gray-500 text-left text-base lg:text-xl gap-10">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            officiis ut tenetur ea dicta. Illum nisi iusto id dolorem aspernatur
            voluptatum unde. Ab velit asperiores architecto accusantium ipsam,
            magni corrupti fugiat adipisci, facilis beatae perspiciatis! At
            possimus voluptate error. Facere aperiam enim animi eaque assumenda
            pariatur provident veniam aut sed, repudiandae omnis? Explicabo
            aliquam adipisci exercitationem cumque quos ea ipsum! possimus
            voluptate error. Facere aperiam enim animi eaque assumenda pariatur
            provident veniam aut sed, repudiandae omnis? Explicabo aliquam
            adipisci exercitationem cumque quos ea ipsum! possimus voluptate
            error. Facere aperiam enim animi eaque assumenda pariatur provident
            veniam aut sed, repudiandae omnis? Explicabo aliquam adipisci
            exercitationem cumque quos ea ipsum!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            officiis ut tenetur ea dicta. Illum nisi iusto id dolorem aspernatur
            voluptatum unde. Ab velit asperiores architecto accusantium ipsam,
            magni corrupti fugiat adipisci, facilis beatae perspiciatis! At
            possimus voluptate error. Facere aperiam enim animi eaque assumenda
            pariatur provident veniam aut sed, repudiandae omnis? Explicabo
            aliquam adipisci exercitationem cumque quos ea ipsum! voluptatum
            unde. Ab velit asperiores architecto accusantium ipsam, magni
            corrupti fugiat adipisci, facilis beatae perspiciatis! At possimus
            voluptate error. Facere aperiam enim animi eaque assumenda pariatur
            provident veniam aut sed, repudiandae omnis? Explicabo aliquam
            adipisci exercitationem cumque quos ea ipsum! voluptatum unde. Ab
            velit asperiores architecto accusantium ipsam, !
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
