import Image from "next/image";
import styles from "../../styles/Story.module.scss";
const Story = () => {
  return (
    <div className={styles.hero}>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 px-2 lg:px-20">
        <div className="flex flex-col ">
          <h1 className="text-2xl text-gray-400 mb-5">Who we are?</h1>
          <h1 className="  text-5xl lg:text-6xl  font-bold mali text-green-800 pb-5">
            About Tajine&Tanjiya
          </h1>
          <h1 className=" text-3xl lg:text-5xl pb-20">Restaurant & Coffe</h1>
          <p className=" ml-5 text-lg text-slate-700">
            Rawabina had two venues in its 20 years, but seems to have found a
            “new home” on Sheikh Zayed Road.
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

        <Image src="/aboutTajin.svg" alt="plat4" width={700} height={700} />
      </div>
    </div>
  );
};

export default Story;
