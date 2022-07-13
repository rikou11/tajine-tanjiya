import styles from "../../styles/Home.module.scss";

const OurStory = () => {
  return (
    <div className={styles.hero}>
      <div className="px-2 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
        <h1 className="text-center text-4xl text-green-700 lg:text-8xl font-bold my-4 mali mb-10">
          Our Story
        </h1>
        <div className="flex justify-center mb-10">
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
        </div>

        <grid className="grid grid-cols-1 mx-4 lg:grid-cols-2 text-green-900 text-left text-base lg:text-xl gap-10">
          <p>
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
          </p>
          <p>
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
          </p>
        </grid>
      </div>
    </div>
  );
};

export default OurStory;
