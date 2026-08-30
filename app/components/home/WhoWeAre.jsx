import Image from "next/image"
import Button from "../ui/Button"
export default function WhoWeAre(){
    return(
        <div className="px-4 mt-79 md:mt-67">
           <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:px-6 md:flex-row md:gap-16">
            <div className="w-full md:w-1/2">
                <h4 className="text-lg font-semibold text-[#8C1515]">
                About Our School
                </h4>

                <h2 className="mt-2 text-2xl font-bold ">
                Inspiring Excellence, Shaping Tomorrow's Leaders
                </h2>

                <p className="mt-5 leading-relaxed text-gray-600">
                A center of excellence in education, NextGen Academy combines strong
                values with innovative learning approaches to create an environment
                where students are inspired to discover, grow, and succeed. We don't
                just educate; we shape future leaders.
                </p>

                <p className="mt-5  leading-relaxed text-gray-600">
                Our learning environment is designed to encourage creativity, critical
                thinking, and personal growth, ensuring every student develops the
                confidence, skills, and character needed to make a meaningful impact
                in the world.
                </p>

                <button className="mt-6 cursor-pointer bg-black px-6 py-3 font-medium text-white transition hover:bg-yellow-300 hover:text-black">
                Read More
                </button>
            </div>
            <div className="w-full md:w-1/2">
                <Image
                src="/images/discussion.jpg"
                alt="Students discussion"
                width={600}
                height={500}
                className="md:h-[450px] w-full  object-cover"
                />
            </div>
            </div>
        </div>
    )
}