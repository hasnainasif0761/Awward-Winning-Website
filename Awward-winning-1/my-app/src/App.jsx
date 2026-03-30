import React, { useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Showcase from './components/Showcase'


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

    </>
  )
}

export default App
