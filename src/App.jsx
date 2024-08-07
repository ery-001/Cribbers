
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Events from './pages/Events'
import Projects from './pages/Projects'


function App() {


  return (
    < >
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path="/about" element={<Aboutus />} />
        <Route  path="/event" element={<Events />} />
        <Route  path="/project" element={<Projects />} />
     

      </Routes>
      <Footer /> 
    {/*  <Hero />
      <Mission />
      <Reviews />
      <Reputable />
      <ReachUs />*/}
  
    </>
  )
}

export default App
