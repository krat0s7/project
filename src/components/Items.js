import React from 'react';
import Item from './Item';

const Items = ({ items, addToCart }) => {
    return (
      <main>
        {items.map(el => (
            <Item key={el.id} item={el} addToCart={addToCart} />
        ))}
      </main>
    )
};

export default Items;
