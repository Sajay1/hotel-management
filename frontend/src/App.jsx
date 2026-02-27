import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Rooms from './pages/Rooms'

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
