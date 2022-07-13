import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faMailForward, faNavicon, faNewspaper, faPhone  } from "@fortawesome/free-solid-svg-icons";

const InfoBar = () => {
  return (
  
    <div className="flex justify-around py-2 m-0 lg:py-3  text-white bg-gray-200">
      <div className="flex justify-center gap-3 lg:gap-5 ">
        <div className="flex justify-center gap-2 items-center">
            <FontAwesomeIcon icon={faPhone}  color='#1e5509'  />
            <a href="tel:123-456-7890" className="text-green-700  text-sm lg:text-base hover:opacity-75">+212 658 987 6543</a>
        </div>
        <div className="flex justify-center gap-2 items-center">
            <FontAwesomeIcon icon={faMailForward} color='#1e5509' />
            <a href="mailto:webmaster@example.com" className="text-green-700 text-sm lg:text-base hover:opacity-75">test@gmail.com</a>
            </div>{" "}
      </div>

      <ul className="list-none  gap-3 hidden lg:flex ">
        <li className="px-3 py-2 rounded-full border border-[#1e5509] hover:border-red-300 ">    <FontAwesomeIcon icon={faPhone} color=' #1e5509'  /></li>
        <li className="px-3 py-2 rounded-full border border-[#1e5509] hover:border-red-300 ">    <FontAwesomeIcon icon={faBed}color=' #1e5509' /></li>
        <li className="px-3 py-2 rounded-full border border-[#1e5509] hover:border-red-300 ">    <FontAwesomeIcon icon={faNewspaper}  color=' #1e5509'/></li>
      </ul>
    </div>
  );
};

export default InfoBar;
