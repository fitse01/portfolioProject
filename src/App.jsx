import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Service from './Components/Service/Service'
import { Experience } from './Components/Experience/Experience'
import { Works } from './Components/Works/Works'

function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <Service/>
    <Experience/>
    <Works/>
    </>
  )
}

export default App
