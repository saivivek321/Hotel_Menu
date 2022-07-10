import React from 'react';
// import Dosa from 'images/dosa.jpg'

function createbox(menuitem){
    const {id,title,img,desc,price}=menuitem;
    return (
        <section key={id} className="menu-item">
           <img src={img} alt={title} className="photo"/>
           <div className="item-info">
           <header>
           <h4>{title}</h4>
            <h4 className="price">₹{price}</h4>
           </header>
              <p className="item-text">{desc}</p> 
           </div>
        </section>
    );
}
function Menu({items}){
  return (
    <div className="section-center">  
      {items.map(createbox)}
    </div>
  );
};

export default Menu;
