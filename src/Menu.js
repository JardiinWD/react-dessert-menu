import React, { Fragment } from 'react';

const Menu = ({ items }) => {


  return (
    <Fragment>
      <div className='section-center'>
        {
          items.map((item) => {
            // Destructuring of my Props
            const { id, title, img, price, desc } = item
            return (
              /* menu-item */
              <article key={id} className="menu-item">
                {/* photo */}
                <img src={img} alt={title} className="photo" />
                {/* item-info */}
                <div className='item-info'>
                  <header>
                    {/* title */}
                    <h4>{title}</h4>
                    {/* price */}
                    <h4 className="price">${price}</h4>
                  </header>
                  {/* desc */}
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            )
          })
        }
      </div>
    </Fragment>
  );
};

export default Menu;
