import React, { useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import LocomotiveScroll from 'locomotive-scroll'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Showcase from './components/Showcase'
import Ourwork from './components/Ourwork'
import Projects from './components/Projects'
import Services from './components/Services'


const App = () =>{
  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      smooth: true,
    })
    return () => scroll.destroy();
  },[]);
  return (
    <>
    <Navbar />
    <Herosection />
    <Showcase />
    <Ourwork />
    <Projects />
    <Services />

    </>
  )
}

export default App
