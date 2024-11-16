import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import Order from './pages/placeorder/placeorder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx'
const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
  {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order'element={<Order/>}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
