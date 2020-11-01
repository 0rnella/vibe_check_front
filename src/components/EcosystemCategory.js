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
  const colorScale = ["D8A48F", "4D4D3F", "EFEBCE",  "A3A380", "6F493D" ];

  return (
    <section className={`category ecosystem ${styling}`}>
      <h3>Effects on ecosystem: {categoryData.rating}</h3>

      <h4>Racial demographics</h4>
      <p>{categoryData.racialDemographicNarrative}</p>
      <div className='grid'>
        <div className='item'>
          <h5>HQ city before founding ({categoryData.firstCensusYear})</h5>
          <VictoryPie
            data={demoStartPie}
            colorScale={colorScale}
          />
        </div>

        <div className='item'>
          <h5>HQ city currently ({categoryData.currentCensusYear})</h5>
          <VictoryPie
            data={demoStartPie}
            colorScale={colorScale}
          />
        </div>
      </div>


      <h4>Average household income</h4>
      <div className='grid'>
        <div className='item'>
          <h5>HQ city before founding ({categoryData.firstCensusYear}): </h5>
          <span className='number'>${categoryData.averageHouseholdIncomeAtStart}</span>
        </div>

        <div className='item'>
          <h5>HQ city currently ({categoryData.firstCensusYear}): </h5>
          <span className='number'>${categoryData.averageHouseholdIncomeNow}</span>
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