import Button from "../ui/Button"
export default function Hero(){
    return(
        <section
        className="relative h-[680px] md:h-screen bg-center bg-cover"
        style={{
            backgroundImage: "url('/images/heropic.jpg')"
        }}
        >
        <div className="absolute bg-black/60 inset-0"></div>
        <div className="relative z-10 flex h-full flex-col items-start text-left justify-center px-10 text-center">
        <h2 className="mb-5 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
            Over 30 Years of excellence and improvement on the Children
        </h2>
        <p className="mb-10 max-w-2xl leading-relaxed text-white/90">
            Empowering students through exceptional learning, character formation,
            and a holistic education that prepares them to thrive in a changing world.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
            <button
            className="border border-white px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#8C1515]"
            >
            Learn More 
            </button>

            <Button className="px-8 py-3">
            Explore Admissions
            </Button>
        </div>

        </div>
        </section>
    )
}