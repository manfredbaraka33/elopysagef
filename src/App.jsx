import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import MedicalCost from './pages/MedicalCost'
import EnergyConsumption from './pages/EnergyConsumption'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar/>
      <br />
      <div className="mt-5">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/medcost' element={<MedicalCost/>}/>
        <Route path='/energy' element={<EnergyConsumption/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
