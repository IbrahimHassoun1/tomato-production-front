import React,{useContext, useState} from 'react'
import './navbar.css'
import { assets } from '../../assets/food del assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { StoreContext } from '../../context/storecontext'
React


const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('home')
    const{getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate=useNavigate()

    const logout=()=>{
    localStorage.removeItem("token")
    setToken("");
    navigate("/")
    }

  

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' className={menu==='home'?"active":""} onClick={()=>setMenu("home")}>Home</Link>
        <a href='#explore-menu' className={menu==='menu'?"active":""} onClick={()=>setMenu("menu")}>Menu</a>
        <a href='#app-download' className={menu==='mobile app'?"active":""} onClick={()=>setMenu("mobile app")}>Mobile app</a>
        <a href='#footer' className={menu==='contact us'?"active":""} onClick={()=>setMenu("contact us")}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?'':'dot'}></div>
        </div>
        { !token? <button onClick={()=>{setShowLogin(true)}}>Sign in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon}/>
          <ul className="nav-profile-dropdown">
            <Link to='/order'><img src={assets.bag_icon} alt=''/>Orders</Link>
            <hr />
            <li onClick={logout}><img  src={assets.logout_icon} alt=''/>Logout</li>
          </ul>
          </div>}
        
      </div>
    </div>
  )
}

Navbar.propTypes={
  setShowLogin:PropTypes.func.isRequired
}
export default Navbar
