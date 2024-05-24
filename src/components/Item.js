import React from 'react';

const Item = ({ item, addToCart }) => {
    console.log(item.img)
    return (
        <div className='item'>
          <img src={item.img} alt={item.title} width={200} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b className='item__price'>{item.price} грн</b>
            <button className='add-to-cart' onClick={() => addToCart(item)}>+</button>
        </div>
    );
};

export default Item;
