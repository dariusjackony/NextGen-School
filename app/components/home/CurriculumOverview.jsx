import { Check } from "lucide-react";
export default function CurriculumOverview(){
   const curriculum = [
            {
                title: "Primary School",
                subtitle: "Foundation for Lifelong Learning",
                description:
                "Our primary curriculum builds a strong academic foundation while nurturing curiosity, creativity, confidence, and essential learning skills. Students are guided through engaging lessons that develop both knowledge and character.",
                features: [
                "Strong Literacy & Numeracy Skills",
                "Creative and Practical Learning",
                "Character Development",
                ],
            },
            {
                title: "Upper Secondary",
                subtitle: "Preparing Future Leaders",
                description:
                "Our upper secondary curriculum is designed to help students specialize in their areas of interest while developing the academic, leadership, and career skills needed for higher education and future opportunities.",
                features: [
                "Advanced Subject Combinations",
                "University Preparation",
                "Career Guidance and Leadership",
                ],
            },
    ];
    return(
        <section className="px-4 mt-20">
            <div>
                <div className="mx-auto flex max-w-7xl flex-col items-center items-start md:px-6 md:flex-row md:items-start md:gap-16">
                    <div className="md:w-1/3">
                        <h1 className="text-2xl font-bold leading-tight ">
                        Curriculum Overview
                        </h1>
                    </div>
                    <div className="md:w-2/3">
                        <p className="mt-2 leading-relaxed text-gray-600">
                        NextGen Academy offers a comprehensive and balanced curriculum designed
                        to develop academic excellence, creativity, and critical thinking.
                        Our learning approach combines strong foundational knowledge with
                        practical skills, preparing students to excel in their studies and
                        become confident, capable individuals ready for the future.
                        </p>
                    </div>
                </div>
                <div className="flex gap-8 flex-col md:flex-row">
                    {curriculum.map((item, i) => {
                        return(
                           <div key={i} 
                           className={`mt-10 p-6  ${
                                i % 2 === 0
                                ? "bg-white border-t-4  rounded-xl border-[#8C1515] text-black"
                                : "bg-[#8C1515] text-white"
                            }`
                            }>
                             <h2 className="text-2xl font-bold ">{item.title}</h2>
                             <h4 className="mt-2 text-lg ">{item.subtitle}</h4>
                             <p className=" mt-2 ">{item.description}</p>
                             <div className="mt-6">
                                {item.features.map((feature, index) => (
                                    <li key={index} className=" list-none flex gap-2 items-center">
                                       <Check size={10} /> {feature}
                                    </li>
                                ))}
                             </div>
                             
                           </div> 
                        )
                        
                    })}
                </div>
            </div>
        </section>
    )
}