import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const HeroSection: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#4f46e5] to-[#9333ea] px-4"
        >
            {/* Rotating Circle with SVG */}
            <motion.div
                className="absolute inset-0 flex justify-center items-center z-0"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <div className="relative w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] rounded-full border-4 border-dashed border-white/20">
                    {/* Adding the SVG inside the circle */}
                    <svg
                        width="100"
                        height="220"
                        viewBox="0 0 406 368"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute w-[70%] md:w-[80%] h-[70%] md:h-[80%] inset-10"
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
                    </svg>
                </div>
            </motion.div>

            {/* Twinkling Star Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, index) => {
                    const size = Math.random() * 3 + 2;
                    const initialX = Math.random() * 100;
                    const initialY = Math.random() * 100;

                    return (
                        <motion.div
                            key={index}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                top: `${initialY}%`,
                                left: `${initialX}%`,
                            }}
                            animate={{
                                x: [0, Math.random() * 50 - 25], // Moves left and right randomly
                                y: [0, Math.random() * 50 - 25], // Moves up and down randomly
                                opacity: [0.2, 1, 0.2], // Twinkling effect
                                scale: [1, 2.5, 1], // Pulsating effect
                            }}
                            transition={{
                                duration: Math.random() * 5 + 2, // Randomized duration
                                repeat: Infinity, // Infinite loop
                                repeatType: "mirror", // Smooth back-and-forth motion
                            }}
                        />
                    );
                })}
            </div>

            {/* Glassmorphic Container */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 md:p-8 w-[95%] md:w-[60%] text-center border border-white/20 z-10"
            >
                {/* Your Image with Dynamic Hover Effect */}
                <motion.img
                    src="/images/myimg.jpeg" // Replace with your image path
                    alt="Abhishek Singh"
                    className="mx-auto w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/30 object-cover hover:scale-110 transition-transform duration-500 hover:shadow-[0_0_30px_#ffffff]"
                />

                {/* Name and Title */}
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="mt-4 md:mt-6"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white neon-text drop-shadow-md tracking-wide">
                        Abhishek Singh
                    </h1>
                    <h2 className="text-lg md:text-2xl font-light text-gray-300 mt-2 md:mt-4 tracking-widest">
                        Web Developer
                    </h2>
                </motion.div>
            </motion.div>

            {/* Social Media Links */}
            <motion.ul
                className="mt-6 md:mt-10 flex gap-4 md:gap-6 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {[{ icon: <Linkedin />, url: "https://www.linkedin.com/in/abhishek-rathour07/" },
                { icon: <Github />, url: "https://github.com/abhishekrathour07" },
                { icon: <Instagram />, url: "https://www.instagram.com/abhishek_rathour.07/profilecard/?igsh=MWV1dndhcXBhc215Nw==" },
                { icon: <Mail />, url: "mailto:singhrathourabhishek7@gmail.com" },
                { icon: <Twitter />, url: "https://x.com/AbhiRathour_07" }].map((social, index) => (
                    <motion.li
                        key={index}
                        whileHover={{
                            scale: 1.2,
                            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)",
                        }}
                        className="text-xl md:text-2xl text-white cursor-pointer"
                    >
                        <a
                            href={social.url}
                            className="p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-transform duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.icon}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default HeroSection;
