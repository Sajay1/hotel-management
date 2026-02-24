import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/about"} element={<About/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
