import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Loginpopup from './components/Loginpopup/Loginpopup';

const App = () => {
  const[showlogin,setshowlogin]=useState<boolean>(false)
  const handleShowLogin = () => {
    setshowlogin(!showlogin);
  };
  return (
    <>
    {showlogin? <Loginpopup setshowlogin={handleShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={handleShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeorder />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
};

export default App;
