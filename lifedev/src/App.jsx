import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="conteiner">
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/about" element={<About />}> </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
