import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrder, updateAddOrder, updateDeleteOrder } from '../state/orders/actions';
import { ReactComponent as Delete } from "../img/delete-icon.svg";

const Orders = ({ orders, CartOpen, toggleCart, burgerActive, setBurgerActive }) => {
  const dispatch = useDispatch();

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const incrementQuantity = (id) => {
    dispatch(updateAddOrder(id));
  };

  const decrementQuantity = (id) => {
    dispatch(updateDeleteOrder(id));
  };

  const totalAmount = orders.reduce((total, order) => total + parseFloat(order.price) * order.quantity, 0);
  const discountAmount = totalAmount >= 1000 ? totalAmount * 0.1 : 0;
  const totalPrice = totalAmount - discountAmount;

  return (
    <div>
      {CartOpen && (
        <div className={'cart-container'}>
          <div className={orders.length !== 0 ? 'shop-cart' : "empty-cart"}>
            {orders.length === 0 ? (
              <p className='empty'>Товарів немає</p>
            ) : (
              <div className="orders">
                <div>
                  <h2 className='title-cart'>Корзина</h2>
                  <ul>
                    {orders.map((order) => (
                      <li key={order.id} className={"shopping-cart__item"}>
                        <img src={order.img} alt={order.title} width="50" />
                        <span>
                          {order.title} - {order.price} грн (кількість: {order.quantity})
                        </span>
                        <button className="quantity-btn" onClick={() => decrementQuantity(order.id)}>
                          -
                        </button>
                        <span className="quantity">{order.quantity}</span>
                        <button className="quantity-btn" onClick={() => incrementQuantity(order.id)}>
                          +
                        </button>
                        <Delete className='delete-icon' onClick={() => handleDeleteOrder(order.id)} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-summary">
                  <button className='button-total'>
                    <p className='total-price'> Оформити за {totalPrice} грн</p>
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
