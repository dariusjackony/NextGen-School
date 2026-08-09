import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#8C1515] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.jpeg"
            alt="NextGen Academy Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <h2 className="mt-4 text-xl font-bold">
            NextGen Academy
          </h2>

          <p className="mt-3 max-w-sm leading-relaxed text-white/80">
            Empowering students through exceptional learning, character
            development, and a holistic education that prepares them for
            the future.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href="/"
                className="text-white/80 transition hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white/80 transition hover:text-white"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/school"
                className="text-white/80 transition hover:text-white"
              >
                School Life
              </Link>
            </li>
            <li>
              <Link
                href="/academics"
                className="text-white/80 transition hover:text-white"
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-white/80 transition hover:text-white"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            School Services
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href="/admissions"
                className="text-white/80 transition hover:text-white"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/curriculum"
                className="text-white/80 transition hover:text-white"
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="text-white/80 transition hover:text-white"
              >
                News & Updates
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/80 transition hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            Get In Touch
          </h3>

          <div className="mt-5 space-y-4">

            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 shrink-0" />

              <p className="text-white/80">
                Kampala, Uganda
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} className="shrink-0" />

              <p className="text-white/80">
                +256 700 000 000
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="shrink-0" />

              <p className="text-white/80">
                info@nextgenacademy.ug
              </p>
            </div>

          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">

            <a
              href="#"
              className="rounded-full bg-white/10 p-2 transition hover:bg-white hover:text-[#8C1515]"
            >
              <FaFacebookF size={19} />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-2 transition hover:bg-white hover:text-[#8C1515]"
            >
              <FaInstagram size={19} />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-2 transition hover:bg-white hover:text-[#8C1515]"
            >
              <FaTwitter size={19} />
            </a>

            <a
              href="#"
              className="rounded-full bg-white/10 p-2 transition hover:bg-white hover:text-[#8C1515]"
            >
              <FaYoutube size={19} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} NextGen Academy. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}