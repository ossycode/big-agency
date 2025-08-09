"use client";

import React from "react";

// const Header = () => {
//   return (
//     <div>
//       <div className="text-[#F5F7F5]">Logo Here</div>

//       <nav></nav>
//     </div>
//   );
// };

// export default Header;

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const nav = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* glass bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.35)]">
          <div className="flex h-16 items-center justify-between px-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
              <span className="text-[#F5F7F5] font-semibold tracking-tight font-sans text-xl">
                Communicator
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {nav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-lg text-neutral-200 hover:text-white transition font-sans"
                >
                  {item.name}
                  <span className="pointer-events-none absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 group-hover:w-6" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            {/* <div className="hidden md:flex">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-red-500 to-red-700 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition"
              >
                Start a project
              </Link>
            </div> */}

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-neutral-200 hover:bg-white/5"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile panel */}
          <div
            className={clsx(
              "md:hidden overflow-hidden transition-[max-height] duration-300",
              open ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="px-4 pb-4 pt-2">
              <nav className="flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-red-700 px-4 py-2 text-sm font-medium text-white shadow"
                >
                  Start a project
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
