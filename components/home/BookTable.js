import { motion } from "framer-motion";
import Image from "next/image";
import image from "../../public/images/reserve plate.png";
const BookTable = () => {
  return (
    <div>
      <div className="">
        <div className=" py-3 mx-auto flex justify-center  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-4  ">
          <div className="grid grid-cols-1 justify-center gap-10 lg:grid-cols-2">
            <div className="grid  justify-start gap-8 align-middle pt-20 lg:pt-30 content-center  ">
              <motion.h1
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className=" text-4xl lg:text-5xl font-bold mali text-center lg:text-left "
              >
                Do You Have Any Dinner Plan ?
                <span className="text-transparent text-5xl bg-clip-text bg-green-700  ">
                  Reserve Your Table Now
                </span>{" "}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                className="text-slate-600 text-center lg:text-left text-lg px-2 "
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, eveniet fugiat iusto numquam dolore exercitationem
                quis labore deserunt.
              </motion.p>
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
                  className="bg-green-700 mali border-2 border-yellow-300 shadow-lg shadow-[#D6FDE9] text-yellow-300 hover:bg-green-800 lg:text-xl hover:text-yellow-400 rounded-full px-10 py-3 transition-all duration-300"
                >
                  Reserve Now
                </motion.button>
              </div>
            </div>
            {/* plat */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              // viewport={{ once: true }}
            >
              <Image src={image} alt="" width={700} height={700} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
