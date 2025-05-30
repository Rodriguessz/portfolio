import { IconCalendarWeek, IconBriefcase, IconSchool, IconExternalLink } from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/LinkPreview";

export const experienceEN = [
  {
    title: "Alstom",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300" />
          <h4 className="text-base md:text-2xl text-center">2025 - Present</h4>
        </div>

        <div className="w-full flex gap-3 items-center mt-2">
          <IconBriefcase className="text-black dark:text-zinc-500" />
          <h5 className="text-sm md:text-base text-black dark:text-zinc-500">Software Verification and Validation Intern</h5>
        </div>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          Intern in the Software Verification and Validation area, contributing to ensure the quality and safety of embedded systems used in metro lines in Brazil and around the world.
        </p>
      </div>
    ),
  },

  {
    title: "Worklab Sistemas",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300" />
          <h4 className="text-base md:text-2xl text-center">2024 - 2025</h4>
        </div>

        <div className="w-full flex gap-3 items-center mt-2">
          <IconBriefcase className="text-black dark:text-zinc-500" />
          <h5 className="text-sm md:text-base text-black dark:text-zinc-500">Junior Software Engineer</h5>
        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Development of fullstack solutions focused on scalability and maintainability using <strong>PHP (Laravel), Node.js, React.js, Vue.js, Tailwind CSS.</strong>
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Design and implementation of responsive and accessible user interfaces with a focus on performance, usability, and <strong>UI/UX</strong> best practices using <strong>React and Tailwind CSS.</strong>
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Refactoring of legacy system in <strong>PHP 5</strong>, migrating to a modern <strong>RESTful API</strong> with <strong>Laravel</strong>, applying <strong>Clean Architecture</strong> principles and software engineering best practices.
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Bug fixing and continuous maintenance in both legacy systems and new <strong>APIs</strong>, working with technical support tickets to ensure production stability.
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Version control and team collaboration with <strong>Git</strong>, using <strong>Gitflow</strong> workflows, task-specific branches, and <strong>pull requests</strong> for review and continuous integration.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="/filtersFeature.png"
            alt="Filters Feature"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
          <img
            src="/dinamicTable.png"
            alt="Dynamic Table"
            className="h-28 w-full rounded-lg object-cover md:h-38 lg:h-50 hidden sm:block"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Ybox",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300" />
          <h4 className="text-base md:text-2xl text-center">2022 - 2024</h4>
        </div>

        <div className="w-full flex gap-3 items-center mt-2">
          <IconBriefcase className="text-black dark:text-zinc-500" />
          <h5 className="text-sm md:text-base text-black dark:text-zinc-500">Software Development Intern</h5>
        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Development of landing pages with custom flows for client campaigns, using <strong>
              PHP on the back-end and HTML, CSS, Bootstrap, and JavaScript on the front-end.
            </strong>
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Automation of internal processes for campaign setup and testing, significantly reducing time between creation and deployment.
          </p>

          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Creation of <strong>JavaScript</strong> scripts for lead capture and integration via Google Tag Manager, ensuring accurate tracking of user interactions.
          </p>
        </div>
      </div>
    ),
  },
];



export const educationEN = [
  {
    title: "Software Engineering",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300 " />
          <h4 className="text-base md:text-2xl text-center">2023 - 2027</h4>
        </div>

        <div className="w-full flex gap-3 items-center mt-2">
          <IconSchool className="text-black dark:text-zinc-500 " />
          <h5 className="text-sm md:text-base text-black dark:text-zinc-500">FIAP - Faculdade de Informática e Administração Paulista</h5>
        </div>

        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          - Development of full-stack applications using Java (Spring + Spring Security), emphasizing object-oriented best practices, SOLID principles, and DDD architecture.
        </p>

        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          - Building responsive interfaces with HTML, CSS, JavaScript, React Native, Next.js, and TailwindCSS, applying UX/UI design principles.
        </p>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          - Implementation of classic data structures such as stacks, queues, linked lists, binary trees, and graphs using Python.
        </p>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          - Design and modeling of relational databases with Oracle, from conceptual, logical, and physical models to real-world implementation in integrated systems.
        </p>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          - Development of Internet of Things (IoT) projects using Arduino and C++, focusing on automation and sensor/actuator integration.
        </p>
        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          - In-depth study of computer networks, including OSI and TCP/IP models, UDP protocol, and simulation/analysis with tools such as Cisco Packet Tracer.
        </p>

        <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
          - Participation in multidisciplinary projects focused on practical learning, cross-functional integration, and solving real-world problems.
        </p>

        <LinkPreview className="font-bold flex mb-4 gap-1 items-center" url="https://github.com/FI4P/">
          Visit the repository
          <IconExternalLink size={18} />
        </LinkPreview>
      </div>
    ),
  },

  {
    title: "Fullstack Web Development",
    content: (
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5 items-center">
          <IconCalendarWeek className="text-black dark:text-zinc-300 " />
          <h4 className="text-base md:text-2xl text-center">2020 - 2022</h4>
        </div>

        <div className="w-full flex gap-3 items-center mt-2">
          <IconSchool className="text-black dark:text-zinc-500 " />
          <h5 className="text-sm md:text-base text-black dark:text-zinc-500">SENAI School of Informatics</h5>
        </div>

        <div className="flex flex-col g-1">
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - User interface implementation with <strong>React.js, using Tailwind CSS and Bootstrap.</strong>
          </p>
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - API development using Node.js and Express.js, Java and Spring Boot.
          </p>
          <p className="mb-8 font-normal text-neutral-800 md:text-sm dark:text-zinc-300 leading-snug tracking-wide text-sm sm:text-base md:text-1xl">
            - Integration with Oracle and MySQL databases.
          </p>

          <LinkPreview className="font-bold flex mb-4 gap-1 items-center" url="https://github.com/Senai-FullStack">
            Visit the repository
            <IconExternalLink size={18} />
          </LinkPreview>
        </div>
      </div>
    ),
  },
];


