import React from 'react';
import Item from './Item';

const Items = ({ items }) => {
    return (
        <main>
            <div className='items'>
                {items.map((el, index) => (
                    <Item key={el.id} item={el} index={index} />
                ))}
            </div>
        </main>
    );
};

export default Items;
