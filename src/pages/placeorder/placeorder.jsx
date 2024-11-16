import React, {  useState } from 'react'
React
import './placeorder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/storecontext'
import axios from 'axios'
const Placeorder = () => {
    const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
    const [data,setData]=useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipCode:"",
      country:"",
      phone:""
    })

    const onChangeHandler=(event)=>{
      const name = event.target.name;
      const value=event.target.value;
      setData(data=>({...data,[name]:value}))
    }
    

    const placeOrder=async(event)=>{
      event.preventDefault()
      let orderItems=[];
      food_list.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo=item;
          itemInfo["quantity"]=cartItems[item._id]
          orderItems.push(itemInfo)
        }
      })
      let orderData={
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2
      }
      console.log(orderData)
      console.log("Before axios")
      let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}})
      console.log("After axios")
      if(response.data.success){
        const{session_url}=response.data
        console.log(session_url)
        window.location.replace(session_url)
        
      }else{
        alert("Error")
      }
      console.log(orderItems);
      
    }
    return (
    <form className='place-order' onSubmit={placeOrder}>
        <div className="place-order-left">
            <p className='title'>Delivery information</p>
            <div className="multi-fields">
                <input required type="text" placeholder='first name' name='firstName' value={data.firstName} onChange={onChangeHandler} />
                <input required type="text" placeholder='last name' name='lastName' value={data.lastName} onChange={onChangeHandler} />
            </div>
            <input required type="email" placeholder='Email address' name='email' value={data.email} onChange={onChangeHandler}/>
            <input required type="text" placeholder='street' name='street' value={data.street} onChange={onChangeHandler}/>
            <div className="multi-fields">
                <input required type="text" placeholder='City' name='city' value={data.city} onChange={onChangeHandler}/>
                <input required type="text" placeholder='State' name='state' value={data.state} onChange={onChangeHandler}/>
            </div>
            <div className="multi-fields">
                <input required type="text" placeholder='Zip code' name='zipCode' value={data.zipCode} onChange={onChangeHandler} />
                <input required type="text" placeholder='country' name='country' value={data.country} onChange={onChangeHandler}/>
            </div>
            <input required type="text" placeholder='Phone'/>
        </div>
        <div  className="place-order-right">
        <div className="cart-total">
          <h2>cart Totals</h2>
          
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <hr />
            <button onClick={placeOrder} type='submit'>PROCEED TO PAYMENT</button>
          </div>
          
        </div>
        </div>
    </form>
)
}

export default Placeorder
