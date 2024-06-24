import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../state/orders/actions';

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addOrder(item));
  };

  return (
    <div className="it">
      <img src={`../../img/${item.img}`} alt={item.name} />
      <h3 className="it-name">{item.name}</h3>
      <p className="it-description">{item.description}</p>
      <p className="it-price">{item.price}</p>
      <button className="add-to-cart-btn" onClick={addToCart}>
        <span className="plus-icon">+</span>
      </button>
    </div>
  );
};

export default Product;
