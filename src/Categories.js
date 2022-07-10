import React from 'react';

function Categories({categories,filterItems}){
  return (
    <div className="btn-container">
    {
      categories.map((category,index)=>{
        return (
          <button className="filter-btn"
            type="button"
            key={index}
            onClick={()=>{filterItems(category)}}
          >
          {category}
          </button>
        );
      })
    }
    
    {/* <button className="filter-btn"
    onClick={()=>{
      filterItems('lunch')
    }}>lunch</button> */}
    
    </div>
  );
};

export default Categories;