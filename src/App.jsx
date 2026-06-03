import { Routes, Route } from "react-router-dom";

import MainLayout from './components/layout/MainLayout';

import Home from './pages/Home';
import Features from './pages/features/Features';
import HowItWorks from './pages/howitworks/HowItWorks'; 
import Solutions from './pages/solutions/Solutions'; 
import Pricing from './pages/pricing/Pricing'; 
import Bookademo from './pages/bookademo/Bookademo';
import Platform from './pages/platform/Platform';
import About from './pages/about/About';


function App() {

  return (

    <MainLayout>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/features" element={<Features />} />
        <Route path="/howitworks" element={<HowItWorks />} /> 
        <Route path="/solutions" element={<Solutions />} /> 
        <Route path="/pricing" element={<Pricing />} /> 
        <Route path="/bookademo" element={<Bookademo />} />
        <Route path="/about" element={<About />} />
        <Route path="/platform" element={<Platform />} />

      </Routes>

    </MainLayout>

  )

}

export default App