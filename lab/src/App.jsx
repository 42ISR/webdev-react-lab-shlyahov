import { useState } from 'react'
import './App.css'
import Header from './comp/Header'
import Hero from './comp/Hero'
import Courses from './comp/Courses'
import Testimonials from './comp/Testimonials'
import Footer from './comp/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Courses />
    <Testimonials />
    <Footer /> 
    </>
  )
}

export default App
