import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/HomePage/Nav.jsx'
import Hero from './components/HomePage/Hero.jsx'
import FeaturedCollection from './components/HomePage/FeaturedCollection.jsx'
import Display from './components/HomePage/Display.jsx'
import Footer from './components/HomePage/Footer.jsx'
import Exclusive from './components/HomePage/Exclusive.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Nav></Nav>
    <Hero></Hero>
    <FeaturedCollection></FeaturedCollection>
    <Display></Display>
    <Exclusive></Exclusive>
    <Footer></Footer> 
    </>
  )
}

export default App
