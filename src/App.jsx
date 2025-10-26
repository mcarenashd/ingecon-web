import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Contact from './pages/Contact'
import DataProtection from './pages/DataProtection'
import Projects from './components/Projects'
import Services from './components/Services'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/proteccion-datos" element={<DataProtection />} />
      </Routes>

      <Footer />
    </>
  )
}
