import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrder, updateAddOrder, updateDeleteOrder } from '../state/orders/actions';
import { ReactComponent as DeleteIcon } from "../img/delete-icon.svg";

const Orders = ({ orders, CartOpen, toggleCart }) => {
  const dispatch = useDispatch();

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const incrementQuantity = (id) => {
    dispatch(updateAddOrder(id));
  };

  const decrementQuantity = (id) => {
    const order = orders.find(order => order.id === id);
    if (order.quantity === 1) {
      dispatch(deleteOrder(id));
    } else {
      dispatch(updateDeleteOrder(id));
    }
  };

  const handleCheckout = () => {
    console.log("Orders: ", orders);
  };

  const totalAmount = orders.reduce((total, order) => total + parseFloat(order.price) * order.quantity, 0);
  const discountAmount = totalAmount >= 1000 ? totalAmount * 0.1 : 0;
  const totalPrice = totalAmount - discountAmount + 50; // Adding delivery cost

  return (
    <div>
      {CartOpen && (
        <div className={'cart-container'}>
          <div className={orders.length !== 0 ? 'shop-cart' : "empty-cart"}>
            <button className="close-cart" onClick={toggleCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {orders.length === 0 ? (
              <p className='empty'>Товарів немає</p>
            ) : (
              <div className="orders">
                <h2 className='title-cart'>Корзина</h2>
                <ul className="shopping-cart">
                  {orders.map((order) => (
                    <li key={order.id} className={"shopping-cart__item"}>
                      <div className='shopping-cart__actions'>
                        <img src={order.img} alt={order.title} width="50" />
                        <p>{order.title}</p>
                      </div>
                      <div className='shopping-cart__actions'>
                        <span className="quantity">{order.price} грн</span>
                        <button className="quantity-btn" onClick={() => decrementQuantity(order.id)}>
                          -
                        </button>
                        <span className="quantity">{order.quantity}</span>
                        <button className="quantity-btn" onClick={() => incrementQuantity(order.id)}>
                          +
                        </button>
                        <DeleteIcon className='delete-icon' onClick={() => handleDeleteOrder(order.id)} />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="order-summary">
                  <div className='order-summary__titles'>
                    <p className='dost'> Доставка </p>
                    <p className='dostprice'> 50 ₴</p>
                  </div>
                  <button className='button-total' onClick={handleCheckout}>
                    <p className='total-price'> oформити за {totalPrice} грн</p>
                  </button>
                </div>
                
               
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
