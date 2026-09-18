import Navbar from "../component/navbar";
import Footer from "../component/footer";
import SectionTitle from "../component/SectionTitle";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* INTRO */}

        <section className="px-6 py-24">

          <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

            <div>

              <p className="tracking-[5px] text-purple-400">
                ABOUT ME
              </p>

              <h1 className="mt-5 text-5xl font-black sm:text-7xl">
                I'm{" "}
                <span className="gradient-text">
                  MUHAMMAD.
                </span>
              </h1>

              <p className="mt-7 leading-8 text-gray-500">
                I'm a passionate web developer who enjoys
                creating modern websites and learning new
                technologies.
              </p>

              <p className="mt-5 leading-8 text-gray-500">
                My focus is frontend development, responsive
                design and creating interfaces that are simple
                to use but visually interesting.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {["Creative", "Problem Solver", "Learner"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
                  >
                    ✦ {item}
                  </span>
                ))}

              </div>

            </div>

            <div className="relative">

              <div className="absolute inset-0 rounded-[40px] bg-purple-600/20 blur-[80px]" />

              <div className="relative flex h-[420px] items-center justify-center rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-600/20 to-blue-600/10">

                <div className="text-center">

                  <div className="text-8xl">
                    &lt;/&gt;
                  </div>

                  <p className="mt-6 font-mono text-purple-400">
                    building_the_future();
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* JOURNEY */}

        <section className="border-y border-white/10 bg-white/[0.02] px-6 py-28">

          <div className="mx-auto max-w-6xl">

            <SectionTitle
              label="MY JOURNEY"
              title="Learning. Building. Improving."
            />

            <div className="mt-16 border-l border-purple-500/30 pl-8">

              {[
                ["01", "Started Web Development", "Started learning the fundamentals of HTML, CSS and JavaScript."],
                ["02", "Built Real Projects", "Started creating interactive websites and practical projects."],
                ["03", "React & Modern UI", "Moved into React and modern component-based development."],
                ["04", "Next.js", "Started exploring Next.js, routing and modern web development."],
              ].map(([num, title, text]) => (
                <div
                  key={num}
                  className="relative mb-14"
                >

                  <div className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/40 bg-[#080b14] text-xs text-purple-400">
                    {num}
                  </div>

                  <h3 className="text-xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-gray-500">
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* VALUES */}

        <section className="px-6 py-28">

          <div className="mx-auto max-w-6xl">

            <SectionTitle
              label="MY VALUES"
              title="How I approach my work."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {[
                ["01", "Clean Code", "I try to keep my code organized, readable and easy to understand."],
                ["02", "Creative Design", "I enjoy experimenting with layouts, spacing, animation and visual details."],
                ["03", "Continuous Learning", "Technology keeps changing, so I keep learning and improving my skills."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >

                  <span className="text-5xl font-black text-purple-500/20">
                    {number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-500">
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}