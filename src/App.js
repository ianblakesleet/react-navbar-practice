import Navbar from './Navbar'
import './styles.css'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
