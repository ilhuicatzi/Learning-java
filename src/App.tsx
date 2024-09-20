import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/navbar/Navbar'
import JavaPage from './pages/cursoJava/JavaPage'
import JavaModulo_1 from './pages/cursoJava/JavaModulo_1'
import JavaModulo_2 from './pages/cursoJava/JavaModulo_2'
import JavaModulo_3 from './pages/cursoJava/JavaModulo_3'
import SpringBootPage from './pages/cursoSpring/SpringBootPage'
import SpringModulo_1 from './pages/cursoSpring/SpringModulo_1'
import SpringModulo_2 from './pages/cursoSpring/SpringModulo_2'
import SpringModulo_3 from './pages/cursoSpring/SpringModulo_3'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/java" element={<JavaPage />} />
        <Route path="/java/modulo-1" element={<JavaModulo_1 />} />
        <Route path="/java/modulo-2" element={<JavaModulo_2 />} />
        <Route path="/java/modulo-3" element={<JavaModulo_3 />} />
        
        <Route path="/spring-boot" element={<SpringBootPage />} />
        <Route path="/spring-boot/modulo-1" element={<SpringModulo_1 />} />
        <Route path="/spring-boot/modulo-2" element={<SpringModulo_2 />} />
        <Route path="/spring-boot/modulo-3" element={<SpringModulo_3 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App