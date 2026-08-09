"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Namukasa",
    role: "Parent",
    message:
      "NextGen Academy has provided an excellent learning environment for my child. The teachers are supportive, and I have seen a great improvement in both confidence and academic performance.",
  },
  {
    name: "David Okello",
    role: "Parent",
    message:
      "What I appreciate most is the balance between academics and character development. My child has become more disciplined, confident, and enthusiastic about learning.",
  },
  {
    name: "Brian Kato",
    role: "Student",
    message:
      "The school has given me opportunities to discover my talents, participate in different activities, and become more confident in myself.",
  },
];
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const testimonial = testimonials[current];
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-semibold text-lg text-[#8C1515]">
          Testimonials
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-4xl">
          What Our Community Says
        </h2>
        <div className="mt-10  bg-[#8C1515] px-8 py-10 text-white shadow-xl">
          <p className="text-lg leading-relaxed md:text-xl">
            “{testimonial.message}”
          </p>
          <div className="mt-6">
            <h3 className="font-bold">
              {testimonial.name}
            </h3>
            <p className="mt-1 text-sm text-white/70">
              {testimonial.role}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index
                  ? "w-6 bg-[#8C1515]"
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}