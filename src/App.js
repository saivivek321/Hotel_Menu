import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import SearchBox from './SearchBox';

const allCategorieExceptAll=new Set(items.map((item)=> item.category));
const allCategories=['All',...allCategorieExceptAll];

function App() {

  const [menuitems,editItems]=useState(items);
  const [categories,editCategories]=useState(allCategories);
  const [searchfield, setSearchField] = useState('')

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

  const filteredItems = menuitems.filter(item=>{
    return item.title.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
  })

  const onSearchChange = (event) => setSearchField(event.target.value)

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Quality Hotel</h2>
          <div className="underline"></div>
        </div>
        <SearchBox searchChange={onSearchChange}/>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={filteredItems}/>
      </section>
    </main>
  )
}

export default App;
