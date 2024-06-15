import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Service from './Components/Service/Service'
import { Experience } from './Components/Experience/Experience'
import { Works } from './Components/Works/Works'
import { Testimonial } from './Components/Testimonial/Testimonial'
import { Blog } from './Components/Blog/Blog'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'
import { About } from './Components/About/About'

function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Service/>
    <Experience/>
    <Works/>
    <Testimonial/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
