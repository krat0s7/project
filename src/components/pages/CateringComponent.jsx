// CateringComponent.js
import React from 'react';
import cateringData from './Catering.json';

const CateringComponent = () => {
  return (
    <div>
      <h1>{cateringData.title}</h1>
      <p>{cateringData.description}</p>
      <h2>Послуги</h2>
      <ul>
        {cateringData.services.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>{service.price}</p>
          </li>
        ))}
      </ul>
      <h2>Меню</h2>
      {cateringData.menu.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>
                <p>{item.name} - {item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Галерея</h2>
      <ul>
        {cateringData.gallery.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.description} />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <h2>Контакти</h2>
      <p>Телефон: {cateringData.contact.phone}</p>
      <p>Email: {cateringData.contact.email}</p>
      <p>Адреса: {cateringData.contact.address}</p>
    </div>
  );
};

export default CateringComponent;
