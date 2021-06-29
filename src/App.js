import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategorieExceptAll=new Set(items.map((item)=> item.category));
const allCategories=['All',...allCategorieExceptAll];

function App() {

  const [menuitems,editItems]=useState(items);
  const [categories,editCategories]=useState(allCategories);

  function filterItems(category){
    if(category ==='All'){
      editItems(items);
      return;
    }
    const subItems=items.filter((item)=>{
      return item.category === category
    });
    editItems(subItems);
  }
  return <main>
  <section className="menu section">
     <div className="title">
         <h2>Quality Hotel</h2>
         <div className="underline"></div>
     </div>
     <Categories categories={categories} filterItems={filterItems}/>
     <Menu items={menuitems}/>
  </section>
  </main>;
}

export default App;
