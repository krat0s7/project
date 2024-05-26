import React from 'react';
import Item from './Item';

const Items = ({ items, addToCart }) => {
    return (
      <main>
        <div className='items'>
          {items.map(el => (
              <Item key={el.id} item={el} addToCart={addToCart} />
          ))}
        </div>
      </main>
    )
};

export default Items;
