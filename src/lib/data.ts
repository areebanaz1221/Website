
import { Link, ProjectInfo } from "./types"

export const links: Link[] = [
    {
        nameEng: "Home",
        hash: "#home",
    },
    {
        nameEng: "About",
        hash: "#about",
    },
    {
        nameEng: "Projects",
        hash: "#projects",
    },
    {
        nameEng: "Skills",
        hash: "#skills",
    },
    {
        nameEng: "Contact",
        hash: "#contact",
    },
];

export const projectsData: ProjectInfo[] = [
    {
        title: "Hackathon Milestone",
        description: "A hackathon project that showcases a real-time chat application using React, Next.js, and MongoDB.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", " NodeJS"],
        imageUrl: "/hackathon.jpg",
        link: "https://github.com/areebanaz1221/Hackathon-Milestones.git",
    },
    {
        title: "OOP My_Bank",
        description: "A simple banking application in Java with classes for Bank, Account, and Customer.",
        tags: ["Java", "Object-Oriented Programming"],
        imageUrl: "/bank.jpg",
        link: "https://github.com/areebanaz1221/Oop_MyBank.git",
    },
    {
        title: "Countdown",
        description: "A simple countdown timer application using Javascript.",
        tags: ["Javascript", "TypeScript"],
        imageUrl: "/countdown.jpg",
        link: "https://github.com/areebanaz1221/Countdown.git",
    },
    {
    title: "Student Management System",
    description :" A simple student management system project",
        tags: ["Typescript", "Javascript"],
        imageUrl: "/student ms.png",
        link: "https://github.com/areebanaz1221/Student_Management_System.git",
    },
    {
    title: "CLI Advanture Game",
    description: "A simple text-based adventure game using Node.js and Inquirer.",
        tags: ["Node.js", "Javascript", "Inquirer"],
        imageUrl: "/game.webp",
        link: "https://github.com/areebanaz1221/CLI_Adventure_Game.git",
    },
];

export const SkillsData = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux Toolkit",
    "Express",
    "Framer Motion",
];