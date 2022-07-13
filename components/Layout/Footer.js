import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-green-800 flex flex-col justify-center py-6">
      <Image src="/logo.svg" alt="logo" width={70} height={70} />

      <h1 className="text-yellow-300 text-center mali">ACME Industries Ltd.</h1>
      <h2 className="text-yellow-300 text-center">
        Providing reliable tech since 1992
      </h2>
      <h2 className="text-yellow-300 text-center font-thin">
        Copyright © 2022 - All right reserved
      </h2>
      <span className="flex flex-row justify-center gap-8 mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="19.504"
          viewBox="0 0 24 19.504"
        >
          <path
            id="Path_20"
            data-name="Path 20"
            d="M24,4.557a9.831,9.831,0,0,1-2.828.775,4.932,4.932,0,0,0,2.165-2.724A9.864,9.864,0,0,1,20.21,3.8a4.927,4.927,0,0,0-8.391,4.49A13.978,13.978,0,0,1,1.671,3.149,4.93,4.93,0,0,0,3.194,9.723,4.9,4.9,0,0,1,.965,9.107,4.927,4.927,0,0,0,4.914,14a4.935,4.935,0,0,1-2.224.084A4.928,4.928,0,0,0,7.29,17.5,9.9,9.9,0,0,1,0,19.54a13.939,13.939,0,0,0,7.548,2.212A13.925,13.925,0,0,0,21.543,7.106,10.025,10.025,0,0,0,24,4.557Z"
            transform="translate(0 -2.248)"
            fill="#ffe14d"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="27.5"
          viewBox="0 0 14 27.5"
        >
          <path
            id="Path_18"
            data-name="Path 18"
            d="M9.5,9.167H6V13.75H9.5V27.5h5.833V13.75h4.249L20,9.167H15.333V7.257c0-1.094.224-1.527,1.3-1.527H20V0H15.557C11.362,0,9.5,1.814,9.5,5.288Z"
            transform="translate(-6)"
            fill="#ffe14d"
          />
        </svg>
      </span>
    </div>
  );
};

export default Footer;
