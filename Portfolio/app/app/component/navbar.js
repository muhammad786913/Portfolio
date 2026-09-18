"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Skills", "/skills"],
    ["Projects", "/projects"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#060812]/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          <span className="text-purple-400">
            &lt;/&gt;
          </span>{" "}
          MUHAMMAD
        </Link>

        {/* Desktop */}

        <div className="hidden items-center gap-8 md:flex">

          {links.map(([name, url]) => (
            <Link
              key={name}
              href={url}
              className="relative text-sm text-gray-300 transition hover:text-white"
            >
              {name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 hover:w-full" />
            </Link>
          ))}

        </div>

        {/* Mobile button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 px-3 py-2 text-xl md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile menu */}

      {open && (
        <div className="border-t border-white/10 bg-[#080b14] px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5 text-center">

            {links.map(([name, url]) => (
              <Link
                key={name}
                href={url}
                onClick={() => setOpen(false)}
                className="text-gray-300 transition hover:text-purple-400"
              >
                {name}
              </Link>
            ))}

          </div>

        </div>
      )}

    </nav>
  );
}