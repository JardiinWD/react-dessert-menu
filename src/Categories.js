import React, { Fragment } from 'react';

const Categories = ({ categories, filterItems }) => {



  return (
    <Fragment>
      {/* btn-container */}
      <div className='btn-container'>
        {
          categories.map((category, index) => {
            // Handler Filter Function. You MUST create it here, because the category param is only here!
            const filterHandler = (event) => {
              // Preventing refresh
              event.preventDefault()
              // Filtered by category
              filterItems(category)
            }
            // Return
            return (
              <button type='button' key={index} className='filter-btn' onClick={filterHandler}>{category}</button>
            )
          })
        }
      </div>
    </Fragment >
  );
};

export default Categories;
