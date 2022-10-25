import React, { useState, Fragment } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  // useState method for menu
  const [menuItems, setMenuItems] = useState(items)
  // useState method for categories
  const [categories, setCategories] = useState([])

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
        <Categories />
        {/* Menu component */}
        <Menu items={menuItems} />
      </section>
    </Fragment>
  );
}

export default App;
