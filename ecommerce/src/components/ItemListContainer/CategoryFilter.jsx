import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category}
          className={`filter-button ${selectedCategory === category ? 'selected' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
      
    </div>
  );
};

export default CategoryFilter;
