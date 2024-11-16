import React, { useContext } from 'react'
React
import './LoginPopUp.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { assets } from '../../assets/food del assets/frontend_assets/assets'
import { StoreContext } from '../../context/storecontext'
import axios from 'axios'

const LoginPopUp = ({setShowLogin}) => {
  
const {url,setToken}=useContext(StoreContext)
const [currState,setCurrState]=useState("Sign Up")

const [data,setData]=useState({
  name:"",
  email:"",
  password:""
})

const onChangeHandler=(event)=>{

  const name=event.target.name
  const value=event.target.value
  setData(data=>({...data,[name]:value}))
}

const onLogin=async (event)=>{
  event.preventDefault();
  let newURL = url;
  if(currState==="Login"){
    newURL+="/api/user/login"

  }else{
    newURL +="/api/user/register"
  }
  const response =await axios.post(newURL,data)

  if(response.data.success){
    setToken(response.data.token)
    localStorage.setItem("token",response.data.token)
    setShowLogin(false)
  }else{
    alert(response.data.message)
  }
}

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon}/>
            
        </div>
        <div className="login-popup-input">
                {currState==="Login"?<></>:<input name='name' value={data.name} onChange={onChangeHandler} type="text" placeholder='Your name' required />}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing I agree to terms and conditions</p>
        </div>
        {currState==="Login"?
        <p>Create a new Account?<span onClick={()=>{setCurrState("Sign Up")}}>Click Here!</span></p>:
        <p>Already have an account?<span onClick={()=>{setCurrState("Login")}}>Login here</span></p>}
        
        
       
      </form>
    </div>
  )
}

LoginPopUp.propTypes={
    setShowLogin:PropTypes.func.isRequired
}
export default LoginPopUp
