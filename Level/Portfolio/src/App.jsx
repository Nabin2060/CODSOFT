import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'

// import toast, { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
     <h1 className="text-3xl font-bold underline">
      {/* Hello world! */}
    </h1>
   <div>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Experiance />
    <Contact />
    <Footer />
    </div>
    {/* <Toaster /> */}
    
    
    

    </div>
  )
}

export default App