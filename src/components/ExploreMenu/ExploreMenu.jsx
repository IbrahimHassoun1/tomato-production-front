import React from 'react'
React
import './ExploreMenu.css'
import { menu_list } from '../../assets/food del assets/frontend_assets/assets'
import PropTypes from 'prop-types';


const ExploreMenu = ( {category,setCategory} ) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients to satisfy your cravings and elevate tour dining experience,one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div key={index} className="explore-menu-list-item" onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)}>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr></hr>
    </div>
  )
}
ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired,        // Validate 'category' as a string
    setCategory: PropTypes.func.isRequired,       // Validate 'setCategory' as a function
  };
export default ExploreMenu
