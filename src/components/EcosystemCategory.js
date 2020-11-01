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
      <h3>Effects on Ecosystem: {categoryData.rating}</h3>
      <h4>Racial Demographics</h4>
      <div className='racial'>
        <div className='chart-wrapper'>
          <h5>HQ city before founding ({categoryData.firstCensusYear})</h5>
          <VictoryPie
            data={demoStartPie}
            colorScale={colorScale}
          />
        </div>

        <div className='chart-wrapper'>
          <h5>HQ city currently ({categoryData.currentCensusYear})</h5>
          <VictoryPie
            data={demoStartPie}
            colorScale={colorScale}
          />
        </div>
      </div>
    </section>
  );
};

export default EcosystemCategory;