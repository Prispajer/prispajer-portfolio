import {Briefcase, Github, Home, Linkedin, Mail, MessageCircle, User} from "lucide-react";
import JavaScript from "../../public/images/JS.svg";
import TypeScript from "../../public/images/TypeScript.svg";
import CSharp from "../../public/images/CSharp.svg";
import HTML from "../../public/images/HTML.svg";
import CSS from "../../public/images/CSS.svg";
import Sass from "../../public/images/Sass.svg";
import React from "../../public/images/React.svg";
import NextJS from "../../public/images/NextJS.svg";
import Redux from "../../public/images/Redux.svg";
import Tailwind from "../../public/images/Tailwind.svg";
import Bulma from "../../public/images/Bulma.svg";
import NodeJS from "../../public/images/NodeJS.svg";
import ExpressJS from "../../public/images/ExpressJS.svg";
import DotNet from "../../public/images/DotNet.svg";
import Blazor from "../../public/images/Blazor.svg";
import Prisma from "../../public/images/Prisma.svg";
import PostgresSQL from "../../public/images/PostgresSQL.svg";
import Git from "../../public/images/Git.svg";


import type {NavigationItem} from "@/types/navigation.ts";
import type {PortfolioItem} from "@/types/portfolio.ts";
import type {SocialItem} from "@/types/social.ts";
import type {TechnologyItem} from "@/types/technology.ts";

export const portfolioItems: PortfolioItem[] = [
    {
        name: "RIGBA",
        image: "./images/drafts/Rigba-resized.jpg",
        stack: [
            "TypeScript", "React", "Next.js", "NextAuth.js", "InversifyJS", "TailwindCSS",
            "Prisma", "Stripe", "Redux Toolkit", "Zod", "REST API", "PostgreSQL", "Jest",
            "React Hook Form", "Custom React Hooks", "Resend",
        ],
        liveApp: "https://rigba-game-store.vercel.app/",
        sourceCode: "https://github.com/Prispajer/rigba-game-store",
        videoDemo: "https://www.youtube.com/watch?v=FaoslE0Mqc4",
        description:
            "Architected a scalable marketplace, integrating RAWG API for real-time synchronization. Integrated Stripe API for secure payments, implementing robust error handling and transactional integrity. Managed global application state with Redux Toolkit, while enforcing strict type-safety and complex form validation via Zod to eliminate runtime parsing errors.",
    },
    {
        name: "ProMediak",
        image: "./images/drafts/Promediak-resized.jpg",
        stack: [
            "TypeScript", "React", "Next.js", "TailwindCSS", "Radix UI", "Upstash Redis",
            "Nodemailer", "REST API",
        ],
        liveApp: "https://promediak-portfolio.vercel.app/",
        sourceCode: "https://github.com/Prispajer/promediak-portfolio",
        description:
            "Architected a high-performance media platform, prioritizing SEO, low latency, and stability during traffic spikes using Redis caching. Built responsive, accessible UI components with a focus on performance and seamless user experience.",
    },
    {
        name: "Huffman Algorithm",
        image: "./images/HuffmanAlgorithm.jpg",
        stack: ["C#", ".NET", "Blazor", "NPM", "Viz.js", "DotNetGraph"],
        sourceCode: "https://github.com/Prispajer/huffman-algorithm",
        description:
            "Engineered a high-efficiency data compression engine implementing the Huffman algorithm, focused on optimal tree construction and data structure handling. Integrated Viz.js via JS Interop to enable real-time visualization of algorithmic logic, effectively bridging C# core processing with interactive frontend rendering.",
    },
    {
        name: "Quarry Byte",
        image: "./images/QuarryByte.jpg",
        stack: ["C#", "ASP.NET MVC", "Blazor", "SQL Server", "REST API"],
        sourceCode: "https://github.com/Prispajer/quarry-byte-store",
        description:
            "Developed a game marketplace using ASP.NET MVC with server-side Blazor components. Implemented SQL Server data management for games and user accounts, with a RESTful API layer handling client-server communication.",
    },
    {
        name: "Suggor",
        image: "./images/Suggor.jpg",
        stack: ["C#", "Unity Engine", "Unity Packages"],
        sourceCode: "https://github.com/Prispajer/suggor-game",
        videoDemo: "https://www.youtube.com/watch?v=n5Nbwd-BqBI",
        description:
            "Built a 2D platformer game in Unity featuring checkpoint systems, health bar mechanics, and player regeneration. Collaborated as part of an engineering team, implementing core gameplay loops and UI systems.",
    },
    {
        name: "Memory Game",
        image: "./images/drafts/MemoryGame-resized.jpg",
        stack: ["TypeScript", "React", "Vite", "Zustand"],
        liveApp: "https://memory-game-go-online.vercel.app/",
        sourceCode: "https://github.com/Prispajer/memory-game-go-online",
        description:
            "Created a dynamic card matching game using React and TypeScript. Implemented randomized board generation for each playthrough, with Zustand managing application state for smooth, responsive gameplay.",
    },
    {
        name: "Treasure Pick",
        image: "./images/TreasurePick.jpg",
        stack: ["TypeScript", "Vite", "PixiJS", "Clean Architecture", "SOLID"],
        sourceCode: "https://github.com/Prispajer/treasure-pick",
        description:
            "Designed a modular browser game using TypeScript and PixiJS, following Clean Architecture and SOLID principles for isolated, scalable systems. Implemented dynamic chest mechanics with randomized outcomes and smooth UI transitions.",
    },
    {
        name: "Taskly",
        stack: [
            "C#", "ASP.NET Core", "MediatR", "EF Core", "Docker", "xUnit",
            ".NET 8", "PostgreSQL", "Docker Compose", "Swagger", "FluentValidation",
            "Makefile", "CQRS", "Clean Architecture", "Vertical Slice Architecture", "DDD",
        ],
        sourceCode: "https://github.com/Prispajer/taskly",
        description:
            "Designed using Vertical Slice Architecture and DDD to ensure strict domain logic encapsulation and high maintainability. Implemented a marker-interface driven dispatcher for command/query routing, using EF Core Interceptors and MediatR to ensure atomic consistency and decoupled domain event broadcasting.",
    },
    {
        name: "Messages Board",
        stack: [
            "JavaScript", "TypeScript", "React", "RTK Query", "ShadCN UI",
            "Node.js", "Sequelize", "Docker", "PostgreSQL", "REST API",
        ],
        sourceCode: "https://github.com/Prispajer/messages-board",
        description:
            "Built a fullstack CRUD application for message management. Architected the frontend with React, RTK Query for data fetching, and ShadCN UI components. Developed the backend using Node.js, Sequelize ORM, and PostgreSQL with Docker Compose orchestration.",
    },
    {
        name: "Order Matcher App",
        stack: [
            "Flutter", "Dart", "BLoC", "Clean Architecture", "Google Gemini AI", "REST API", "dummyjson.com",
        ],
        sourceCode: "https://github.com/Prispajer/order-matcher-app",
        description:
            "Developed a mobile application using Flutter and Dart with BLoC architecture. Integrated Google Gemini AI for natural language order parsing, matched products via external API, and calculated totals with structured table presentation.",
    },
    {
        name: "NewsPortalCMS",
        stack: [
            ".NET 8", "ASP.NET Core", "Entity Framework Core", "PostgreSQL",
            "Docker", "Docker Compose", "Swagger", "xUnit", "Makefile", "Clean Architecture",
        ],
        sourceCode: "https://github.com/Prispajer/newsportal-cms",
        description:
            "Engineered a content management system for articles and categories using .NET 8, Entity Framework Core, and PostgreSQL. Implemented Docker Compose deployment, Swagger API documentation, and Clean Architecture for maintainable, modular design.",
    },
];

