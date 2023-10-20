import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="conteiner">
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/about" element={<About />}> </Route>
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
