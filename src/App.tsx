import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Protfolio from './pages/Protfolio'
const App:React.FC = () => {
  return (
    <Routes >
      <Route path='/' element={<Protfolio/>}/>
    </Routes>
  )
}

export default App
