"use client";

import { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ProjectCard from "../component/ProjectCard";

const projects = [
  {
    title: "College Admissions Form",
    description:
      "A detailed multi-page admission form built with React and modern UI.",
    technologies: ["React", "JavaScript", "CSS"],
    category: "React",
  },
  {
    title: "Food Application",
    description:
      "Interactive food application with dynamic JavaScript functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "JavaScript",
  },
  {
    title: "Car Showcase",
    description:
      "A modern car showcase interface with responsive layouts.",
    technologies: ["React", "Tailwind"],
    category: "React",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio with animations and responsive design.",
    technologies: ["Next.js", "Tailwind"],
    category: "Next.js",
  },
  {
    title: "Landing Page",
    description:
      "Clean business landing page with modern sections and CTA.",
    technologies: ["HTML", "CSS"],
    category: "HTML",
  },
  {
    title: "Interactive UI",
    description:
      "Creative interface experiment with hover effects and animations.",
    technologies: ["JavaScript", "CSS"],
    category: "JavaScript",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "React",
    "JavaScript",
    "Next.js",
    "HTML",
  ];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Navbar />

      <main className="px-6 pb-28 pt-32">

        <section className="mx-auto max-w-6xl">

          <div className="max-w-3xl">

            <p className="tracking-[5px] text-purple-400">
              MY PROJECTS
            </p>

            <h1 className="mt-5 text-5xl font-black sm:text-7xl">
              Things I've{" "}
              <span className="gradient-text">
                built.
              </span>
            </h1>

            <p className="mt-6 leading-8 text-gray-500">
              Explore some of my projects and experiments.
              Each one helped me learn something new.
            </p>

          </div>

          {/* FILTER */}

          <div className="mt-12 flex flex-wrap gap-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  filter === category
                    ? "bg-purple-600 text-white"
                    : "border border-white/10 bg-white/[0.03] text-gray-400 hover:border-purple-400"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* PROJECTS */}

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {filtered.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                number={`0${index + 1}`}
              />
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}