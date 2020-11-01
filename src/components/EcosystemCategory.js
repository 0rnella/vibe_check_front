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
      <h3>effects on ecosystem: {categoryData.rating}</h3>
      <h4>racial demographics</h4>
      <div className='before-after'>
        <div className='chart-wrapper half'>
          <h5>HQ city before founding ({categoryData.firstCensusYear})</h5>
          <VictoryPie
            data={demoStartPie}
            colorScale={colorScale}
          />
        </div>

        <div className='chart-wrapper half'>
          <h5>HQ city currently ({categoryData.currentCensusYear})</h5>
          <VictoryPie
            data={demoStartPie}
            colorScale={colorScale}
          />
        </div>
      </div>
      <h4>average household income of HQ city</h4>
      <div className='before-after'>
        <h5 className='half'>average household income before founding ({categoryData.firstCensusYear}): 
          <span className='number'> {categoryData.averageHouseholdIncomeAtStart}</span>
        </h5>

        <h5 className='half'>average household income currently ({categoryData.firstCensusYear}): 
          <span className='number'> {categoryData.averageHouseholdIncomeNow}</span>
        </h5>
      </div>
      <h4 className='jobs'>jobs created:
        <span className='number'> {categoryData.jobsCreated}</span>
      </h4>
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