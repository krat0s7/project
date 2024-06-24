import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RoutesConfig from '../constants/Routes';
import { ReactComponent as Logo } from "../img/logo.svg";
import Orders from './Orders';

export default function Header() {
  const { orders } = useSelector(state => state.orders);
  const [CartOpen, setCartOpen] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false)

  const nav = useNavigate();

  const toggleCart = () => {
    setCartOpen(!CartOpen);
  };

  const totalItems = orders.reduce((sum, order) => sum + order.quantity, 0);
  const totalPrice = orders.reduce((sum, order) => sum + (parseFloat(order.price) || 0) * order.quantity, 0);

  return (
    <header>
      <nav className='nav'>
        <Logo className='logo' onClick={() => nav(RoutesConfig.Main.path)} />
        <ul className='nav-list'>
          <li><Link to={RoutesConfig.About.path}>Про нас</Link></li>
          <li><Link to={RoutesConfig.Contacts.path}>Контакти</Link></li>
          <li><Link to={RoutesConfig.CateringComponent.path}>Кейтеринг</Link></li>
          <li><Link to={RoutesConfig.CatalogComponent.path}>Каталог</Link></li>
        </ul>
        <button className='shop-cart-button' onClick={toggleCart}>
          <div className='item-count'>{totalItems}</div>
          <p> {totalPrice.toFixed(2)}</p>
          <span>грн</span>
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
            <Link to={RoutesConfig.CateringComponent.path} onClick={() => setBurgerActive(false)}>Кабінет</Link>
            <Link to={RoutesConfig.Main.path} onClick={() => setBurgerActive(false)}>Кабінет</Link>
            <Link to={RoutesConfig.CatalogComponent.path} onClick={() => setBurgerActive(false)}>Кабінет</Link>
            </ul>
        </div>
      <Orders
        orders={orders}
        CartOpen={CartOpen}
        toggleCart={toggleCart}
      />
    </header>
  );
}
