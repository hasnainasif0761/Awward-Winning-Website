import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () =>{
    const [isVisible, setIsVisible] = useState(true)
    const [isAtTop, setIsAtTop] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(()=>{
        const controlNavbar = () =>{
            const currentScrollY = window.scrollY;

            if(currentScrollY > lastScrollY && currentScrollY > 100){
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            if(currentScrollY < 50){
                setIsAtTop(true)
            }else{
                setIsAtTop(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', controlNavbar)
        return () => window.removeEventListener('scroll', controlNavbar)
    },[lastScrollY])


    return (
        <nav className={`fixed top-0 left-0 w-full z-50  transition-all duration-500 ease-in-out px-4 sm:px-8 flex items-center justify-between h-20 sm:h-24${
            isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isAtTop ? 'bg-[#ffD900]' : 'bg-transparent'}`}>

            <Link to={'/'} className='nav bg-black h-10 sm:h-12 flex items-center text-lg sm:text-3xl px-3 sm:px-4 rounded-[5px] text-white hover:scale-105 transition-transform'>
                MAMMOTH MURALS
            </Link>

            <div className="hidden md:flex gap-6 text-[13px] font-bold">
                {['Work','About','MainService'].map((items)=>(
                    <Link
                    key={items} to={`/${items}`}
                    className='bg-[#FFD900] border rounded-[5px] py-3 px-6 uppercase border-black transition-all duration-300 hover:-rotate-6 hover:bg-black hover:text-white shadow-sm'
                    >
                        {items === 'MainService' ? 'Services' : items}
                    </Link>
                ))}
            </div>

            <div className="hidden md:flex">
                <Link
                to={'/contact'}
                className='group relative bg-black border rounded-[5px] border-black text-white items-center uppercase px-6 py-3 overflow-hidden min-w-40 justify-center shadow-lg'
                >
                    <div className="flex items-center transition-all duration-300 group-hover:translate-y-12">
                        <img src="" alt="" />
                    </div>
                </Link>
            </div>

        </nav>
    )

}

export default Navbar