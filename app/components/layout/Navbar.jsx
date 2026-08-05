import Button from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "School Life", href: "/school" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#8C1515]/95 backdrop-blur-md text-white shadow-lg">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="School Logo"
            width={50}
            height={50}
            className="rounded-full border-2 border-white"
          />
          <div>
            <h1 className="font-bold text-lg">
              NextGen Academy
            </h1>
            <p className="text-xs text-white/80">
              Excellence & Integrity
            </p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-medium transition hover:text-yellow-300 group"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <Button className="bg-white text-[#8C1515] hover:bg-yellow-300 hover:text-black">
          Apply Now
        </Button>

      </div>
    </nav>
  );
}