import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Protfolio from './pages/Protfolio'
import Projects from './components/Projects'
import Connect from './components/Connect'
import HoverDevCards from './components/SkillsCards'
const App: React.FC = () => {
  return (
    <Routes >
      <Route path='/' element={<Protfolio />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/feedback' element={<Connect />} />
      <Route path='/skills' element={<HoverDevCards />} />
    </Routes>
  )
}

export default App
