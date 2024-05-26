import { useState } from "react";

import { items } from "../../items/items";

import Categories from "../Categories";
import Items from "../Items";

export default function MainPage( ) {
    const [orders, setOrders] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    const handleAddToCart = (item) => {
      const existingOrder = orders.find(order => order.id === item.id);
      
      if (existingOrder) {
        const updatedOrders = orders.map(order => {
          if (order.id === item.id) {
            return { ...order, quantity: order.quantity + 1 }; 
          }
          return order;
        });
        setOrders(updatedOrders);
      } else {
        const newOrder = { ...item, quantity: 1 }; 
        setOrders([...orders, newOrder]);
      }
    }

    return(
        <>
            <div className='presentation'>
              <p className="text">Смак, на який ви заслуговуєте</p>
              <p className="text"> по низьким цінам</p>
            </div>

            <Categories items={items} setFilteredItems={setFilteredItems}/> 
            <Items items={filteredItems} addToCart={handleAddToCart} /> 
        </>
    )
}