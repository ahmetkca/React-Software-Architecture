
import React from 'react'
import  styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
// import './App.css'
import  Layout  from './components/Layout'
import Home  from './pages/Home'
import  Articles  from './pages/Articles'
import  About  from './pages/About'

const BigAquaHeading = styled.h1`
  font-size: 64px;
  color: #008080;
`;

function App() {


  return (
    <>
      <BigAquaHeading>CSS and Styles when Server-Side Rendering</BigAquaHeading>
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
