import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      

            <nav className="relative flex flex-wrap items-center justify-between  bg-green-800  shadow-xl  px-2   ">
                <div className="container px-4 mx-2 md:mx-32 flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href='/'><div className=" cursor-pointer rounded-full flex justify-center"><Image alt="Tajine and Tanjiya" src="/logo.svg" className="relative " width={100} height={100} />
                        </div></Link>

                        <button
                            className="text-yellow-300 cursor-pointer text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon icon={faBars}   />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex  py-4" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }} className="flex flex-col lg:flex-row list-none lg:ml-auto gap-8 ">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 "
                                    href="/About"
                                >
                                    <span className="ml-2 text-yellow-300 hover:opacity-75 text-xl lg:text-2xl transition-all duration-300 cursor-pointer">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 "
                                    href="/FAQ"
                                >
                                    <span className="ml-2 text-yellow-300 hover:opacity-75 text-xl lg:text-2xl transition-all duration-300 cursor-pointer">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 "
                                    href="/Pricing"
                                >
                                    <span className="ml-2 text-yellow-300 hover:opacity-75 text-xl lg:text-2xl transition-all duration-300 cursor-pointer">Menu</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 "
                                    href="/Contact"
                                >
                                    <span className="ml-2 text-yellow-300 hover:opacity-75 text-xl lg:text-2xl transition-all duration-300 cursor-pointer">Join Our Club</span>
                                </Link>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </nav>



        
    );
};

export default Navbar;
