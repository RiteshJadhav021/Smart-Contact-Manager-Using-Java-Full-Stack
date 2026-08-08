
import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Hero } from './Component/Hero'
import { Navbar } from './Component/Navbar'
import { Stats } from './Component/Stats'
import { Signup } from './Pages/Signup'
import { Home } from './Pages/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    
    </>
  )
}

export default App
