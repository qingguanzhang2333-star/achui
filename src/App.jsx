import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturesStrip from './components/FeaturesStrip'
import Products from './components/Products'
import StatsBar from './components/StatsBar'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ProductDetail from './pages/ProductDetail'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesStrip />
        <Products />
        <StatsBar />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/nx-one" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
