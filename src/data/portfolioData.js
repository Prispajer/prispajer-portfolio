import Rigba from "../../public/images/Rigba.jpg";
import HuffmanAlgorithm from "../../public/images/HuffmanAlgorithm.jpg";
import QuarryByte from "../../public/images/QuarryByte.jpg";
import Suggor from "../../public/images/Suggor.jpg";
import ToDoList from "../../public/images/To Do List.jpg";
import Countries from "../../public/images/API Countries.jpg";

const portfolioData = [
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
    github: "https://github.com/Prispajer/edge-ledger",
    description:
      "Suggor is a 2D platformer game created as part of an engineering team project during studies. The game features a checkpoint system, health bars, and health regeneration, allowing players to navigate levels and fight opponents. The project was developed by a team, utilizing logical thinking and problem-solving skills.",
  },
  {
    name: "To Do List App",
    image: `${ToDoList}`,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://prispajer-to-do-list.netlify.app",
    github: "https://github.com/Prispajer/to-do-list",
    description:
      "A straightforward To Do List app built with HTML, CSS, and JavaScript, allowing users to add, edit, and manage tasks with an intuitive, responsive interface.",
  },
  {
    name: "REST API Countries",
    image: `${Countries}`,
    technologies: ["React", "Sass", "JavaScript", "REST API"],
    link: "https://prispajer-rest-api.netlify.app/",
    github: "https://github.com/Prispajer/to-do-list",
    description:
      "The application features seamless toggling between light and dark modes, country filtering and searching capabilities, and provides detailed information about each country.",
  },
];

export default portfolioData;
