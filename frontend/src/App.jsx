import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import OutletSelector from './components/outletSelector/outletSelector'
import Hotspot from './pages/Hotspot/Hotspot'
import Southern from './pages/Southern/Southern'
import SnapEats from './pages/SnapEats/SnapEats'
import Quench from './pages/Quench/Quench'
import Verify from './pages/Verify/Verify'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="container">
        <div className='app'>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/verify' element={<Verify/>}/>
            <Route path='/bennett-foods' element={<OutletSelector />} />

            <Route path='/bennett-foods/hotspot' element={<Hotspot />} />
            <Route path='/bennett-foods/southern' element={<Southern />} />
            <Route path='/bennett-foods/snapeats' element={<SnapEats />} />
            <Route path='/bennett-foods/quench' element={<Quench />} />

          </Routes>
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
