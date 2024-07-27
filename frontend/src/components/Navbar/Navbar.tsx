import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

interface Props {
  setshowlogin: () => void;
}

const Navbar = ({ setshowlogin }: Props) => {
  const [menu, setmenu] = useState('home');
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error('StoreContext must be used within a StoreProvider');
  }

  const { gettotalcartamount } = storeContext;

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setmenu('home')} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setmenu('menu')} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#footer' onClick={() => setmenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="nabar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="cart icon" /></Link>
          <div className={gettotalcartamount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setshowlogin()}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
