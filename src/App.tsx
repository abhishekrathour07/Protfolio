import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Protfolio from './pages/Protfolio'
import Projects from './components/Projects'
const App:React.FC = () => {
  return (
    <Routes >
      <Route path='/' element={<Protfolio/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}

export default App
