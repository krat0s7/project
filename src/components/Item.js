import React from 'react';
import { addOrder } from '../state/orders/actions';
import { useDispatch } from 'react-redux';

const Item = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className='item'>
          <img src={item.img} alt={item.title} width={200} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b className='item__price'>{item.price} грн</b>
            <button className='add-to-cart' onClick={() => dispatch(addOrder(item))}>+</button>
        </div>
    );
};

export default Item;
