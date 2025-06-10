import React from "react";
import { motion } from "framer-motion";
import { fadeInDown } from "./Framer";

const HoverDevCards: React.FC = () => {
    const languageData = [
        {
            title: "HTML",
            subtitle: "Markup Language",
            from: "#D91656",
            to: "#640D5F",
            Icon: () => (
                <img
                    src="/images/html-5.png"
                    alt="HTML Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "CSS",
            subtitle: "Styling Language",
            from: "#db65a5",
            to: "#ce4f94",
            Icon: () => (
                <img
                    src="/images/css-3.png"
                    alt="CSS Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "JavaScript",
            subtitle: "Programming Language",
            from: "#F7DF1E",
            to: "#FFD700",
            Icon: () => (
                <img
                    src="/images/javaScript.png"
                    alt="JavaScript Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "ReactJS",
            subtitle: "UI Library",
            from: "#61DAFB",
            to: "#1C8FE3",
            Icon: () => (
                <img
                    src="/images/atom.png"
                    alt="ReactJS Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "Node.js",
            subtitle: "JavaScript Runtime",
            from: "#339933",
            to: "#66BB66",
            Icon: () => (
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="Node.js Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "Git",
            subtitle: "Version Control",
            from: "#F05032",
            to: "#E94E31",
            Icon: () => (
                <img
                    src="/images/git.png"
                    alt="Git Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "TypeScript",
            subtitle: "Typed JavaScript",
            from: "#3178C6",
            to: "#2C6EBE",
            Icon: () => (
                <img
                    src="/images/typescript.png"
                    alt="TypeScript Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "Tailwind CSS",
            subtitle: "CSS Framework",
            from: "#06B6D4",
            to: "#0891B2",
            Icon: () => (
                <img
                    src="/images/tailwind.png"
                    alt="Tailwind CSS Icon"
                    className="h-12 w-12 rounded-lg"
                />
            ),
        },
        {
            title: "Express.js",
            subtitle: "Web Framework",
            from: "#6256CA",
            to: "#6439FF",
            Icon: () => (
                <img
                    src="https://skillicons.dev/icons?i=express"
                    alt="Express.js Icon"
                    className="h-10 rounded-lg"
                />
            ),
        },
        {
            title: "MongoDB",
            subtitle: "NoSQL Database",
            from: "#47A248",
            to: "#66BB66",
            Icon: () => (
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="MongoDB Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "Next.js",
            subtitle: "A JavaScript FrameWork",
            from: "#D91656",
            to: "#640D5F",
            Icon: () => (
                <img
                src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"
                alt="next icon"
                className="h-12 w-12"
                />
            ),
        },
        {
            title: "Python",
            subtitle: "Most Used Programming Language",
            from: "#FAB12F",
            to: "#5409DA",
            Icon: () => (
                <img
                src="/images/python1.png"
                alt="python"
                className="h-12 w-12"
                />
            ),
        },
        {
            title: "Figma",
            subtitle: "powerful design features",
            from: "#614321",
            to: "#F3C623",
            Icon: () => (
                <img
                src="https://skillicons.dev/icons?i=figma"
                alt="figma"
                className="h-12 w-12"
                />
            ),
        },
        {
            title: "Vercel",
            subtitle: "Project deployment Hub",
            from: "#901E3E",
            to: "#FF9898",
            Icon: () => (
                <img
                    src="https://skillicons.dev/icons?i=vercel"
                    alt="MongoDB Icon"
                    className="h-12 w-12"
                />
            ),
        },
        {
            title: "AWS",
            subtitle: "Cloud services",
            from: "#F7AD45",
            to: "#222831",
            Icon: () => (
                <img
                    src="https://skillicons.dev/icons?i=aws"
                    alt="MongoDB Icon"
                    className="h-12 w-12"
                />
            ),
        },
    ];


    return (
        <motion.div
            initial={"hidden"}
            whileInView={"show"}
            variants={fadeInDown()}
            viewport={{ once: false }}
            className="p-4 "
        >
            <motion.p
                variants={fadeInDown()}
                className="text-6xl font-bold  flex justify-center items-center h-20"
            >
                Skills
            </motion.p>
            <motion.p
                variants={fadeInDown()}
                className="text-xl font-bold text-slate-400 flex justify-center items-center h-12 my-3"
            >
                These are the various Skills i am familier with
            </motion.p>
            <motion.div
                variants={fadeInDown()}
                className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 md:px-20 lg:px-36"
            >
                {languageData.map((language, index) => (
                    <Card
                        key={index}
                        title={language.title}
                        subtitle={language.subtitle}
                        Icon={language.Icon}
                        from={language.from}
                        to={language.to}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

type LanguageProps = {
    title: string;
    subtitle: string;
    Icon: React.FC;
    from: string;
    to: string;
};

const Card: React.FC<LanguageProps> = ({ title, subtitle, Icon, from, to }) => {
    return (
        <motion.div
            variants={fadeInDown()}
            whileTap={{ scale: 0.9 }}
            className="w-full p-4 rounded-xl border-[1px] border-gray-300 relative overflow-hidden group bg-black"
        >
            {/* Hover Gradient Animation */}
            <div
                className={`absolute inset-0 bg-gradient-to-r translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300`}
                style={{
                    backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
                }}
            />
            <div
                className="absolute z-10 -top-12 -right-12  text-gray-100 group-hover:text-white  transition-transform duration-300"
                style={{ color: from }}
            >
                <Icon />
            </div>
            {/* Content */}
            <div
                className="mb-2 text-2xl group-hover:text-white transition-colors relative z-10 duration-300"
                style={{ color: from }}
            >
                <Icon />
            </div>
            <h3 className="font-medium text-lg text-gray-200 group-hover:text-white relative z-10 duration-300">
                {title}
            </h3>
            <p className="text-gray-400 group-hover:text-slate-300 relative z-10 duration-300">
                {subtitle}
            </p>
        </motion.div>
    );
};

export default HoverDevCards;
