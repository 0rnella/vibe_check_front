import React from 'react';

const LawsuitsCategory = (props) => {
  const { categoryData, styling } = props;

  return (
    <section id="lawsuits" className={`category lawsuits ${styling}`}>
      <h3><a href="#lawsuits">Lawsuits and settlements</a></h3>

      <div className='grid'>
        <div className='item'>
          <h4>Average number of <b>lawsuits</b> per year</h4>
          {categoryData.averageLawsuitsPerYear?
            <p className='number'>{categoryData.averageLawsuitsPerYear}</p>
            : 'We were not able to find data.'}
        </div>
        <div className='item'>
          <h4>Average number of <b>settlements</b> per year</h4>
          {categoryData.averageSettlementsPerYear ?
            <p className='number'>{categoryData.averageSettlementsPerYear}</p>
            : 'We were not able to find data.'}
        </div>
        <div className='item'>
          <h4>Average number of <b>civil lawsuits</b> per year</h4>
          {categoryData.averageCivilLawsuits?
            <p className='number'>{categoryData.averageCivilLawsuits}</p>
            : 'We were not able to find data.'}
        </div>
        <div className='item'>
          <h4>Average <b>amount</b> spent on each settlement</h4>
          {categoryData.averageAmountOfSettlement?
            <p className='number'>${categoryData.averageAmountOfSettlement}</p>
            : 'We were not able to find data.'}
        </div>
      </div>

      <h4>Sources:</h4>
      <ul>
        <li>{categoryData.lawsuitsSource}</li>
      </ul>
    </section>
  );
};

export default LawsuitsCategory;