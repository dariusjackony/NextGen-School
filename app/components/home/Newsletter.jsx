"use client";

import { useEffect, useState } from "react";
import { X, Mail } from "lucide-react";

export default function Newsletter() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const hasSubscribed = localStorage.getItem("newsletterSubscribed");
    if (hasSubscribed === "true") {
      return;
    }
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    setError("")
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    try{
      setLoading(true);
      const response = await fetch("api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
          })
      });
      const data = await response.json();
      console.log(data)
      if (!response.ok){
        throw new Error(
          data.message || "Unable to subscribe, Please try again."
        )
      }
      localStorage.setItem("newsletterSubscribed", "true")
      setMessage(data.message || "Thank you for subscribing!")
      setEmail("")
      setIsOpen(false)
    } catch (error) {
      setError(
        error.message || " Something went wrong"
      )
    } finally {
      setLoading(false)
    }
  
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <form onSubmit={handleSubmit}>
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
          <div className="mt-6">
            <input
              type="email"
              value={email}
              disable={loading}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#8C1515]"
            />
            <button
              type="submit"
  
              disabled={loading}
              className="mt-3 w-full bg-[#8C1515] px-4 py-3 font-semibold text-white hover:bg-[#731111]"
            >
              {loading ? "Subscribing. . ." : "Subscribe"}
            </button>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            We respect your privacy. You can unsubscribe anytime.
          </p>
        </div>
      </form>
      
    </div>
  );
}