export const certificationsEN = [
  {
    quote:
      "Fundamentals of HTML, CSS, JavaScript, Git, GitHub, React, and Node.js, along with soft skills for the programming market.",
    name: "Explorer",
    designation: "Rocketseat",
    src: "/explorer.png",
    href: "https://app.rocketseat.com.br/certificates/b593a829-4d40-4a9c-9d16-12cf906ee38e",
    date: "2025-05-02"
  },

  {
    quote:
      "Usage of PM2; Deploy with Render; Environment variables; Deploy with Netlify; Automated testing with Jest.",
    name: "Deploy and Automated Testing",
    designation: "Rocketseat",
    src: "/deploy.png",
    href: "https://app.rocketseat.com.br/certificates/438c4935-f536-48ec-8a11-f2f2e923f6c8",
    date: "2024-12-17"
  },

  {
    quote:
      "Authentication in back-end, image upload, API integration in Node.js with a front-end in React.js.",
    name: "RESTful API",
    designation: "Rocketseat",
    src: "/api.png",
    href: "https://app.rocketseat.com.br/certificates/17084d50-8cc3-4a38-b65d-a7ba7570215d",
    date: "2024-11-14"
  },

  {
    quote:
      "ReactJS fundamentals; Vite; styled-components; custom fonts; components; props; routing; navigation; file structure; running ReactJS projects.",
    name: "React",
    designation: "Rocketseat",
    src: "/react.png",
    href: "https://app.rocketseat.com.br/certificates/42946ae9-61f0-47ed-a44e-5a981d6977a6",
    date: "2024-10-11"
  },

  {
    quote:
      "API creation with Node.js and Express; HTTP methods; routes; middlewares; relational databases; SQL commands; SQLite; DDL/DML; dependency managers; data encryption; error handling.",
    name: "Node.JS",
    designation: "Rocketseat",
    src: "/node.png",
    href: "https://app.rocketseat.com.br/certificates/6176e94f-94fb-40c8-93c0-4faa3b81f4da",
    date: "2024-09-06"
  },

  {
    quote:
      "Introduction to Git; version control systems; HEAD; basic commands; git diff; amend; restore; GitHub repositories; .gitignore and .gitkeep; clone; pull; README.md creation.",
    name: "Git",
    designation: "Rocketseat",
    src: "/git.png",
    href: "https://app.rocketseat.com.br/certificates/01716307-c318-456a-be2f-20105cd163b8",
    date: "2024-05-15"
  },

  {
    quote:
      "Data types, operators, loops, conditionals, functions, DOM, callbacks, clean code principles, modularization, scope, factory pattern, dependency injection, file manipulation, SPA, events, routes, async logic, OOP concepts, destructuring, API calls, immutability.",
    name: "JavaScript",
    designation: "Rocketseat",
    src: "/js.png",
    href: "https://app.rocketseat.com.br/certificates/40642c14-734d-4908-92ce-36d69365809b",
    date: "2024-05-28"
  },

  {
    quote:
      "Web structure, HTML elements and semantics, accessibility, CSS concepts, selectors, animations, grid and flexbox, forms, inputs, CSS variables, responsiveness.",
    name: "HTML & CSS",
    designation: "Rocketseat",
    src: "/htmlcss.png",
    href: "https://app.rocketseat.com.br/certificates/137b9ce2-1ef5-4b52-8fc4-1deba22a00b4",
    date: "2024-04-30"
  },

  {
    quote:
      "Development of a front-end application in ReactJS, using components, props, state management, TypeScript typing, Vite tooling, responsive UI with TailwindCSS, API integration, and URL state handling.",
    name: "NLW Unite - React",
    designation: "Rocketseat",
    src: "/nlwreact.png",
    href: "https://app.rocketseat.com.br/certificates/b8b3494f-130b-4fa3-b69c-0adc678c80c6",
    date: "2024-04-05"
  },

  {
    quote:
      "Back-end application development in Node.js using TypeScript, Fastify, Prisma ORM, Docker (PostgreSQL, Redis), Zod for data validation, and WebSocket for real-time communication.",
    name: "NLW Unite - NodeJS",
    designation: "Rocketseat",
    src: "/nlwnode.png",
    href: "https://app.rocketseat.com.br/certificates/76e0fc19-5584-4beb-b309-12d90f4e91de",
    date: "2024-02-09"
  },

  {
    quote:
      "Computer networks are a set of interconnected devices that share resources, data, and services, enabling communication between them.",
    name: "Computer Networks",
    designation: "FIAP",
    src: "/redes.png",
    href: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=464aaa4b276c4210dfd14fed5c2ae182&action=view",
    date: "2025-04-28"
  },

  {
    quote:
      "This course presents cloud computing concepts, from architecture and services to implementation and deployment models.",
    name: "Cloud Fundamentals",
    designation: "FIAP",
    src: "/cloud.png",
    href: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=91105a3ec279d18ad84d35b5e6a7cd85&action=view",
    date: "2025-04-28"
  },

  {
    quote:
      "Installing Python 3; handling user input; value testing; game flow; loop patterns; random number generation; scoring logic; better code organization; Python vs C comparison.",
    name: "Python",
    designation: "Alura",
    src: "/python.png",
    href: "https://cursos.alura.com.br/certificate/coderenzo/python-introducao-a-linguagem",
    date: "2022-11-21"
  }
];
