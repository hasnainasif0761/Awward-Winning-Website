import React, { useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll'
import 'Locomotive-scroll/dist/locomotive-scroll.css'
import Navbar from './components/Navbar'

const Home = () => (
  <>

  </>
)

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
    </>
  )
}

export default App
