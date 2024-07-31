import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo}/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quo odit! Officiis quod exercitationem sed nulla soluta nobis, aliquid cupiditate sint. Soluta modi itaque rem illum vel nemo perferendis at!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon} />
            </div>
            </div>
            <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
            </div>
            <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+923094055144</li>
                <li>ahmadabbas7925@gmail.com</li>
            </ul>
            </div>
        </div>
    <hr />
    <p className='footer-copyright'>Copyright 2024 Tomato.com -All Right Reserver</p>
    </div>
  )
}

export default Footer