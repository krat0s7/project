import React from 'react';
import Item from './Item';

const Items = ({ items, addToCart }) => {
    return (
        <main>
            <div className='items'>
                {items.map((el, index) => (
                    <Item key={el.id} item={el} showButton={index === 0 || index === 4} />
                ))}
            </div>
        </main>
    );
};

export default Items;
