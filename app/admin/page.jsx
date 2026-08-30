"use client"
import { useState } from "react"
import Button from "@/components/ui/button"
export default function Admin(){
    const [activeTab, setActiveTab] = useState("admissions")
    return(
        <section className="px-4 mt-20">
            <h2>admin</h2>
            {/* <div>
               <Button
                onClick={() => setActiveTab("admissions")}
               >
                 Admissions
               </Button>
               <Button
                onClick={() => setActiveTab("admissions")}
               >
                 Admissions
               </Button>
               <Button
                onClick={() => setActiveTab("admissions")}
               >
                 Admissions
               </Button>
            </div> */}
        </section>
    )
}