import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Rooms from './components/Rooms'

function App() {

  return (
    <>
        <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/about"} element={<About/>}/>
      <Route path={"/contact"} element={<Contact/>} />
      <Route path={"/rooms"} element={<Rooms/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
