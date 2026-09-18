export default function ProjectCard({
  title,
  description,
  technologies,
  number,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-3 hover:border-purple-500/40 hover:bg-purple-500/[0.04]">

      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent">

        <div className="absolute h-40 w-40 rounded-full bg-purple-600/20 blur-3xl transition group-hover:bg-purple-600/40" />

        <span className="relative text-6xl font-bold text-purple-400 transition duration-500 group-hover:scale-110">
          {number}
        </span>

      </div>

      <div className="p-7">

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-gray-500">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
            >
              {tech}
            </span>
          ))}

        </div>

        <button className="mt-7 text-sm text-gray-300 transition hover:text-purple-400">
          View Project →
        </button>

      </div>

    </div>
  );
}