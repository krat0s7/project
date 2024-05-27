import React from 'react';
import { addOrder } from '../state/orders/actions';
import { useDispatch } from 'react-redux';

const Item = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className='item'>
            <div>
                <img src={item.img} alt={item.title} width={200} height={350}/>
            </div>
            <div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b className='item__price'>{item.price} грн</b>
                <button className='add-to-cart' onClick={() => dispatch(addOrder(item))}>+</button>
            </div>
        </div>
    );
};

export default Item;
