import Image from "next/image";
import styles from "../../styles/Story.module.scss";
const Story = () => {
  return (
    <div className={styles.hero}>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 px-2 lg:px-20">
        <div className="flex flex-col ">
          <h1 className="text-lg lg:text-2xl text-gray-700 mb-2">Who we are?</h1>
          <h1 className=" text-3xl lg:text-5xl  font-bold mali text-green-800 pb-5">
            About Tajine&Tanjiya
          </h1>
          <h1 className=" ml-3 text-3xl lg:text-3xl pb-5">Restaurant & Coffe</h1>
          <p className=" ml-5 text-lg text-slate-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ut necessitatibus aspernatur mollitia magnam nisi delectus quae quos!
            <br /> From gourmet meals and fine dining to casual lunches and
            quick pick-me-ups, the Rawabina offers visitors a variety of dining
            options.
            <br /> The dining room is beautifully decorated, comfortable and
            spacious.
            <br /> It was designed and constructed to meet both the health and
            safety standard as recommended by the local authority. <br />
            Our guests are going to be treated with good music at all times.{" "}
            <br />
            We have made provision for live acoustic music that will be played
            at the background to create the ambiance that our customers will
            cherish. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt officia soluta libero nemo quibusdam, aperiam
            necessitatibus magnam, itaque repudiandae et delectus?
          </p>
        </div>

        <Image src="/aboutTajin.svg" alt="plat4" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Story;
