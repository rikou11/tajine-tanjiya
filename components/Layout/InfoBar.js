import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faMailForward,
  faNavicon,
  faNewspaper,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const InfoBar = () => {
  return (
    <div className="flex justify-around py-2 m-0   text-white bg-[#032b0c]">
      <div className="flex justify-center gap-3 lg:gap-5 ">
        <div className="flex justify-center gap-2 items-center">
          <FontAwesomeIcon icon={faPhone} color="#47895f" />
          <a
            href="tel:123-456-7890"
            className="text-[#E9D545]  text-sm lg:text-base hover:opacity-75"
          >
            +212 658 987 6543
          </a>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <FontAwesomeIcon icon={faMailForward} color="#47895f" />
          <a
            href="mailto:webmaster@example.com"
            className="text-[#E9D545] text-sm lg:text-base hover:opacity-75"
          >
            test@gmail.com
          </a>
        </div>{" "}
      </div>

      <ul className="list-none  gap-3 hidden lg:flex ">
        <li className="px-3 py-2 rounded-full bg-[#47895f]  ">
          {" "}
          <FontAwesomeIcon icon={faFacebook} color=" #E9D545" />
        </li>
        <li className="px-3 py-2 rounded-full bg-[#47895f]  ">
          {" "}
          <FontAwesomeIcon icon={faInstagram} color=" #E9D545" />
        </li>
        <li className="px-3 py-2 rounded-full bg-[#47895f]  ">
          {" "}
          <FontAwesomeIcon icon={faTwitter} color=" #E9D545" />
        </li>
        <li className="px-3 py-2 rounded-full bg-[#47895f]  ">
          {" "}
          <FontAwesomeIcon icon={faWhatsapp} color=" #E9D545" />
        </li>
      </ul>
    </div>
  );
};

export default InfoBar;
