import React from 'react';
import { FaTrash } from 'react-icons/fa';

export const Orders = ({ orders, setOrders }) => {
  // Загальна кількість товарів
  const getTotalQuantity = (orderId) => {
    return orders.reduce((total, order) => {
      return order.id === orderId ? total + order.quantity : total;
    }, 0);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const incrementQuantity = (id) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id) {
        return { ...order, quantity: order.quantity + 1 };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const decrementQuantity = (id) => {
    const updatedOrders = orders.map(order => {
      if (order.id === id && order.quantity > 1) {
        return { ...order, quantity: order.quantity - 1 };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const totalAmount = orders.reduce((total, order) => total + parseFloat(order.price) * order.quantity, 0);
  const discountAmount = totalAmount >= 1000 ? totalAmount * 0.1 : 0;
  const totalPrice = totalAmount - discountAmount;

  return (
    <div className="orders">
      <h2 className='title-cart'>Корзина</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id} className={"shopping-cart__item"}>
            <img src={order.img} alt={order.title} width="50" />
            <span>
              {order.title} - {order.price} грн (кількість: {getTotalQuantity(order.id)})
            </span>
            <button className="quantity-btn" onClick={() => decrementQuantity(order.id)}>
              -
            </button>
            <span className="quantity">{order.quantity}</span>
            <button className="quantity-btn" onClick={() => incrementQuantity(order.id)}>
              +
            </button>
            <FaTrash className='delete-icon' onClick={() => deleteOrder(order.id)} />
          </li>
        ))}
      </ul>
      <div className="order-summary">
        <button className='button-total'>
          <p className='total-price'> Оформити за {totalPrice} грн</p>
        </button>
      </div>
    </div>
  );
};
