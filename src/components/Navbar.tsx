import React, { useState } from "react";
import Mode from "./Mode";
import {  Menu, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInDown } from "./Framer";
import AboutMe from "./AboutMe";

const Navbar: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <div className="text-white bg-[#16325B] h-20 relative w-full">
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
                    {/* SVG Path */}
                    <path
                        d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                        stroke="#3675eb"
                        strokeOpacity="1"
                        strokeWidth="16"
                    />
                </motion.svg>

                <Menu size={32} className="block md:hidden" />
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
                <AboutMe setIsPopupVisible={setIsPopupVisible}/>
            )}
        </div>
    );
};

export default Navbar;
