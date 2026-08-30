"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "School Life", href: "/school" },
  { name: "Academics", href: "/academics" },
  { name: "Admission", href: "/admission" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#8C1515]/95 backdrop-blur-md text-white shadow-lg">
      <div className="mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="School Logo"
            width={30}
            height={30}
            className="rounded-full border-2 border-white"
          />

          <div>
            <h1 className="font-bold md:text-lg">
              NextGen Academy
            </h1>

            <p className="text-xs text-white/80">
              Excellence & Integrity
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-medium transition hover:text-yellow-300"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Apply Button */}
        <div className="hidden md:block">
          <Button className="bg-white text-[#8C1515] hover:bg-yellow-300 hover:text-black">
            Apply Now
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div
            className={`transition-all duration-300 ${
              menuOpen
                ? "rotate-90 scale-110"
                : "rotate-0 scale-100"
            }`}
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/20 transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div
          className={`px-6 py-5 transition-all duration-500 ${
            menuOpen
              ? "translate-y-0"
              : "-translate-y-5"
          }`}
        >
          <div className="flex flex-col gap-1">

            {/* Mobile Links */}
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-center justify-between rounded-lg px-4 py-3 font-medium transition-all duration-500 hover:bg-white/10 hover:text-yellow-300 ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-6 opacity-0"
                }`}
                style={{
                  transitionDelay: menuOpen
                    ? `${index * 70}ms`
                    : "0ms",
                }}
              >
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Apply Button */}
            <div
              className={`mt-4 transition-all duration-500 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen
                  ? `${links.length * 70}ms`
                  : "0ms",
              }}
            >
              <Button className="w-full bg-white py-3 text-[#8C1515] shadow-md transition-all duration-300 hover:bg-yellow-300 hover:text-black hover:shadow-lg">
                Apply Now
              </Button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}