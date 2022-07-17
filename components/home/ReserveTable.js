import styles from "../../styles/Reservation.module.scss";

const ReserveTable = () => {
  return (
    <div className="relative h-fit w-full">
      <div className="flex w-full justify-center absolute top-10 ">
        <h1 className=" text-white   font-extrabold text-2xl lg:text-7xl">
          Reserve Your Table Now
        </h1>
      </div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 ">
        <div className="flex justify-center items-center bg-green-700">
          <div className="grid grid-cols-1 gap-10 justify-center content-center box-border pt-32 lg:pt-0">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="border-b-2 border-white  box-border  pl-2 bg-transparent focus:border-b-2 focus:outline-none text-xl w-full px-10 placeholder:text-slate-400 text-white  focus:border-yellow-400"
            />
            <input
              type="text"
              name="fullname"
              placeholder="Email"
              className="border-b-2 border-white  box-border  pl-2 bg-transparent focus:border-b-2 focus:outline-none text-xl w-full sm:w-96 placeholder:text-slate-400 text-white lg:max-w-lg focus:border-yellow-400"
            />
            <input
              type="text"
              name="fullname"
              placeholder="Phone Number"
              className="border-b-2 border-white  box-border  pl-2 bg-transparent focus:border-b-2 focus:outline-none text-xl w-full sm:w-96 placeholder:text-slate-400 text-white lg:max-w-lg focus:border-yellow-400"
            />
            <input
              type="text"
              name="fullname"
              placeholder="Date and Time"
              className="border-b-2 border-white  box-border  pl-2 bg-transparent focus:border-b-2 focus:outline-none text-xl w-full sm:w-96 placeholder:text-slate-400 text-white lg:max-w-lg focus:border-yellow-400"
            />
            <div className="flex justify-center lg:justify-start  my-8">
              <button className="  lg:text-xl shadow-lg  py-3 px-10 text-yellow-400 rounded-[60px]  bg-green-800 hover:bg-green-900  transition-all duration-300">
                View Menu
              </button>
            </div>
          </div>
        </div>
        <div
          className={`${styles.reservation} w-full h-[750px] flex justify-center items-center `}
        >
          <div className={`${styles.card} flex flex-col justify-center text-left items-center bg-gray-100 bg-opacity-50 backdrop-blur-sm rounded-[60px] h-96 box-border w-96 `}>
          <div className="px-10">
            <h1 className="font-bold text-5xl text-left text-yellow-300">Hours</h1>
            <p  className="text-2xl">8:00 am - 2:00 am</p>
            <h1 className="font-bold  text-5xl text-left text-yellow-300">Call</h1>
            <p  className="text-2xl">Phone (Abu Hail -Dubai) +971 4 2870777</p>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
