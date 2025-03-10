import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import ImageDiv from './Components/ImageDiv'
import AnimatedText from './Components/AnimatedText'
import Hero from './Components/Hero'
import SoilReport from './Components/SoilReport'
import { Outlet } from 'react-router'
import Crops from './Components/Crops'

function App() {

  return (
    <>
      <Outlet />
      {/* Header */}
      <Header />

      {/* Images (Right Side) */}
      {/* <ImageDiv /> */}

      {/* Text */}
      <Hero />


    </>
  )
}

export default App
