import {Briefcase, Github, Home, Linkedin, Mail, MessageCircle, User} from "lucide-react";
import JavaScript from "../../public/images/JS.svg";
import TypeScript from "../../public/images/TypeScript.svg";
import CSharp from "../../public/images/CSharp.svg";
import HTML from "../../public/images/HTML.svg";
import CSS from "../../public/images/CSS.svg";
import Sass from "../../public/images/Sass.svg";
import React from "../../public/images/React.svg";
import NextJS from "../../public/images/Nextjs.svg";
import Redux from "../../public/images/Redux.svg";
import Tailwind from "../../public/images/Tailwind.svg";
import Bulma from "../../public/images/Bulma.svg";
import DotNet from "../../public/images/DotNet.svg";
import Blazor from "../../public/images/Blazor.svg";
import Prisma from "../../public/images/Prisma.svg";
import PostgresSQL from "../../public/images/PostgresSQL.svg";
import Git from "../../public/images/Git.svg";
import Rigba from "../../public/images/Rigba.jpg";
import HuffmanAlgorithm from "../../public/images/HuffmanAlgorithm.jpg";
import QuarryByte from "../../public/images/QuarryByte.jpg";
import Suggor from "../../public/images/Suggor.jpg";
import Countries from "../../public/images/API Countries.jpg";
import MemoryGame from "../../public/images/Memory Game.jpg";

export const portfolioItems = [
    {
        name: "RIGBA",
        image: `${Rigba}`,
        technologies: [
            "TypeScript",
            "React",
            "Next.js",
            "NextAuth.js",
            "InversifyJS",
            "TailwindCSS",
            "Prisma",
            "Stripe",
            "Redux Toolkit",
            "Zod",
            "REST API",
            "PostgresSQL",
            "Jest",
            "React Hook Form",
            "Custom React Hooks",
            "Resend",
        ],
        link: "https://www.youtube.com/watch?v=FaoslE0Mqc4",
        github: "https://github.com/Prispajer/rigba-game-store",
        description:
            "RIGBA Data-Driven Store is a fullstack application built with TypeScript, React, and Next.js, based on a REST architecture and supporting Server-Side Rendering. It features live data from an API to display the latest games, integrates Stripe for payments, NextAuth.js for authentication, and uses Redux Toolkit for state management.",
    },
    {
        name: "Huffman Algorithm",
        image: `${HuffmanAlgorithm}`,
        technologies: ["C#", "ASP.NET", "NPM", "DotNetGraph", "Viz.js", "Blazor"],
        github: "https://github.com/Prispajer/huffman-algorithm",
        description:
            "Huffman Algorithm is a data compression tool that implements the Huffman coding technique to reduce the size of input data (such as text files, binary files, or images). The project includes both encoding and decoding capabilities, allowing users to compress data efficiently while maintaining its integrity.",
    },
    {
        name: "Quarry Byte",
        image: `${QuarryByte}`,
        technologies: ["C#", "ASP.NET MVC", "Blazor", "SQL Server", "REST API"],
        github: "https://github.com/Prispajer/quarry-byte-store",
        description:
            "QuarryByte is a student project developed in collaboration with a group of peers under our university index numbers. The application is a modern game store built with ASP.NET and follows the MVC architecture, with a SQL database for managing game and user data.",
    },
    {
        name: "Suggor",
        image: `${Suggor}`,
        technologies: ["C#", "Unity Engine", "Unity Packages"],
        link: "https://www.youtube.com/watch?v=n5Nbwd-BqBI",
        github: "https://github.com/Prispajer/suggor-game",
        description:
            "Suggor is a 2D platformer game created as part of an engineering team project during studies. The game features a checkpoint system, health bars, and health regeneration, allowing players to navigate levels and fight opponents. The project was developed by a team, utilizing logical thinking and problem-solving skills.",
    },
    {
        name: "Memory Game",
        image: `${MemoryGame}`,
        technologies: ["TypeScript", "React", "Vite", "Zustand"],
        link: "https://memory-game-go-online.vercel.app/",
        github: "https://github.com/Prispajer/memory-game-go-online",
        description:
            "A classic memory game built with React and TypeScript. The game challenges players to find all matching card pairs on a dynamically generated board, with smooth UI and responsive gameplay.",
    },
    {
        name: "REST API Countries",
        image: `${Countries}`,
        technologies: ["React", "Sass", "JavaScript", "REST API"],
        link: "https://prispajer-rest-api.netlify.app/",
        github: "https://github.com/Prispajer/rest-api-countries",
        description:
            "The application features seamless toggling between light and dark modes, country filtering and searching capabilities, and provides detailed information about each country.",
    },
];

export const technologyItems = [
    {
        image: `${JavaScript}`,
        name: "JavaScript",
        borderColor: "#FFD600",
        alt: "JS",
    },
    {
        image: `${TypeScript}`,
        name: "TypeScript",
        borderColor: " #1976D2",
        alt: "TypeScript",
    },
    {
        image: `${CSharp}`,
        name: "CSharp",
        borderColor: "#68217A",
        alt: "C#",
    },
    {
        image: `${HTML}`,
        name: "HTML",
        borderColor: "#E7A42B",
        alt: "HTML",
    },
    {
        image: `${CSS}`,
        name: "CSS",
        borderColor: "#0277BD",
        alt: "CSS",
    },
    {
        image: `${Sass}`,
        name: "Sass",
        borderColor: "#F06292",
        alt: "Sass",
    },
    {
        image: `${React}`,
        name: "React",
        borderColor: "#52E6FA",
        alt: "React",
    },
    {
        image: `${NextJS}`,
        name: "NextJS",
        borderColor: "#4B4B4B",
        alt: "Next.js",
    },
    {
        image: `${Redux}`,
        name: "Redux",
        borderColor: "#764ABC",
        alt: "Redux",
    },
    {
        image: `${Tailwind}`,
        name: "Tailwind",
        borderColor: "#3DAFBE",
        alt: "Tailwind",
    },
    {
        image: `${Bulma}`,
        name: "Bulma",
        borderColor: "#00D1B2",
        alt: "Bulma",
    },
    {
        image: `${DotNet}`,
        name: ".NET",
        borderColor: "#5C2D91",
        alt: "DotNet",
    },
    {
        image: `${Blazor}`,
        name: "Blazor",
        borderColor: "#8000FF",
        alt: "Blazor",
    },
    {
        image: `${Prisma}`,
        name: "Prisma",
        borderColor: "#D2D2D2",
        alt: "Prisma",
    },
    {
        image: `${PostgresSQL}`,
        name: "PostgreSQL",
        borderColor: "#6E78AC",
        alt: "PostgresSQL",
    },
    {
        image: `${Git}`,
        name: "Git",
        borderColor: "#EF473B",
        alt: "Git",
    },
];

export const navigationItems = [
    {id: "hero", name: "Hero", icon: Home},
    {id: "about", name: "About", icon: User},
    {id: "portfolio", name: "Portfolio", icon: Briefcase},
    {id: "contact", name: "Contact", icon: Mail},
]

export const socialItems = [
    {icon: Github, link: "https://github.com/prispajer"},
    {icon: Linkedin, link: "https://www.linkedin.com/in/adrian-kozie%C5%82/"},
    {icon: MessageCircle, link: "https://www.facebook.com/adikoxi/"},
    {icon: Mail, link: "mailto:koziel.adrian98@gmail.com"},
]