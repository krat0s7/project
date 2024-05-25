import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Orders } from './Orders';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RoutesConfig from '../constants/Routes';

export default function Header() { 
  const { orders } = useSelector(state => state.orders);
  const [CartOpen, setCartOpen] = useState(false);
  const nav = useNavigate();

  const toggleCart = () => {
    setCartOpen(!CartOpen);
    const wrapperElement = document.querySelector('.wrapper');
    if (wrapperElement) {
      wrapperElement.classList.toggle('blur-background');
    }
  };

  return (
    <header style={{padding: "40px 70px"}}>
      <div>
          <p className='logo' onClick={() => nav(RoutesConfig.Main.path)}>Tasty</p> 
        <ul className='nav'>
        <Link to={RoutesConfig.About.path}>Про нас</Link>
        <Link to={RoutesConfig.Contacts.path}>Контакти</Link>
        <Link to={RoutesConfig.Cabinet.path}>Кабінет</Link>
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
                <Orders />
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}