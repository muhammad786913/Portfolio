import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            &lt;/&gt; MUHAMMAD
          </h2>
          <p className="text-gray-400 mt-2">
            Web Developer & Frontend Developer
          </p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-8 text-sm">
        © 2026 MUHAMMAD. All rights reserved.
      </p>
    </footer>
  );
}