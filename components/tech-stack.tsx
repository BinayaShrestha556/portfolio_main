import React from "react";
import Card from "./ui/card";
import Reveal from "./animated-components/reveal";

const TechStack = () => {
  return (
    <div id="tech_stacks" className="lg:w-[80%] md:w-[90%] w-full mt-10  flex flex-col pt-10 justify-center p-1 m-auto">
      <Reveal>TECH STACKS</Reveal>
      <div className="my-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
        <div className="flex-col flex  gap-2">
          <Card src="/next.webp" className="h-96  ">
            {" "}
            <p className="text-sm">
              Next.js is a powerful React framework that enables server-side
              rendering, static site generation, and seamless API integration
              for building modern web applications.{" "}
            </p>{" "}
          </Card>
          <Card src="/typescript.png" className="h-24 ">
            <p className="text-sm">
              A superset of JavaScript that adds static typing, making it easier
              to catch errors and build scalable applications.
            </p>{" "}
          </Card>
        </div>
        <div className="flex-col flex  gap-2">
          <Card src="/react.png" className="  h-60">
            <p className="text-sm">
              React is a JavaScript library for building interactive and dynamic
              user interfaces, focusing on component-based architecture and
              efficient rendering with a virtual DOM.
            </p>{" "}
          </Card>
          <Card src="/express.png" className="  h-60">
            {" "}
            <p className="text-small">
              Express is a fast and minimal Node.js web application framework
              that simplifies building APIs and web servers with robust routing
              and middleware support.
            </p>
          </Card>
        </div>
        <div className="flex flex-col gap-2">
          <Card src="/nodejs.svg" className="  h-72 object-contain">
            <p className="text-small">
              Node.js is a JavaScript runtime built on Chrome's V8 engine that
              enables server-side development, offering scalability and
              asynchronous, non-blocking event-driven architecture.
            </p>{" "}
          </Card>
          <Card src="/prisma.jpg" className="h-48">
            <p className="text-sm">
              Prisma is a modern ORM tool for Node.js and TypeScript that
              simplifies database access with a type-safe and intuitive API,
              supporting SQL and NoSQL databases.
            </p>{" "}
          </Card>
        </div>
        <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 md:col-span-3 md:h-28 lg:h-auto lg:col-span-1 lg:grid-flow-row lg:grid-cols-1  gap-2">
          <Card src="/sql.jpeg" className="   object-contain">
            <p className="text-sm">
              SQL is a standardized programming language used to manage, query,
              and manipulate relational databases by working with tables, rows,
              and columns.
            </p>{" "}
          </Card>
          <Card src="/postgresql.png" className="bg-slate-400/30 ">
            <p className="text-sm">
              PostgreSQL is a powerful, open-source relational database
              management system known for its reliability, extensibility, JSON,
              and custom data types.
            </p>{" "}
          </Card>
          <Card src="/mongodb.jpg" className="">
            <p className="text-sm">
              MongoDB is a popular NoSQL database that stores data in flexible,
              JSON-like documents, making it ideal for handling unstructured or
              semi-structured data and scaling horizontally.
            </p>{" "}
          </Card>
        </div>
        <div className="md:grid hidden lg:grid-cols-4  grid-cols-2 lg:h-24 xl:h-auto md:h-48 xl:grid-cols-1 xl:col-span-1 gap-2 col-span-2 lg:col-span-4 ">
          <Card src="/shadcnui.png" className=" ">
            <p className="text-sm">
              ShadCN UI is a customizable component library for React apps,
              designed with modern styling and flexibility in mind.
            </p>{" "}
          </Card>
          <Card src="/zod.png" className=" bg-white/5  ">
            {" "}
            <p className="text-sm">
              Zod is a TypeScript-first library for schema validation with
              strong type inference.
            </p>{" "}
          </Card>
          <Card src="/nextauth.png" className=" ">
            <p className="text-sm">
              NextAuth.js is an authentication library for Next.js, supporting
              multiple providers and session management.
            </p>{" "}
          </Card>
          <Card src="/passport.png" className="">
            <p className="text-sm">
              Passport.js is an authentication middleware for Node.js,
              supporting a wide range of strategies for user login.
            </p>{" "}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
