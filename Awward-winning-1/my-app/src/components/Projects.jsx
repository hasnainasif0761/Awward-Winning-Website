import React from "react";
import { motion } from "framer-motion";
import View from "./View";


// borderDots ko parameter mein fix kar diya (comma add kiya)
const ProjectCard = ({ title, year, category, img }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full lg:w-1/2 flex flex-col group"
    >
      {/* Card Image Container */}
      <div className="relative h-[45vh] sm:h-[55vh] lg:h-[62vh] bg-black rounded-xl overflow-hidden cursor-pointer">
        
        {/* Corner Dots Overlay */}
        <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between">
            <img className="h-2 w-2" src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689af5ca9e8c80ce95a0bd81_dot.avif" alt="dot" />
            <img className="h-2 w-2" src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689af5ca9e8c80ce95a0bd81_dot.avif" alt="dot" />
          </div>
          <div className="flex justify-between">
            <img className="h-2 w-2" src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689af5ca9e8c80ce95a0bd81_dot.avif" alt="dot" />
            <img className="h-2 w-2" src="https://cdn.prod.website-files.com/6870db6428fa0046e4e9dc88/689af5ca9e8c80ce95a0bd81_dot.avif" alt="dot" />
          </div>
        </div>

        {/* Yellow Hover Overlay */}
        <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>

        {/* Main Image with Zoom Animation */}
        <img
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:sepia group-hover:hue-rotate-[30deg]"
          src={img}
          alt={title}
        />
      </div>

      {/* Text Content */}
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-between items-start sm:items-center">
        <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-gray-900">
          {title}
        </h4>

        <div className="flex items-center gap-2">
          <span className="uppercase text-[10px] sm:text-xs font-bold border border-black/20 px-3 py-1 rounded-full bg-white/50">
            {category}
          </span>
          <span className="text-[10px] sm:text-xs font-bold border border-black/20 px-3 py-1 rounded-full bg-white/50">
            {year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Live Nation : The Magic City",
      year: "2026",
      category: "Murals",
      img: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a92151af03744c150497ca_68a3da3e40a19fe2294d4330_cocacolaamphitheater-24.avif",
    },
    {
      title: "Girl with the Pearl Earring",
      year: "2026",
      category: "Murals",
      img: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a92151af03744c150497d6_68846b56c0101f3e615d65bd_CleanShot%25202024-11-09%2520at%252015.00.44-2.avif",
    },
    {
      title: "Axel Row",
      year: "2022",
      category: "Murals",
      img: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a92151af03744c150497d2_689018689b2a5c926c179068_GirlwithPearlFinishedPhotosDSCF4282.avif",
    },
  ];

  return (
    <section className="min-h-screen w-full p-6 sm:p-10 bg-[#FFF6E5]">
      {/* First Row: Two Cards */}
      <div className="flex flex-col lg:flex-row gap-10 w-full mb-10">
        <ProjectCard {...projectData[0]} />
        <ProjectCard {...projectData[1]} />
      </div>

      {/* Second Row: One Card (Aap mazeed cards yahan add kar sakte hain) */}
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <ProjectCard {...projectData[2]} />
        <div className="hidden lg:block lg:w-1/2"></div> {/* Spacer for alignment */}
      </div>
      <View />
    </section>
  );
};

export default Projects;