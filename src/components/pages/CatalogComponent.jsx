import React, { useState } from 'react';
import catalogData from './Catalog.json';
import './Catalog.css';
import Product from './Product';

const CatalogComponent = () => {
  
  return (
    <div className="container-catalog">
      <h1 className="tit">{catalogData.catalog.title}</h1>
      {catalogData.catalog.categories.map((category, index) => (
        <div key={index}>
          <h2 className="section-title">{category.name}</h2>
          <div className="its">
            {category.items.map((item, i) => (
              <Product key={i} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogComponent;
