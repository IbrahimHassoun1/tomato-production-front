import React from 'react'
React
import './Footer.css'
import { assets } from '../../assets/food del assets/frontend_assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='logo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum aliquid distinctio perferendis at quam magni vero ab mollitia quod quo eaque repudiandae quis natus dignissimos, eveniet vel dolore! Ipsum.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='fb'/>
                    <img src={assets.linkedin_icon} alt='linkedin'/>
                    <img src={assets.twitter_icon} alt='twitter'/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+961 71 68 57 96</li>
                    <li>Tomato@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className='footer-copyright'>
            copyright {new Date().getFullYear()} &copy;Tomato.com  all rights reserved 
        </p>
    </div>
  )
}

export default Footer
