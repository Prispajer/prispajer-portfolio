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
import MemoryGame from "../../public/images/Memory Game.jpg";

export const portfolioItems = [
    {
        name: "RIGBA",
        image: `${Rigba}`,
        stack: [
            "TypeScript","React","Next.js","NextAuth.js","InversifyJS","TailwindCSS",
            "Prisma","Stripe","Redux Toolkit","Zod","REST API","PostgresSQL","Jest",
            "React Hook Form","Custom React Hooks","Resend"
        ],
        liveApp: "https://rigba-game-store.vercel.app/",
        sourceCode: "https://github.com/Prispajer/rigba-game-store",
        videoDemo: "https://www.youtube.com/watch?v=FaoslE0Mqc4",
        description:
            "RIGBA is a fullstack game store built with TypeScript, React, and Next.js. It supports authentication, payments via Stripe, and live API data. The project uses Redux Toolkit and Prisma with PostgreSQL for state and database management."
    },
    {
        name: "Huffman Algorithm",
        image: `${HuffmanAlgorithm}`,
        stack: ["C#","ASP.NET","NPM","DotNetGraph","Viz.js","Blazor"],
        sourceCode: "https://github.com/Prispajer/huffman-algorithm",
        description:
            "Huffman Algorithm is a data compression tool implementing Huffman coding. It provides both encoding and decoding features for text and binary files. The project includes visualization using Blazor, DotNetGraph, and Viz.js."
    },
    {
        name: "Quarry Byte",
        image: `${QuarryByte}`,
        stack: ["C#","ASP.NET MVC","Blazor","SQL Server","REST API"],
        sourceCode: "https://github.com/Prispajer/quarry-byte-store",
        description:
            "Quarry Byte is a student project game store built with ASP.NET MVC. It uses SQL Server to manage games and user data. The interface is developed with Blazor and communicates through a REST API."
    },
    {
        name: "Suggor",
        image: `${Suggor}`,
        stack: ["C#","Unity Engine","Unity Packages"],
        sourceCode: "https://github.com/Prispajer/suggor-game",
        videoDemo: "https://www.youtube.com/watch?v=n5Nbwd-BqBI",
        description:
            "Suggor is a 2D platformer game created in Unity. It features checkpoints, health bars, and regeneration mechanics. The project was developed collaboratively as part of an engineering team."
    },
    {
        name: "Memory Game",
        image: `${MemoryGame}`,
        stack: ["TypeScript","React","Vite","Zustand"],
        liveApp: "https://memory-game-go-online.vercel.app/",
        sourceCode: "https://github.com/Prispajer/memory-game-go-online",
        description:
            "Memory Game is a classic card matching game built with React and TypeScript. The board is dynamically generated for each playthrough. State management is handled with Zustand for smooth and responsive gameplay."
    },
    {
        name: "Taskly",
        image: "",
        stack: [
            ".NET 8","ASP.NET Core","Entity Framework Core","PostgreSQL","Docker",
            "Docker Compose","Swagger","xUnit","FluentValidation","Makefile","CQRS","Clean Architecture"
        ],
        sourceCode: "https://github.com/Prispajer/taskly",
        description:
            "Taskly is a modular task management system using CQRS and Clean Architecture. It is built with .NET 8, EF Core, and PostgreSQL. The project includes Docker setup, Swagger documentation, and unit tests with xUnit."
    },
    {
        name: "Messages Board",
        image: "",
        stack: [
            "JavaScript","TypeScript","React","RTK Query","ShadCN UI",
            "Node.js","Sequelize","Docker","PostgreSQL","REST API"
        ],
        sourceCode: "https://github.com/Prispajer/messages-board",
        description:
            "Messages Board is a fullstack CRUD app for managing messages. The frontend uses React, RTK Query, and ShadCN UI. The backend is built with Node.js, Sequelize, and PostgreSQL, with Docker Compose for setup."
    },
    {
        name: "Order Matcher App",
        image: "",
        stack: [
            "Flutter","Dart","BLoC","Clean Architecture","Google Gemini AI","REST API","dummyjson.com"
        ],
        sourceCode: "https://github.com/Prispajer/order-matcher-app",
        description:
            "Order Matcher App is a mobile application built with Flutter and Dart. It parses text orders using Google Gemini AI and matches products from dummyjson.com. The app calculates totals and presents results in a clear table."
    },
    {
        name: "NewsPortalCMS",
        image: "",
        stack: [
            ".NET 8","ASP.NET Core","Entity Framework Core","PostgreSQL",
            "Docker","Docker Compose","Swagger","xUnit","Makefile","Clean Architecture"
        ],
        sourceCode: "https://github.com/Prispajer/newsportal-cms",
        description:
            "NewsPortalCMS is a CMS system for managing articles and categories. It is built with .NET 8, EF Core, and PostgreSQL. The project uses Docker Compose, Swagger documentation, and Clean Architecture for modular design."
    }
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