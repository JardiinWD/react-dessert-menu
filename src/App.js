import React, { useState, Fragment } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// I saved all categories in a variable
// In this case the Set method was necessary, because with this I can filtered well and remove all the cloned one
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
// Verify 
console.log(allCategories);

function App() {

  // useState method for menu
  const [menuItems, setMenuItems] = useState(items)
  // useState method for categories with the initial state settled as allCategories
  const [categories, setCategories] = useState(allCategories)

  // Handler function for filter menuItems in different category
  const filterItems = (category) => {
    // Statement just for rendering all the items
    if (category === 'all') {
      setMenuItems(items)
      return
    }

    // Saved in a new variable the filtered category
    const newItems = items.filter(item => item.category === category)
    // Updated the current state of menuItems
    setMenuItems(newItems)
  }


  return (
    <Fragment>
      {/* menu section */}
      <section className="menu section">
        {/* title */}
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        {/* Categories component */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* Menu component */}
        <Menu items={menuItems} />
      </section>
    </Fragment>
  );
}

export default App;
