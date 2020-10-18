import React from 'react';
import startCase from 'lodash.startcase';

export const CategorySection = (props) => {
  const { categoryName, categoryData, styling } = props;

  // if data is an object, not an array
  if (!Array.isArray(categoryData)) {
    const keys = Object.keys(categoryData);
    return (<section className={`category ${styling}`}>
      <h3>{categoryName}</h3>
      {keys.map(key => <p key={key}><b>{startCase(key)}</b>: {categoryData[key]}</p>)}
    </section>);
  }
};

