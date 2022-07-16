import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
const BookTable = () => {
  return (
    <div>
      <div className="">
        <div className="px-2 py-3 mx-auto flex justify-center  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-4  ">
          <div className="grid grid-cols-1 justify-center gap-10 lg:grid-cols-2">
            <div className="grid  justify-start gap-8 align-middle pt-20 lg:pt-30 content-center  ">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className=" text-4xl lg:text-5xl font-bold mali text-center lg:text-left "
              >
                Do You Have Any Dinner Plan ?
                <span className="text-green-700 ">Reserve Your Tabale Now</span>{" "}
              </motion.h1>

              <p className="text-slate-600 text-center lg:text-center text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem, eveniet fugiat iusto numquam dolore exercitationem
                quis labore deserunt.
              </p>
              <div className="flex justify-start">
                <button className="bg-green-800 text-yellow-300 hover:bg-green-700 hover:text-yellow-400 rounded-lg px-12 py-5 transition-all duration-300">
                  Reserve now
                </button>
              </div>
            </div>
            {/* plat */}
            <Image src="/images/group 9.png" alt="" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
