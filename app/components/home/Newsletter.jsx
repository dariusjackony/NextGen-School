"use client";

import { useEffect, useState } from "react";
import { X, Mail } from "lucide-react";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md  bg-white p-8 shadow-2xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 cursor-pointer rounded-full p-2 text-gray-500 hover:bg-gray-100"
        >
          <X size={20} />
        </button>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8C1515]/10 text-[#8C1515]">
          <Mail size={26} />
        </div>
        <div className="mt-5 text-center">
          <h2 className="text-2xl font-bold">
            Stay Connected With NextGen
          </h2>
          <p className="mt-3 text-gray-600">
            Get the latest school news, events, announcements, and updates
            delivered straight to your inbox.
          </p>
        </div>
        <form className="mt-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#8C1515]"
          />
          <button
            type="submit"
            className="mt-3 w-full bg-[#8C1515] px-4 py-3 font-semibold text-white hover:bg-[#731111]"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-gray-400">
          We respect your privacy. You can unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}