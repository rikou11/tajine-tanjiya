import Image from "next/image";
import styles from "../../styles/Story.module.scss";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <div className={styles.hero}>
      <div className=" flex flex-col  lg:grid  lg:grid-cols-2 gap-10 py-10 px-2 lg:px-20">
        <div className=" ">
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg lg:text-2xl text-gray-700 mb-2"
          >
            Who we are?
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" text-3xl lg:text-5xl  font-bold mali text-green-800 pb-5"
          >
            About Tajine wa Tanjiya
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" ml-3 text-3xl lg:text-3xl pb-5"
          >
            Restaurant & Coffe
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className=" ml-5 text-lg text-slate-700"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            ut necessitatibus aspernatur mollitia magnam nisi delectus quae
            quos!
            <br /> From gourmet meals and fine dining to casual lunches and
            quick pick-me-ups, the Rawabina offers visitors a variety of dining
            options.
            <br /> The dining room is beautifully decorated, comfortable and
            spacious.
            <br /> It was designed and constructed to meet both the health and
            safety standard as recommended by the local authority. <br />
            Our guests are going to be treated with good music at all times.{" "}
            <br />
            <div className="flex flex-row flex-wrap gap-2  lg:gap-5 mt-8">
              <div className="flex flex-row gap-2 items-center hover:opacity-80 bg-[#E0EBE1] py-2 px-2 rounded-lg">
                <svg
                  className="h-10 w-10 "
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
                  <p className="text-xl   font-normal">Fast</p>
                  <p className="text-base   font-normal">Delivery</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center hover:opacity-80 bg-[#E0EBE1] py-2 px-2 rounded-lg">
                <svg
                  className="h-10 w-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                    stroke="#47895F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V18"
                    stroke="#47895F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                    stroke="#47895F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="text-left">
                  <p className="text-xl   font-normal">Free</p>
                  <p className="text-base   font-normal">Delivery</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center hover:opacity-80 bg-[#E0EBE1] py-2 px-2 rounded-lg">
                <svg
                  className="h-10 w-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.46005 18.49V15.57C5.46005 14.6 6.22005 13.73 7.30005 13.73C8.27005 13.73 9.14005 14.49 9.14005 15.57V18.38C9.14005 20.33 7.52005 21.9501 5.57005 21.9501C3.62005 21.9501 2.00005 20.32 2.00005 18.38V12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49"
                    stroke="#47895F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="text-left">
                  <p className="text-xl   font-normal">24/7</p>
                  <p className="text-base   font-normal">Service</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>{" "}
        <div className="flex justify-center h-[600px]">
          <Image src="/story.jpg" alt="plat4" width={400} height={400} className='rounded-lg' />
        </div>{" "}
      </div>
    </div>
  );
};

export default Story;
