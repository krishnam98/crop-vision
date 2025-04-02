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
import { useSelector } from 'react-redux'
import CropVisionForm from './Components/CropVisionForm'

function App() {

  const arr = useSelector((cvStore) => cvStore.reportReducer);
  console.log(arr)


  return (
    <>
      <Outlet />
      {/* Header */}
      <Header />
      {arr[0].value == "" && <CropVisionForm />}

      {/* Text */}
      <Hero />


    </>
  )
}

export default App
