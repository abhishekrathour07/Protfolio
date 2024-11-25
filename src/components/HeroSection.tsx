import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "./Framer";

const HeroSection: React.FC = () => {
    return (
        <motion.div
            variants={fadeInDown()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }} // Allow animation to replay
            className="h-[100vh] flex items-center justify-between px-4 sm:px-8"
        >
            <motion.div variants={fadeInDown()} className="flex items-center bg-cover bg-center bg-[url('/images/name-logo-favicon.svg')] md:bg-none h-full w-full">
                <motion.div
                    variants={fadeInDown()}
                    className="flex flex-col gap-4 ml-8"
                >
                    <motion.h1
                        variants={fadeInDown()}
                        className="text-4xl md:text-6xl font-bold z-9999"
                    >
                        Abhishek Singh
                    </motion.h1>
                    <motion.h2
                        variants={fadeInDown()}
                        className="text-xl md:text-2xl font-extralight z-9999 font-serif"
                    >
                        Frontend Developer
                    </motion.h2>
                </motion.div>
                <motion.svg
                    variants={fadeInDown()}
                    viewBox="0 0 406 368"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-[340px] lg:h-[480px] hidden md:block"
                // width="100%" /* Ensures responsive width */
                // height="100%" /* Ensures responsive height */
                >
                    <path
                        d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                        stroke="#3675eb"
                        strokeOpacity="1"
                        strokeWidth="16"
                    />
                    <path
                        d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                        stroke="url(#paint0_linear)"
                        strokeWidth="16"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="205.549"
                            y1="20.0169"
                            x2="204.338"
                            y2="342.461"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#1595B6" />
                            <stop offset="1" stopColor="#1595B6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </motion.div>
            <motion.ul variants={fadeInDown()} className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/abhishek-rathour07/">
                    <motion.li
                        variants={fadeInDown()}
                        className="h-10 hover:bg-blue-800 px-2 py-2 rounded-lg hover:text-white"
                    ><Linkedin /> </motion.li>
                </a>
                <a href="https://github.com/abhishekrathour07">
                    <motion.li
                        variants={fadeInDown()}
                        className="h-10 hover:bg-black px-2 py-2 rounded-lg hover:text-white"
                    ><Github /></motion.li>
                </a>
                <a href="">
                    <motion.li
                        variants={fadeInDown()}
                        className="h-10 bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 px-2 py-2 rounded-lg hover:text-white"
                    >  <Instagram /></motion.li>
                </a>
                <a href="mailto:singhrathourabhishek7@gmail.com">
                    <motion.li
                        variants={fadeInDown()}
                        className="h-10 hover:bg-red-700 px-2 py-2 rounded-lg hover:text-white"
                    ><Mail size={28} /> </motion.li>
                </a>

                <a href="https://x.com/AbhiRathour_07">
                    <motion.li
                        variants={fadeInDown()}
                        className="h-10 hover:bg-blue-500 px-2 py-2 rounded-lg hover:text-white"
                    >
                        <Twitter />
                    </motion.li>
                </a>

            </motion.ul>
        </motion.div>
    );
};

export default HeroSection;
