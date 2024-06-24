import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RoutesConfig from '../constants/Routes';
import { ReactComponent as Logo } from "../img/logo.svg";
import Orders from './Orders';

export default function Header() { 
  const { orders } = useSelector(state => state.orders);
  const [CartOpen, setCartOpen] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
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
          <Logo className='logo' onClick={() => nav(RoutesConfig.Main.path)} /> 
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
        <Orders 
          orders={orders} 
          CartOpen={CartOpen} 
          toggleCart={toggleCart} 
          burgerActive={burgerActive} 
          setBurgerActive={setBurgerActive} 
        />
      </div>
    </header>
  )
}
