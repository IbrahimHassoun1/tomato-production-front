/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Fooditem.css";
import PropTypes from "prop-types";
import { assets } from "../../assets/food del assets/frontend_assets/assets";
import { StoreContext } from "../../context/storecontext";
const Fooditem = ({ id, name, price, description, image }) => {

    
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)
  return (
    <div className={`food-item `}>
      <div className="food-item-img-container">
        <img className="food-item-image" src={url+"/images/"+image} alt="food item image" />
        {!cartItems[id]
        ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
        :   <div className="food-item-counter">
                <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)}/>
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green} onClick={()=>addToCart(id)}/>
            </div>}
      </div>
      <div className={`food-item-info ${id} `}>
        <div className="food-item-name-rating">
          {name}
          <img src={assets.rating_starts}></img>
        </div>
        <p className="food-item-desc"></p>
        {description}
        <p className="food-item-price"></p>
        <p className="food-item-price">{price}$</p>
      </div>
    </div>
  );
};

Fooditem.propTypes = {
  id:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // Fixed type to string
};
export default Fooditem;
