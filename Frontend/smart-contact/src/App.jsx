
import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Hero } from './Component/Hero'
import { Navbar } from './Component/Navbar'
import { Stats } from './Component/Stats'
import { Signup } from './Pages/Signup'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { UserDashboard } from './Pages/UserDashboard'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/userdashboard" element={<UserDashboard />} />

     
    </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    
    </>
  )
}

export default App
