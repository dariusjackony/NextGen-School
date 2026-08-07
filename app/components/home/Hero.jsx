import Button from "../ui/Button"
export default function Hero(){
    return(
        <section
        className="relative h-[680px] md:h-screen bg-center bg-cover"
        style={{
            backgroundImage: "url('/images/heropic.jpg')"
        }}
        >
        <div className="absolute bg-black/40 inset-0"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur">
            Excellence • Integrity • Innovation
        </span>
        <h2 className="mb-5 max-w-3xl text-3xl font-bold leading-tight text-white md:text-6xl">
            Inspiring Excellence, Building Future Leaders
        </h2>
        <p className="mb-10 max-w-2xl leading-relaxed text-white/90">
            Empowering students through exceptional learning, character formation,
            and a holistic education that prepares them to thrive in a changing world.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
            <button
            className="border border-white px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#8C1515]"
            >
            Begin Your Journey
            </button>

            <Button className="px-8 py-3">
            Explore Admissions
            </Button>
        </div>

        </div>
        </section>
    )
}