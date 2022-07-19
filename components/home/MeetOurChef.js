import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";

const MeetOurChef = () => {
  const chef = [
    { name: "Mohammed ", image: "/images/chef1.png", position: "main Chef" },
    { name: "Rahim", image: "/images/chef2.png", position: "main Chef" },
    { name: "John", image: "/images/chef3.png", position: "main Chef" },
    { name: "Samir", image: "/images/chef4.png", position: "main Chef" },
  ];
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
          Meet Our Chef
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-lg  text-gray-800 lg:text-xl  my-4  mb-10"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          corrupti unde fugiat earum ullam? A.
        </motion.p>
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

        <div className="flex flex-row gap-8 justify-center mb-10 flex-wrap items-center">
          {chef.map((i,index) => {
            return (
              <div className="flex flex-col justify-center bg-white box-border h-80 w-64 pb-10  hover:scale-110   rounded-lg border border-[#2563323a] hover:border-0 hover:shadow-lg hover:shadow-[#2563323a] transition-all duration-200"  key={index}>

           <div className="flex justify-center">
                 <Image src={i.image} alt={i.name} width={200} height={200} />

           </div>
                <h1 className="text-center text-lg text-green-700 lg:text-2xl pt-4 font-bold mali">
                  {i.name}
                </h1>
                <p className="text-sm text-center">{i.position}</p>
              </div>
           
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MeetOurChef;
