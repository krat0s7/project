import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import { items } from "./items/items";
import Categories from "./components/Categories";

export const App = () => {
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

  return (
    <div className='wrapper'>
      <Header orders={orders} setOrders={setOrders}/>
      <Categories items={items} setFilteredItems={setFilteredItems}/> 
      <Items items={filteredItems} addToCart={handleAddToCart} /> 
      <Footer />
    </div>
  );
}