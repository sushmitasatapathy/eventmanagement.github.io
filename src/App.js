import Navbar from "./Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events.js"
import Createevent from "./pages/Createevent.jsx"
import { Route, Routes } from "react-router-dom"
import Footer from "./pages/Footer"



function App() {
  return (
    <>
    
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/createevent" element={<Createevent />} />
        </Routes>
        <Footer />
      
      </div>
    </>
  )
}

export default App