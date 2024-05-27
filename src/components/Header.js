import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Orders } from './Orders';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RoutesConfig from '../constants/Routes';

export default function Header() { 
  const { orders } = useSelector(state => state.orders);
  const [CartOpen, setCartOpen] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false)
  const nav = useNavigate();

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
        <nav className='nav'>
          <p className='logo' onClick={() => nav(RoutesConfig.Main.path)}>Tasty</p> 
          <ul className='nav-list'>
            <Link to={RoutesConfig.About.path}>Про нас</Link>
            <Link to={RoutesConfig.Contacts.path}>Контакти</Link>
            <Link to={RoutesConfig.Cabinet.path}>Кабінет</Link>
          </ul>
          <button className='shop-cart-button' onClick={toggleCart}>
            <FaShoppingCart  
              className={`shop-cart-button ${CartOpen && 'active'}`} 
            />
          </button>
          <button className={`burger ${burgerActive ? "active" : ""}`} onClick={() => setBurgerActive(!burgerActive)}>
            <span className='burger-span'></span>
            <span className='burger-span'></span>
            <span className='burger-span'></span>
          </button>
        </nav>
        <div className={`mobile-menu ${burgerActive ? "active" : ""}`}>
          <ul className='nav-list-mobile'>
            <Link to={RoutesConfig.About.path} onClick={() => setBurgerActive(false)}>Про нас</Link>
            <Link to={RoutesConfig.Contacts.path} onClick={() => setBurgerActive(false)}>Контакти</Link>
            <Link to={RoutesConfig.Cabinet.path} onClick={() => setBurgerActive(false)}>Кабінет</Link>
            </ul>
        </div>
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