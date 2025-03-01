import { IconType } from "react-icons/lib";
import { RiNextjsFill, RiShieldKeyholeFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiZod,
  SiShadcnui,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiLinux,
  SiPassport,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export interface TechStacks {
  title: string;
  techStack: TechStack[];
}

export interface TechStack {
  title: string;
  icon: IconType;
  description?: string;
}
export interface Projects {
  name: string;
  description: string;
  images: string[];
  techStack: TechStack[];
  github?: string;
  liveUrl?: string;
  github_front?: string;
  github_back?: string;
}
export const TechStack: TechStacks[] = [
  {
    title: "Frontend",
    techStack: [
      {
        title: "Next.js",
        icon: RiNextjsFill,
        description:
          "A powerful React framework for building server-rendered and static web applications.",
      },
      {
        title: "React",
        icon: SiReact,
        description:
          "A JavaScript library for building user interfaces with a component-based approach.",
      },
      {
        title: "Tailwind",
        icon: SiTailwindcss,
        description:
          "A utility-first CSS framework for rapidly building modern and responsive UI designs.",
      },
      {
        title: "HTML",
        icon: SiHtml5,
        description:
          "The standard markup language for creating web pages and structuring content on the internet.",
      },
      {
        title: "CSS",
        icon: SiCss3,
        description:
          "A stylesheet language used to control the layout, appearance, and styling of web pages.",
      },
      {
        title: "ShadcnUi",
        icon: SiShadcnui,
        description:
          "A collection of pre-built, accessible UI components for React, built on top of Radix UI and Tailwind CSS.",
      },
    ],
  },
  {
    title: "Backend",
    techStack: [
      {
        title: "Express.js",
        icon: SiExpress,
        description:
          "A fast, unopinionated web framework for Node.js used to build scalable APIs and web applications.",
      },
      {
        title: "Node.js",
        icon: SiNodedotjs,
        description:
          "A runtime environment that allows JavaScript to be used for backend development, enabling scalable applications.",
      },
      {
        title: "Passport.js",
        icon: SiPassport,
        description:
          "A secure authentication library, it can support various authentication stratigies like credential and oauth.",
      },
    ],
  },
  {
    title: "Tools and Technologies",
    techStack: [
      {
        title: "Prisma",
        icon: SiPrisma,
        description:
          "A modern database ORM for Node.js and TypeScript, providing type-safe and efficient database queries.",
      },
      {
        title: "Auth.js",
        icon: RiShieldKeyholeFill,
        description:
          "A flexible authentication library for Next.js and React, supporting OAuth, credentials, and more.",
      },
      {
        title: "Git",
        icon: SiGit,
        description:
          "A version control system that helps track changes in code, collaborate, and manage software development.",
      },
      {
        title: "GitHub",
        icon: SiGithub,
        description:
          "A cloud-based platform for hosting, managing, and collaborating on Git repositories.",
      },
      {
        title: "Linux",
        icon: SiLinux,
        description:
          "An open-source operating system known for its stability, security, and flexibility for developers and servers.",
      },
      {
        title: "Zod",
        icon: SiZod,
        description:
          "A TypeScript-first schema validation library for ensuring data integrity in applications.",
      },
    ],
  },
  {
    title: "Database",
    techStack: [
      {
        title: "PostgreSQL",
        icon: SiPostgresql,
        description:
          "A powerful, open-source relational database known for its extensibility, reliability, and performance.",
      },
      {
        title: "Prisma",
        icon: SiPrisma,
        description:
          "A modern database ORM for Node.js and TypeScript, providing type-safe and efficient queries.",
      },
      {
        title: "MySQL",
        icon: SiMysql,
        description:
          "A widely used open-source relational database management system known for its speed and scalability.",
      },
      {
        title: "MongoDB",
        icon: SiMongodb,
        description:
          "A NoSQL database that stores data in flexible, JSON-like documents, ideal for scalable applications.",
      },
    ],
  },
];

export const ProjectsData: Projects[] = [
  {
    name: "CMS for all: Omnicms",
    description:
      "OmniCMS is a robust and scalable content management system designed to power and manage multiple e-commerce websites from a single platform. It enables seamless product management, inventory synchronization, and content customization across multiple storefronts.",
    techStack: [
      {
        icon: RiNextjsFill,
        title: "Next.js",
      },
      {
        icon: IoLogoJavascript,
        title: "JavaScript",
      },
      {
        icon: SiTypescript,
        title: "TypeScript",
      },
      {
        icon: SiPrisma,
        title: "Prisma",
      },
      {
        icon: BiLogoPostgresql,
        title: "PostgreSQL",
      },
      {
        icon: SiZod,
        title: "Zod",
      },
      {
        icon: SiShadcnui,
        title: "ShadcnUi",
      },
    ],
    liveUrl: "https://storecms.vercel.app",
    github: "https://github.com/e-commerce-cms",
    images: [
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739156406/ekpuzwa3f5t5mg1ylxfu.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739156404/po4oxkfuelk4nvrbsq6l.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739156404/dci0qhcdbfh6kwhpwfbj.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739156404/cspqeirbzd7fuoi3c9xf.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739156407/rpxszk1nkptiezgcuagj.jpg",
    ],
  },
  {
    name: "Clothing Store",
    description:
      "A E-commerce website based on clothing store. Elegant design, responsive and interactive UI. Functional website, backend is the omni store, using it as cms. Made using Next.js shadcnui and other js libraries",
    techStack: [
      {
        icon: RiNextjsFill,
        title: "Next.js",
      },
      {
        icon: IoLogoJavascript,
        title: "JavaScript",
      },
      {
        icon: SiTypescript,
        title: "TypeScript",
      },
      {
        icon: SiZod,
        title: "Zod",
      },
      {
        icon: SiShadcnui,
        title: "ShadcnUi",
      },
    ],
    images: [
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739865666/uznssxiltyobosqtqys4.jpg",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739865664/nmfl2isuudrgvnolz4yd.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739865668/fnvs9ouq7bfyglfh6y2i.jpg",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739865664/kxrhjcy4je7bxwwbgdja.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739865666/fko8q4vqh5nenblmyrp2.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739865664/vtz8o2qfqexoags2j0vh.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739865664/srznqhkulmvg7kwk6ewa.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739865664/yaurdib003b0su0h0qcn.png",
    ],
    github: "https://github.com/BinayaShrestha556/e-commerce-new",
    liveUrl: "https://clothingstorez.vercel.app",
  },
  {
    name: "NewTube",
    techStack: [
      {
        icon: RiNextjsFill,
        title: "Next.js",
      },
      {
        icon: IoLogoJavascript,
        title: "JavaScript",
      },
      {
        icon: SiTypescript,
        title: "TypeScript",
      },
      {
        icon: SiExpress,
        title: "Express.js",
      },
      {
        icon: SiNodedotjs,
        title: "Node.js",
      },
      {
        icon: SiPassport,
        title: "Passport.js",
      },
      {
        icon: SiMongodb,
        title: "MongoDb",
      },
    ],
    description:
      "A video sharing platform where you can share videos, like videos, comment and subscribe. Similar to youtube but better. Created using Next.js for frontend, express js for the backend",
    images: [
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739863565/liyefunnw6b8kwudsrmq.jpg",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739863564/rjanvie7by9fyakj1slt.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739863565/lvkn1rzkm56ote8ipa6g.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739863565/w9hnisaqsh5qymh7uods.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739863578/vdfth1qdq8omybnrpfnw.png",
      "https://res.cloudinary.com/dtnzu6ts5/image/upload/v1739863569/qr5uft2ri2oiip4lbzm2.jpg",
    ],
    github_front: "https://github.com/BinayaShrestha556/Newtube_frontend",
    github_back: "https://github.com/BinayaShrestha556/backend_project",
    liveUrl: "https://newtubebybinaya.vercel.app",
  },
];
