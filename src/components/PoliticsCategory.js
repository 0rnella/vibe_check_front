import React from 'react';
import { VictoryPie } from 'victory';
import { getPieChartData } from '../utils/index';

const PoliticsCategory = (props) => {
  const { categoryData, styling } = props;

  const pacData = {
    democrats: categoryData.pacDemocratContributions,
    republicans: categoryData.pacRepublicanContributions,
  };

  console.log('pacData', pacData);

  const pacPieChartData = getPieChartData(pacData);

  const politicsColorScale = ["#2AB7CA", "#FE4A49"];

  return (
    <section className={`category demographics ${styling}`}>
      <h3>Political contributions</h3>

      <h4>PAC Contributions in 2020</h4>
      {categoryData.pacTotal ? <div className='grid'>
        <div className='item'>
          <VictoryPie data={pacPieChartData} colorScale={politicsColorScale} padding={100} />
        </div>
        <div className='item'>
          <p>Total contributions: ${categoryData.pacTotal}</p>
        </div>
      </div> : 'We were not able to find data.'}

      <h4>CEO or Owner Contributions</h4>
      {categoryData.executiveContributions ?
        <p>{categoryData.executiveContributions}</p> : 'We were not able to find data.'}

      <h4>sources:</h4>
      <ul>
        <li>{categoryData.sources}</li>
      </ul>
    </section>
  );
};

export default PoliticsCategory;