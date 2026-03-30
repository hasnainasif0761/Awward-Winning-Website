import React, { useState, useEffect} from 'react'

const LogoSlot = ({logo1, logo2, index}) =>{
    const [showFirst, setShowFirst] = useState(false);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            const interval = setInterval(()=>{
                setShowFirst((prev) => !prev)
            },2000)
            return () => clearInterval(interval);
        }, index * 500);

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div className='relative h-14 sm:h-16 lg:h-20 w-full flex justify-center items-center'>
            <img 
            src={logo1} 
            alt=""
            className={`absolute h-full object-contain transition-all duration-100 ease-in-out ${showFirst ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
            <img 
            src=""
            className={`absolute h-full object-contain transition-all duration-100 ease-in-out ${showFirst ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            />
        </div>
    );
};


const Showcase = () =>{
    const partners = [
    {
      img1: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d9ba590ae9b10c971d19_id8zsrKH_Y_1755499798838%201.avif",
      img2: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d9d94efd22af34c8e835_image%204.avif" 
    },
    {
      img1: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d9a9d965e48cb21a59d0_The_Cheesecake_Factory_(logo%2C_stacked)%202.png",
      img2: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2da04e8631e54be19c841_image%203.avif"
    },
    {
      img1: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2da114f772123c81d4b2f_image%202.avif",
      img2: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d9c9a7681f6518c32c41_image%205.avif"
    },
    {
      img1: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d95cbedc5aa90e57738f_Axel-Row-Horiz%201.avif",
      img2: "https://cdn.prod.website-files.com/6881fafa34e37145092525b4/68a2d94dd39a1a3d6cba159b_LP-FOXRC-SKU-12-3-IMG-14-en-us-1627660864564%201.avif"
    }
  ];
}



export default LogoSlot