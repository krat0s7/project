import React from 'react';
import cateringData from './Catering.json';
import './Catering.css'; 

const CateringComponent = () => {
  return (
    <div className="container-catering">
      <h1 className="title">{cateringData.title}</h1>
      <p className="description">{cateringData.description}</p>
      <h2> Послуги</h2>
      <ul className="service">
        {cateringData.services.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
      <h2>Меню</h2>
      {cateringData.menu.map((category, index) => (
        <div className="menu" key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Галерея</h2>
      <ul className="gallery">
        {cateringData.gallery.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.description} />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CateringComponent;
