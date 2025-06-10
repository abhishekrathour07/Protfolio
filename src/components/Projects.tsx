import React from "react";
import { motion } from 'framer-motion'
import { fadeInleft, fadeInRight } from "./Framer";

// Reusable ProjectCard Component
interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    skills: string[];
    link: string;
    image: string;
    bgColor: string;
    textColor: string;
    shadowColor: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    description,
    skills,
    link,
    image,
    bgColor,
    textColor,
    shadowColor
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="flex flex-col sm:flex-row gap-6 items-center relative sm:gap-[80px]">
            <div className={`h-[1px] ${shadowColor} absolute top-1/2 hidden sm:block left-1/4 right-1/2`}></div>
            <div className={`w-4 h-4 rounded-full border-[3px] ${bgColor} absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block`}></div>

            <motion.a variants={fadeInleft()} href={link} className="flex w-full relative justify-center sm:justify-start">
                <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
                    <img
                        className={`max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(15,10,246,0.6)]`}
                        src={image}
                        alt={`${title} Thumbnail`}
                    />
                    <span
                        className={`flex group-hover:-top-14 ease-jump duration-200 ${bgColor} sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2`}
                    >
                        {title}

                    </span>
                </div>
            </motion.a>

            <motion.div variants={fadeInRight()} className="w-full">
                <h3 className={`${textColor} font-bold text-2xl md:text-4xl`}>{title}</h3>
                <span className={`${textColor} text-base md:text-lg`}>{subtitle}</span>
                <p className="text-justify text-sm md:text-base mt-2">{description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill, index) => (
                        <li
                            key={index}
                            className="border rounded-[50px] border-[#999] hover:bg-[#1399a1] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

// Main Projects Component
const Projects = () => {
    const projectData = [
        {
            title: "Yaario",
            subtitle: "Social Media Platform",
            description: "Yaario is a full-stack social media platform I am building with features like login/signup, post sharing, likes/dislikes, stories visible to friends, real-time chat, friend requests, saved posts, and profile editing. It is built using React, Tailwind, Zustand, Node.js, Express, and MongoDB, with secure JWT auth, Cloudinary for media, and modular backend design.",
            skills: [
                "#Next.js",
                "#express.js",
                "#node.js",
                "TypeScript",
                "#mongoDB",
                "#mongoose",
                "#Tailwindcss",
                "RestApi",
                "#javascript",
                "#figma",
            ],
            link: "https://yaario-social-media-frontend.vercel.app",
            image: "/images/yaario-img.png",
            bgColor: "bg-[#15B392]",
            textColor: "text-[#D50B8B]",
            shadowColor: "bg-[#1788ae]",
        },
        {
            title: "Job Vista",
            subtitle: "Job Seeking platform for user and admin",
            description: "Job Vista is a college placement platform with student and admin panels. Students can upload resumes, search and filter jobs by category, location, or type, and apply for jobs. Admins can post jobs with image upload (Cloudinary), manage applications, and download applicant lists as CSV. Built using Next.js, Node.js, Express, MongoDB, and integrated with Nodemailer for email notifications.",
            skills: [
                "#Next.js",
                "#express.js",
                "#Acertinity UI",
                "#node.js",
                "TypeScript",
                "#mongoDB",
                "#mongoose",
                "#Tailwindcss",
                "RestApi",
                "#javascript",
                "#figma",
            ],
            link: "https://job-vista-frontend.vercel.app/login",
            image: "/images/jobVista.png",
            bgColor: "bg-[#15B392]",
            textColor: "text-[#1DCD9F]",
            shadowColor: "bg-[#1788ae]",
        },
        {
            title: "Quick Meal",
            subtitle: "Food delivery platform which deliver food",
            description:
                "Quick Meal is a feature-rich food delivery app designed to provide users with a seamless and efficient experience.The main goal of Quick Meal is to provide homemade-like food within 30 minutes. Our priority is customer health and taste.",
            skills: [
                "#react.js",
                "#Shadcn ui",
                "#Tailwindcss",
                "TypeScript",
                "#javascript",
                "#express",
                '#jsonWebTOken',
                "#mongoDB",
                "#components"
            ],
            link: "https://github.com/abhishekrathour07/Quick-Meal-website",
            image: "/images/food-delivery-website.png",
            bgColor: "bg-[#AF1740]",
            textColor: "text-orange-600",
            shadowColor: "bg-[#1788ae]",
        },
        {
            title: "Programmer Point",
            subtitle: "Platform for learning",
            description:
                "CodingNotes is an interactive platform designed to help developers and learners enhance their coding skills. It features well-structured tutorials, code snippets, and problem-solving exercises, making it a one-stop solution for mastering programming concepts.",
            skills: [
                "#Next.js",
                "#Shadcn ui",
                "#Acertinity ui",
                "#Tailwindcss",
                "TypeScript",
                "#javascript",
                "#figma",
                "#components"
            ],
            link: "https://coding-notes.vercel.app/",
            image: "/images/codingNotes.png",
            bgColor: "bg-[#AF1740]",
            textColor: "text-[#003092]",
            shadowColor: "bg-[#1788ae]",
        },


    ];

    return (
        <div className="max-w-screen-xl mx-auto px-8 relative pb-8 sm:pb-16">
            <h2 className="text-3xl sm:text-[40px] bg-inherit relative z-40 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae] mt-8">
                Latest Works
            </h2>
            <div className="mt-8 ">
                {projectData.map((project, index) => (
                    <div key={index} className="mt-12 sm:mt-20 ">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
