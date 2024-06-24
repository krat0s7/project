import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, updateAddOrder } from '../state/orders/actions';

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders);

  const [showAddButton, setShowAddButton] = useState(false);

  const addToCart = () => {
    dispatch(addOrder(item));
  };

  const incrementQuantity = () => {
    dispatch(updateAddOrder(item.id));
  };

  const order = orders.find(order => order.id === item.id);
  const quantity = order ? order.quantity : 0;

  return (
    <div className='item'>
      <div className='item__image' onClick={() => setShowAddButton(true)}>
        <img src={item.img} alt={item.title} />
      </div>
      <div className='item__details'>
        <h2>{item.title}</h2>
        <h3>{item.set}</h3>
        <p>{item.weight}</p>
        <b className='item__price'>{item.price} грн</b>
        <div className='item__buttons'>
          {showAddButton && (
            quantity === 0 ? (
              <button className='add-to-cart' onClick={addToCart}>
                Добавити в кошик
              </button>
            ) : (
              <button className='add-to-cart' onClick={incrementQuantity}>
                В кошику {quantity} шт за {item.price * quantity} грн
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
