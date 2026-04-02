import React from "react";
import { Star } from "lucide-react"

const GoogleReview = () =>{
    return(
        <section className="w-full bg-[#FFF6E5] py-16 sm:py-24 lg:py-28 px-4 sm:px-6">
            <div className="bg-[#120011] text-[#FFF6E5] mx-auto text-center px-4 sm:px-8 lg:px-16 py-12 sm:px-16 py-12 sm:py-16">
                <p className="nav3 uppercase py-6 sm:py-10 text-xs sm:text-sm tracking-wider">5/5 Rating on Google Reviews</p>

                <div className="flex justify-center gap-1 mb-10 sm:mb-14">
                    {...Array(5).map((_,i)=>(
                        <Star
                        key={i}
                        size={24}
                        className="fill-yellow-400 text-yellow-400 sm:w-7 sm:h-7"
                        />
                    ))}
                </div>

                <h2 className="nav3 text-[clamp(22px,5vw,48px)] font-semibold leading-tight max-w-5xl mx-auto px-2 ">
                    “Fantastic artistry topped off a with great communication and services. 
                    Andrew, shane, and the team were very proffesional and obviously 
                    extremly talented.”
                </h2>
            </div>
        </section>
    )
}

export default GoogleReview