import { motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import { fadeInleft, fadeInRight } from "./Framer";

type Props = {
    setIsPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutMe: React.FC<Props> = ({ setIsPopupVisible }) => {
    const aboutData = {
        title: "About Me",
        img: "/images/abhishek.png",
        description: "I am Abhishek Singh from  Varansi , I am a BCA student and aspiring web developer, passionate about creating impactful applications. ",
        subtitle: "Language's I Love to work with",
        skills: [
            "#Next.js",
            "React.js",
            "#Tailwindcss",
            "#javascript",
            "#TypeScript",
            "#mongoDB",
            "RestApi",
            "#express.js",
            "#node.js",
        ],
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="fixed top-8 left-0 w-full h-full flex justify-center items-center z-50  "
            onClick={() => setIsPopupVisible(false)}>
            <div
                className="bg-white bg-cover bg-[url('/images/background.png')] rounded-lg p-6 shadow-lg w-[75vw] h-[75vh]"
                onClick={(e) => e.stopPropagation()} >
                <div className="flex h-12 items-center justify-between">
                    <motion.h2 variants={fadeInleft()} className="text-[#161D6F] text-2xl md:text-4xl lg:text-5xl font-serif font-bold">{aboutData.title}</motion.h2>
                    <X size={36} strokeWidth={2.5}
                        className="text-[#161D6F] hover:text-red-700 cursor-pointer"
                        onClick={() => setIsPopupVisible(false)}
                    />
                </div>
                <motion.div variants={fadeInRight()} className="flex justify-around lg:items-center flex-col lg:flex-row lg:h-full py-3 md:py-0">
                    <div className="lg:bg-blue-900 h-48  md:h-64 rounded-full lg:h-[23rem] md:rounded-xl flex justify-center items-center">
                        <img src={aboutData.img} alt="My Image" className="h-52  md:h-64 rounded-full lg:h-[23rem] md:rounded-xl lg:opacity-25 w-52 md:w-auto " />
                    </div>
                    <div className="lg:w-1/2 mt-4 px-4">
                        <h2 className="text-[#161D6F] text-sm md:text-md lg:text-lg xl:text-xl font-semibold ">{aboutData.description}</h2>
                        <h2 className="text-[#68ad73] font-bold text-2xl py-2 hidden sm:flex">{aboutData.subtitle}</h2>
                        <ul className="flex flex-wrap gap-2 mt-2">
                            {aboutData.skills.map((skill: string, index: number) => (
                                <li
                                    key={index}
                                    className="border rounded-[50px] text-[#6951e5] font-bold border-[#999] hover:bg-[#161D6F] px-[10px] py-[5px] text-sm md:text-base" >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutMe;
