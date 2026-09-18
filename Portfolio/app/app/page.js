import Link from "next/link";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import SectionTitle from "./component/SectionTitle";

const services = [
  {
    icon: "⌘",
    title: "Frontend Development",
    text: "Building modern interfaces with React, Next.js and JavaScript.",
  },
  {
    icon: "✦",
    title: "UI Development",
    text: "Creating clean and attractive interfaces with attention to detail.",
  },
  {
    icon: "◈",
    title: "Responsive Websites",
    text: "Making websites work beautifully across phones, tablets and desktops.",
  },
];

const projects = [
  {
    title: "College Admissions Form",
    description: "A multi-page admission form with modern UI and navigation.",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Food Application",
    description: "Interactive food application with dynamic functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Car Showcase",
    description: "Modern responsive car showcase interface.",
    technologies: ["React", "Tailwind"],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* HERO */}

        <section className="grid-bg relative min-h-screen overflow-hidden px-6 pt-20">

          <div className="absolute left-[10%] top-40 h-72 w-72 rounded-full bg-purple-600/20 blur-[130px]" />

          <div className="absolute right-[10%] top-60 h-72 w-72 rounded-full bg-blue-600/20 blur-[130px]" />

          <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 md:grid-cols-2">

            <div className="animate-slide-up">

              <div className="mb-6 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
                ✦ Web Developer • Creative Coder
              </div>

              <p className="text-xl text-purple-400">
                Hi, I'm
              </p>

              <h1 className="mt-2 text-6xl font-black tracking-tight sm:text-8xl">
                MUHAMMAD
              </h1>

              <h2 className="mt-4 text-3xl font-bold text-gray-300 sm:text-5xl">
                I build{" "}
                <span className="gradient-text">
                  digital experiences.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
                I'm a web developer who loves turning ideas
                into modern, responsive and interactive websites
                using clean code and creative design.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  href="/projects"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold shadow-lg shadow-purple-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-600/40"
                >
                  Explore My Work →
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:-translate-y-1 hover:border-purple-400"
                >
                  Let's Talk
                </Link>

              </div>

              <div className="mt-9 flex gap-6 text-sm text-gray-600">
                <span className="hover:text-purple-400">GitHub</span>
                <span className="hover:text-purple-400">LinkedIn</span>
                <span className="hover:text-purple-400">Email</span>
              </div>

            </div>

            {/* CODE WINDOW */}

            <div className="animate-float">

              <div className="glow overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f1a]/90 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-2 border-b border-white/10 pb-4">

                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />

                  <span className="ml-3 text-xs text-gray-600">
                    developer.js
                  </span>

                </div>

                <div className="mt-7 space-y-4 font-mono text-sm leading-7">

                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = {"{"}
                  </p>

                  <p className="pl-6">
                    name:{" "}
                    <span className="text-green-400">
                      "MUHAMMAD"
                    </span>,
                  </p>

                  <p className="pl-6">
                    role:{" "}
                    <span className="text-green-400">
                      "Web Developer"
                    </span>,
                  </p>

                  <p className="pl-6">
                    passion:{" "}
                    <span className="text-green-400">
                      "Building"
                    </span>,
                  </p>

                  <p className="pl-6">
                    skills: [
                  </p>

                  <p className="pl-12 text-blue-400">
                    "React",
                  </p>

                  <p className="pl-12 text-blue-400">
                    "Next.js",
                  </p>

                  <p className="pl-12 text-blue-400">
                    "Tailwind CSS"
                  </p>

                  <p className="pl-6">
                    ]
                  </p>

                  <p>{"}"}</p>

                </div>

                <div className="mt-7 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">

                  <div className="flex justify-between text-sm">

                    <span className="text-gray-500">
                      Coding status
                    </span>

                    <span className="text-green-400">
                      ● Active
                    </span>

                  </div>

                  <div className="mt-4 h-2 rounded-full bg-white/10">

                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="border-y border-white/10 bg-white/[0.02] px-6">

          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">

            {[
              ["10+", "Projects"],
              ["8+", "Technologies"],
              ["100%", "Responsive"],
              ["24/7", "Learning"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="p-8 text-center"
              >

                <h3 className="text-3xl font-bold text-purple-400">
                  {number}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {label}
                </p>

              </div>
            ))}

          </div>

        </section>

        {/* SERVICES */}

        <section className="px-6 py-28">

          <div className="mx-auto max-w-6xl">

            <SectionTitle
              label="WHAT I DO"
              title="Building things that look good and work well."
              description="I combine development, design and responsive layouts to create modern web experiences."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-3 hover:border-purple-500/40 hover:bg-purple-500/[0.05]"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl text-purple-400 transition duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    {service.text}
                  </p>

                  <div className="mt-7 text-sm text-purple-400">
                    Learn more →
                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* FEATURED PROJECTS */}

        <section className="bg-white/[0.015] px-6 py-28">

          <div className="mx-auto max-w-6xl">

            <SectionTitle
              label="SELECTED WORK"
              title="Projects I've built."
              description="A collection of projects where I experimented with layouts, functionality and modern frontend technologies."
            />

            <div className="mt-14 grid gap-7 md:grid-cols-3">

              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f19] transition duration-500 hover:-translate-y-3 hover:border-purple-500/40"
                >

                  <div className="flex h-52 items-center justify-center bg-gradient-to-br from-purple-700/20 to-blue-700/10 text-5xl font-bold text-purple-400">
                    0{index + 1}
                  </div>

                  <div className="p-7">

                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-500">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-10 text-center">

              <Link
                href="/projects"
                className="inline-block rounded-full border border-white/10 px-7 py-3 text-sm transition hover:border-purple-400 hover:text-purple-400"
              >
                View All Projects →
              </Link>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="px-6 py-28">

          <div className="mx-auto max-w-6xl rounded-[35px] border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-10 text-center sm:p-20">

            <p className="text-sm tracking-[5px] text-purple-400">
              HAVE AN IDEA?
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
              Let's build something
              <br />
              <span className="gradient-text">
                amazing together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-gray-500">
              Have a project or idea in mind? Let's turn it
              into a beautiful digital experience.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-9 py-4 font-semibold transition hover:-translate-y-1"
            >
              Start a Conversation →
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}