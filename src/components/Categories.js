import React from 'react';

const Categories = ({ items, setFilteredItems }) => {
  const categories = [
    { key: 'all', name: 'Все' },
    { key: 'Піца', name: 'Піца' },
    { key: 'Бургери', name: 'Бургери' },
    { key: 'Морозиво', name: 'Морозиво' },
    { key: 'Салати', name: 'Салати' },
    { key: 'Напої', name: 'Напої' }
  ];

  const handleCategoryClick = (categoryKey) => {
    if (categoryKey === 'all') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.category === categoryKey);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className='categories'>
      {categories.map(category => (
        <div key={category.key} onClick={() => handleCategoryClick(category.key)}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
