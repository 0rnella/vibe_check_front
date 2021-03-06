import React from 'react';
import { VictoryPie } from 'victory';
import { getPieChartData } from '../utils/index';


const EcosystemCategory = (props) => {
  const { categoryData, styling } = props;
  const demoStart = {
    White: categoryData.whiteStart,
    Black: categoryData.blackStart,
    Asian: categoryData.asianStart,
    Indigenous: categoryData.indigenousStart,
    Multiracial: categoryData.multiracialStart,
  };
  const demoStartPie = getPieChartData(demoStart);

  const demoNow = {
    White: categoryData.whiteNow,
    Black: categoryData.blackNow,
    Asian: categoryData.asianNow,
    Indigenous: categoryData.indigenousNow,
    Multiracial: categoryData.multiracialNow,
  };
  const demoNowPie = getPieChartData(demoNow);

  const colorScale = ["#D8A48F", "#4D4D3F", "#EFEBCE",  "#A3A380", "#6F493D" ];

  return (
    <section id="ecosystem" className={`category ecosystem ${styling}`}>
      <h3><a href='#ecosystem'>Effects on Ecosystem</a></h3>

      <h4>Racial Demographics</h4>
      {categoryData.racialDemographicNarrative && <p>{categoryData.racialDemographicNarrative}</p>}
      <div className='grid'>
        <div className='item'>
          <h5>HQ State before founding ({categoryData.firstCensusYear})</h5>
          {demoStartPie.length ? <VictoryPie
            data={demoStartPie}
            colorScale={colorScale}
          /> : 'We were not able to find data.'}
        </div>

        <div className='item'>
          <h5>HQ State currently ({categoryData.currentCensusYear})</h5>
          {demoNowPie.length ? <VictoryPie
            data={demoNowPie}
            colorScale={colorScale}
          /> : 'We were not able to find data.'}
        </div>
      </div>


      <h4>Average Household Income</h4>
      <div className='grid'>
        <div className='item'>
          <h5>HQ State before founding ({categoryData.firstCensusYear}): </h5>
          {categoryData.averageHouseholdIncomeAtStart ?
            <span className='number'>${categoryData.averageHouseholdIncomeAtStart}</span>
            : <span>We were not able to find data.</span>
          }
        </div>

        <div className='item'>
          <h5>HQ State currently ({categoryData.currentCensusYear}): </h5>
          {categoryData.averageHouseholdIncomeNow ?
            <span className='number'>${categoryData.averageHouseholdIncomeNow}</span>
            : <span>We were not able to find data.</span>
          }
        </div>
      </div>

      <h4 className='jobs'>Jobs Created</h4>
      <p className='number'>{categoryData.jobsCreated}</p>

      <h4>Sources</h4>
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