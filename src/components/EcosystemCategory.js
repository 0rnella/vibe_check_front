import React from 'react';
import { VictoryPie } from 'victory';
import { getPieChartData } from '../utils/index';


const EcosystemCategory = (props) => {
  const { categoryData, styling } = props;
  const demoStart = {
    white: categoryData.whiteStart,
    black: categoryData.blackStart,
    asian: categoryData.asianStart,
    indigenous: categoryData.indigenousStart,
    multiracial: categoryData.multiracialStart,
  };
  const demoStartPie = getPieChartData(demoStart);

  const demoNow = {
    white: categoryData.whiteNow,
    black: categoryData.blackNow,
    asian: categoryData.asianNow,
    indigenous: categoryData.indigenousNow,
    multiracial: categoryData.multiracialNow,
  };
  const demoNowPie = getPieChartData(demoNow);

  const colorScale = ["D8A48F", "4D4D3F", "EFEBCE",  "A3A380", "6F493D" ];

  return (
    <section className={`category ecosystem ${styling}`}>
      <h3>Effects on ecosystem: {categoryData.rating}</h3>

      <h4>Racial demographics</h4>
      <p>{categoryData.racialDemographicNarrative}</p>
      <div className='grid'>
        <div className='item'>
          <h5>HQ city before founding ({categoryData.firstCensusYear})</h5>
          {demoStartPie.length ? <VictoryPie
            data={demoStartPie}
            colorScale={colorScale}
          /> : 'We were not able to find data.'}
        </div>

        <div className='item'>
          <h5>HQ city currently ({categoryData.currentCensusYear})</h5>
          {demoNowPie.length ? <VictoryPie
            data={demoNowPie}
            colorScale={colorScale}
          /> : 'We were not able to find data.'}
        </div>
      </div>


      <h4>Average household income</h4>
      <div className='grid'>
        <div className='item'>
          <h5>HQ city before founding ({categoryData.firstCensusYear}): </h5>
          {categoryData.averageHouseholdIncomeAtStart ?
            <span className='number'>${categoryData.averageHouseholdIncomeAtStart}</span>
            : <span>We were not able to find data.</span>
          }
        </div>

        <div className='item'>
          <h5>HQ city currently ({categoryData.currentCensusYear}): </h5>
          {categoryData.averageHouseholdIncomeNow ?
            <span className='number'>${categoryData.averageHouseholdIncomeNow}</span>
            : <span>We were not able to find data.</span>
          }
        </div>
      </div>

      <h4 className='jobs'>Jobs created: </h4>
      <p className='number'>{categoryData.jobsCreated}</p>

      <h4>sources:</h4>
      <ul>
        <li>{categoryData.racialDemographicAtStartSource}</li>
        <li>{categoryData.racialDemographicNowSource}</li>
        <li>{categoryData.averageHouseholdIncomeAtStartSource}</li>
        <li>{categoryData.averageHouseholdIncomeNowSource}</li>
        <li>{categoryData.jobsCreatedSource}</li>
      </ul>
    </section>
  );
};

export default EcosystemCategory;