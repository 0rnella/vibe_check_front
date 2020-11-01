import React from 'react';


const LawsuitsCategory = (props) => {
  const { categoryData, styling } = props;

  return (
    <section className={`category lawsuits ${styling}`}>
      <h3>Lawsuits and settlements: {categoryData.rating}</h3>

      <div className='grid'>
        <div className='item'>
          <h4>Average number of <b>lawsuits</b> per year</h4>
          <p className='number'>{categoryData.averageLawsuitsPerYear}</p>
        </div>
        <div className='item'>
          <h4>Average number of <b>settlements</b> per year</h4>
          <p className='number'>{categoryData.averageSettlementsPerYear}</p>
        </div>
        <div className='item'>
          <h4>Average number of <b>civil lawsuits</b> per year</h4>
          <p className='number'>{categoryData.averageCivilLawsuits}</p>
        </div>
        <div className='item'>
          <h4>Average <b>amount</b> spent on each settlement</h4>
          <p className='number'>${categoryData.averageAmountOfSettlement}</p>
        </div>
      </div>

      <h4>Sources:</h4>
      <ul>
      </ul>
    </section>
  );
};

export default LawsuitsCategory;