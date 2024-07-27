import React from 'react';
import './Cart.css';
import { useStoreContext } from '../../Context/useStoreContext';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartitems, food_list, removeformcart,gettotalcartamount } = useStoreContext();
  const navigate= useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartitems[item._id] > 0) {
            return (
              <>
              <div key={item._id} className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartitems[item._id]}</p>
                <p>{item.price*cartitems[item._id]}</p>
                <p onClick={()=>{removeformcart(item._id)}} className='cross'>X</p>
              </div>
              <hr />
              </>
              
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${gettotalcartamount()}</p>
              
            </div>
            <hr />
            <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${gettotalcartamount()===0?0:2}</p>
          
            </div>
            <hr />
            <div className="cart-total-details">
            <b>Total</b>
            <b>${gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To checkOut</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
