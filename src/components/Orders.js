import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, updateAddOrder, updateDeleteOrder } from '../state/orders/actions';

export const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.orders);

  

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
              <FaTrash className='delete-icon' onClick={() => handleDeleteOrder(order.id)} />
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
  );
};
