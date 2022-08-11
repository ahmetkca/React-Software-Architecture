
import React from 'react'

import { Routes, Route } from 'react-router-dom'
// import './App.css'
import  Layout  from './components/Layout'
import Home  from './pages/Home'
import  Articles  from './pages/Articles'
import  About  from './pages/About'

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="articles" element={<Articles />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
