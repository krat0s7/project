import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Orders } from './Orders';

export default function Header({ orders, setOrders, toggleProfile }) { 
  const [CartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!CartOpen);
    const wrapperElement = document.querySelector('.wrapper');
    if (wrapperElement) {
      wrapperElement.classList.toggle('blur-background');
    }
  };

  return (
    <header>
      <div>
        <span className='logo'>Tasty</span>
        <ul className='nav'>
          <li> Про нас   </li>
          <li> Контакти  </li>
          <li onClick={toggleProfile}> Кабінет   </li> 
        </ul>
        <button className='shop-cart-button' onClick={toggleCart}>
          <FaShoppingCart 
            className={`shop-cart-button ${CartOpen && 'active'}`} 
          />
        </button>
        {CartOpen && (
          <div className={'cart-container'}>
            <div className={orders.length !== 0 ? 'shop-cart' : "empty-cart"}>
              {orders.length === 0 ? (
                <p className='empty'>Товарів немає</p>
              ) : (
                <Orders orders={orders} setOrders={setOrders}/>
              )}
            </div>
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}