export const technologyItems: TechnologyItem[] = [
    { image: `${JavaScript}`, name: "JavaScript", borderColor: "#FFD600", alt: "JS" },
    { image: `${TypeScript}`, name: "TypeScript", borderColor: "#1976D2", alt: "TypeScript" },
    { image: `${CSharp}`, name: "CSharp", borderColor: "#68217A", alt: "C#" },
    { image: `${HTML}`, name: "HTML", borderColor: "#E7A42B", alt: "HTML" },
    { image: `${CSS}`, name: "CSS", borderColor: "#0277BD", alt: "CSS" },
    { image: `${Sass}`, name: "Sass", borderColor: "#F06292", alt: "Sass" },
    { image: `${React}`, name: "React", borderColor: "#52E6FA", alt: "React" },
    { image: `${NextJS}`, name: "NextJS", borderColor: "#4B4B4B", alt: "Next.js" },
    { image: `${Redux}`, name: "Redux", borderColor: "#764ABC", alt: "Redux" },
    { image: `${Tailwind}`, name: "Tailwind", borderColor: "#3DAFBE", alt: "Tailwind" },
    { image: `${Bulma}`, name: "Bulma", borderColor: "#00D1B2", alt: "Bulma" },
    { image: `${NodeJS}`, name: "NodeJS", borderColor: "#6BAB55", alt: "NodeJS" },
    { image: `${ExpressJS}`, name: "ExpressJS", borderColor: "#202020", alt: "ExpressJS" },
    { image: `${DotNet}`, name: ".NET", borderColor: "#5C2D91", alt: "DotNet" },
    { image: `${Blazor}`, name: "Blazor", borderColor: "#8000FF", alt: "Blazor" },
    { image: `${Prisma}`, name: "Prisma", borderColor: "#D2D2D2", alt: "Prisma" },
    { image: `${PostgresSQL}`, name: "PostgreSQL", borderColor: "#6E78AC", alt: "PostgresSQL" },
    { image: `${Git}`, name: "Git", borderColor: "#EF473B", alt: "Git" },
];

export const navigationItems: NavigationItem[] = [
    { id: "hero", name: "Hero", icon: Home },
    { id: "about", name: "About", icon: User },
    { id: "portfolio", name: "Portfolio", icon: Briefcase },
    { id: "contact", name: "Contact", icon: Mail },
];

export const socialItems: SocialItem[] = [
    { icon: Github, link: "https://github.com/prispajer" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/adrian-kozie%C5%82/" },
    { icon: MessageCircle, link: "https://www.facebook.com/adikoxi/" },
    { icon: Mail, link: "mailto:koziel.adrian98@gmail.com" },
];