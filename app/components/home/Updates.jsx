import Image from "next/image";
import { ChevronRight } from "lucide-react";
export default function Updates(){
    const news = [
        {
            title: "NextGen Academy Welcomes New Headteacher",
            description:
            "The school community welcomes our new Headteacher, who brings a fresh vision and commitment to academic excellence, student development, and innovation.",
            image: "/images/headteacher.jpg",
            date: "1 November 2025",
        },
        {
            title: "Students Showcase Creativity at Annual Drama Festival",
            description:
            "Our talented students took to the stage for an exciting drama showcase, demonstrating creativity, confidence, teamwork, and exceptional performance skills.",
            image: "/images/talent.jpg",
            date: "15 October 2025",
        },
        {
            title: "NextGen Academy Embraces Technology in the Classroom",
            description:
            "The school continues to integrate technology into learning, giving students opportunities to develop digital skills and explore innovative ways of solving problems.",
            image: "/images/tech.jpg",
            date: "28 September 2025",
        },
    ];
    return(
        <section className="px-4 mt-20">
            <h4 className="text-lg font-semibold text-[#8C1515]">Featured News</h4>
            <h2 className="mt-2 text-2xl font-bold ">What’s Happening at NextGen Academy</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {news.map((item, i) => (
                    <article
                    key={i}
                    className="group overflow-hidden bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                    <div className="overflow-hidden">
                        <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-6">
                        <span className="text-sm font-semibold text-[#8C1515]">
                         {item.date}
                        </span>

                        <h2 className="mt-2 text-xl font-bold leading-snug">
                        {item.title}
                        </h2>
                        <p className="mt-3 leading-relaxed text-gray-600">
                        {item.description}
                        </p>
                        <button className="mt-5 flex items-center gap-3 font-semibold text-[#8C1515] transition hover:text-[#6f1010]">
                         Read More 
                         <ChevronRight size={18} />
                        </button>
                    </div>
                    </article>
                   ))}
                </div>
        </section>
    )
}