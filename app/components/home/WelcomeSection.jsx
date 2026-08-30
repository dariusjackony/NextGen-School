export default function WelcomeSection() {
  return (
    <section className="absolute left-1/2 top-[90%] md:top-[100%] z-20 w-[calc(100%-2rem)] -translate-x-1/2 md:max-w-5xl">
      <div className="bg-[#8C1515] px-6 py-10 text-white shadow-xl md:px-12 md:py-12">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mb-5 text-2xl font-bold md:text-3xl">
            Welcome to NextGen Academy
          </h2>

          <p className="leading-relaxed text-white/90 md:text-lg">
            At NextGen Academy, we believe every student has the potential to
            achieve greatness. Through quality education, dedicated teachers,
            and a supportive learning environment, we nurture confident,
            responsible, and future-ready leaders.
          </p>
        </div>
      </div>
    </section>
  );
}