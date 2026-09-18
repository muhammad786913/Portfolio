import Navbar from "../component/navbar";
import Footer from "../component/footer";
import SectionTitle from "../component/SectionTitle";

const skills = [
  ["HTML", "95%", "🌐"],
  ["CSS", "90%", "🎨"],
  ["JavaScript", "85%", "JS"],
  ["React", "80%", "⚛"],
  ["Next.js", "75%", "N"],
  ["Tailwind CSS", "90%", "TW"],
  ["Git & GitHub", "80%", "GH"],
  ["Responsive Design", "95%", "📱"],
];

export default function Skills() {
  return (
    <>
      <Navbar />

      <main className="px-6 pb-20 pt-32">

        <section className="mx-auto max-w-6xl">

          <SectionTitle
            label="MY SKILLS"
            title="Tools I use to bring ideas to life."
            description="These are the technologies and skills I'm currently working with and improving."
          />

          {/* SKILLS */}

          <div className="mt-16 grid gap-5 sm:grid-cols-2">

            {skills.map(([name, percentage, icon]) => (
              <div
                key={name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-500/40"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 font-bold text-purple-400">
                      {icon}
                    </div>

                    <h3 className="font-semibold">
                      {name}
                    </h3>

                  </div>

                  <span className="text-sm text-purple-400">
                    {percentage}
                  </span>

                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 group-hover:brightness-125"
                    style={{ width: percentage }}
                  />

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* WORKFLOW */}

        <section className="mx-auto mt-32 max-w-6xl">

          <SectionTitle
            label="MY WORKFLOW"
            title="From idea to website."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-4">

            {[
              ["01", "Plan", "Understand the idea and decide the structure."],
              ["02", "Design", "Create the layout and visual direction."],
              ["03", "Develop", "Turn the design into functional code."],
              ["04", "Improve", "Test, optimize and make it responsive."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-2 hover:border-purple-500/40"
              >

                <div className="text-4xl font-black text-purple-500/30">
                  {number}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}