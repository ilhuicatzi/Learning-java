import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/navbar/Navbar'
import JavaPage from './pages/cursoJava/JavaPage'
import SpringBootPage from './pages/cursoSpring/SpringBootPage'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/java" element={<JavaPage />} />
        <Route path="/spring-boot" element={<SpringBootPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App