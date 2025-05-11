import React, { useState } from "react";
import Mode from "./Mode";
import { Menu, UserRound, X } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInDown, fadeInleft } from "./Framer";
import AboutMe from "./AboutMe";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [menuPopup, setMenuPopup] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    const toggleMenuPopup = () => {
        setMenuPopup(!menuPopup)
    }
    const navigate: any = useNavigate();
    return (
        <div className="text-white bg-gradient-to-r from-blue-700 to-purple-700 h-18 relative w-full">
            <motion.div
                variants={fadeInDown()}
                initial={"hidden"}
                whileInView={"show"}
                className="flex justify-between items-center px-12 h-20"
            >
                <motion.svg
                    variants={fadeInDown()}
                    height="60"
                    viewBox="0 0 406 368"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                >
                    {/* SVG Path is required*/}
                    <path
                        d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                        stroke="#3675eb"
                        strokeOpacity="1"
                        strokeWidth="16"
                    />
                </motion.svg>
                <Menu size={36} className="block md:hidden cursor-pointer"
                    onClick={toggleMenuPopup} />
                {menuPopup && (
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        variants={fadeInleft()}
                        viewport={{ once: true }}
                        className="fixed top-40 left-0  w-full h-auto flex justify-center z-50 "
                        onClick={() => setMenuPopup(false)}>
                        <div
                            className=" bg-blue-950 rounded-lg p-4 shadow-lg w-[75vw] h-auto py-6 "
                            onClick={(e) => e.stopPropagation()} >
                            <div className="flex h-12 items-center justify-end">
                                <X size={36} strokeWidth={2.5}
                                    className="text-white  hover:text-red-700 cursor-pointer"
                                    onClick={() => setMenuPopup(false)}
                                />
                            </div>
                            <motion.h2
                                className="text-white text-xl font-sans px-4 hover:bg-blue-900 w-full rounded-lg p-2 cursor-pointer"
                                onClick={() => {
                                    setMenuPopup(false); // Close the popup first
                                    navigate('/'); // Then navigate
                                }}
                            >
                                Home
                            </motion.h2>
                            <motion.h2
                                className="text-white text-xl font-sans px-4 hover:bg-blue-900 w-full rounded-lg p-2 cursor-pointer"
                                onClick={() => {
                                    setMenuPopup(false); 
                                    togglePopup(); 
                                }}
                            >
                                About Me
                            </motion.h2>
                            <motion.h2
                                className="text-white text-xl font-sans px-4 hover:bg-blue-900 w-full rounded-lg p-2 cursor-pointer"
                                onClick={() => {
                                    setMenuPopup(false);
                                    navigate('/skills'); 
                                }}
                            >
                                Skills
                            </motion.h2>
                            <motion.h2
                                className="text-white text-xl font-sans px-4 hover:bg-blue-900 w-full rounded-lg p-2 cursor-pointer"
                                onClick={() => {
                                    setMenuPopup(false); 
                                    navigate('/projects'); 
                                }}
                            >
                                Projects
                            </motion.h2>
                            <motion.h2
                                className="text-white text-xl font-sans px-4 hover:bg-blue-900 w-full rounded-lg p-2 cursor-pointer"
                                onClick={() => {
                                    setMenuPopup(false); 
                                    navigate('/feedback'); // 
                                }}
                            >
                                Feedback
                            </motion.h2>


                        </div>
                    </motion.div>
                )}
                <motion.ul
                    variants={fadeInDown()}
                    className="md:flex gap-8 items-center hidden"
                >
                    <motion.li variants={fadeInDown()}>
                        <Mode />
                    </motion.li>

                    <motion.li
                        variants={fadeInDown()}
                        onClick={togglePopup}
                        className="cursor-pointer hover:text-slate-400"
                    >
                        <UserRound size={32} />
                    </motion.li>
                </motion.ul>
            </motion.div>


            {isPopupVisible && (
                <AboutMe setIsPopupVisible={setIsPopupVisible} />
            )}
        </div>
    );
};

export default Navbar;
