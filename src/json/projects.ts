import Dwello from "../../public/images/dwello.png";
import GentPortfolio from "../../public/images/gentportfolio.png";
import ChuckNorris from "../../public/images/chuckNorris.png";
import Thisproject from "../../public/images/thisproject.png";
import innovemia from "../../public/images/innovemia.png";
import Metdaan from "../../public/images/metdaan.png";
import Pabau from "../../public/images/pabau.png";

export const slides = [
  {
    id: 0,
    title: "This Project",
    technologies: [
      "Next Js",
      "TypeScript",
      "Gsap",
      "Tailwind CSS",
      "Express Js",
    ],
    content:
      "This personal portfolio website showcases my skills, projects, and experiences. Built with Next.js, TypeScript, GSAP for animations, and Tailwind CSS for styling, it is designed to be responsive and visually appealing, providing a great user experience on both desktop and mobile devices.",
    image: Thisproject,
    githubLink: "https://github.com/Genthh/personalPortfolio",
    deploymentLink: "https://pirrox.dev",
  },
  {
    id: 1,
    title: "Pabau",
    technologies: [
      "Next Js",
      "TypeScript",
      "Less",
      "GraphQL",
      "Hasura",
      "Prisma",
    ],
    content:
      "Pabau is a robust platform built with Next.js, utilizing LESS for styling, and leveraging GraphQL with Hasura and Prisma for efficient data management. I was part of the team working on this project, contributing to its development and performance optimization.",
    image: Pabau,
    githubLink: "https://github.com/Genthh/Chuck-Norris-jokes",
    deploymentLink: "https://pabau.com/",
  },

  {
    id: 2,
    title: "Gent Portfolio V1",
    technologies: ["Next Js", "Three js", "Gsap", "Tailwind CSS"],
    content:
      "Gent Portfolio V1 is a modern digital showcase of personal projects. Built with Next.js for performance, it features immersive 3D elements using Three.js, with smooth animations powered by GSAP. Tailwind CSS ensures a responsive and clean.",
    image: GentPortfolio,
    githubLink: "https://github.com/Genthh/gent-hulaj-portfolio",
    deploymentLink: "https://gent-hulaj.vercel.app/",
  },

  {
    id: 3,
    title: "Innovemia Academy",
    technologies: ["Next Js", "i18n", "Sass"],
    content:
      "Innovemia Academy is a versatile platform built with Next.js, offering seamless multilingual support through i18n and featuring a sleek, responsive design powered by Sass. It delivers a user-friendly and engaging experience, tailored for a wide audience, ensuring accessibility and smooth navigation across devices.",
    image: innovemia,
    githubLink: "https://github.com/Genthh/Chuck-Norris-jokes",
    deploymentLink: "https://innovemia.academy/",
  },
  {
    id: 4,
    title: "MetDaan",
    technologies: ["Next Js", "TypeScript", "Sass"],
    content:
      "MetDaan is a modern platform built with Next.js for fast performance and seamless navigation. Styled with Sass, it offers a sleek, responsive design that adapts across devices. By combining advanced technology with intuitive design, MetDaan ensures an engaging and high-quality user experience.",
    image: Metdaan,
    githubLink: "https://github.com/Genthh/Chuck-Norris-jokes",
    deploymentLink: "https://metdaan.media/",
  },
  {
    id: 5,
    title: "Dwello Project",
    technologies: ["Next Js", "TypeScript", "Gsap", "Tailwind CSS"],
    content:
      "The Dwello app is designed to help users find their perfect home with an interactive and visually appealing interface. The application leverages the power of Next.js for server-side rendering and GSAP for smooth and engaging animations.",
    image: Dwello,
    githubLink: "https://github.com/Genthh/dwello",
    deploymentLink: "https://dwello-g5mg.vercel.app/",
  },
  {
    id: 6,
    title: "Chuck Norris Jokes",
    technologies: ["Next Js", "Tailwind CSS"],
    content:
      "Chuck Norris Jokes is a fun and interactive web application that fetches and displays random Chuck Norris jokes. Built with Next.js for performance. Tailwind CSS ensures a responsive and clean user interface.",
    image: ChuckNorris,
    githubLink: "https://github.com/Genthh/Chuck-Norris-jokes",
    deploymentLink: "https://chuck-norris-jokes-blue.vercel.app/",
  },
];
