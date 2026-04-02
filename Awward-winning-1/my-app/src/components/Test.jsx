import React from "react";

const testimonials = [
  {
    img: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68884c2cdad1480c1dfc8fff_CleanShot%202024-11-09%20at%2015.00.44-1.avif",
    text:
      "Andrew and Shane turn rough ideas into extraordinary murals. They consistently exceed expectations.",
    name: "Olivia (Harris) Jenks",
    role: "Project Supervisor at North Italia",
  },
  {
    img: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68884c18a4e367943f8fe039_CleanShot%202024-11-09%20at%2015.00.44.avif",
    text:
      "Mammoth Murals transformed our vision into a bold storefront that stops people in their tracks. The process was seamless and the execution was flawless.",
    name: "Birmingham Tattoo Company",
    role: "Client at Birmingham Tattoo Company",
  },
  {
    img: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68884c060f5c534d91b37245_AxelRow1%202.avif",
    text:
      "Andrew and the team brought Avondale’s story to life with precision and energy. Every detail was perfect and the project was completed on time.",
    name: "Thornton Ratliff",
    role: "Founder at SRV Housing Partners",
  },
];

const Testimonial = () =>{
    return(
        <section className="w-full h-auto py-10">
            <div className="px-10 grid grid-cols-1 md:grid-cols-3 gap-15">
                {testimonials.map((item, index)=>(
                    <div key={index}>
                        <div className="border-[3px] rounded border-dashed border-black">
                            <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-full p-2 rounded h-[70vh] object-cover"
                            />
                        </div>
                        <p className="nav3 mt-6 text-2xl leading-relaxed">
                            “{item.text}”
                        </p>

                        <h4 className="nav mt-6 text-4xl uppercase">
                            “{item.name}”
                        </h4>

                        <h4 className="nav text-4xl uppercase">
                            “{item.role}”
                        </h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonial







