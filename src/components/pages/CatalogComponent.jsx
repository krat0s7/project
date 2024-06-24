// CatalogComponent.js
import React from 'react';
import catalogData from './Catalog.json';

const CatalogComponent = () => {
  return (
    <div>
      <h1>{catalogData.catalog.title}</h1>
      {catalogData.catalog.categories.map((category, index) => (
        <div key={index}>
          <h2>{category.name}</h2>
          <div className="items">
            {category.items.map((item, i) => (
              <div key={i} className="item">
                <img src={require(`../../img/${item.image}`).default} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogComponent;
