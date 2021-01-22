import React, { Fragment } from 'react';
import { VictoryPie } from 'victory';
import { structureDemoData, buildComparison } from '../utils/index';
import startCase from 'lodash.startcase';


const Comparison = (props) => {
  const { data } = props;
  const { race, ethnicity, gender } = data;

  const dataExists = race.length || ethnicity.length || gender.length || false;
  return (dataExists && <div className='item'>
    <h5>In perspective</h5>
    <p>Compared to the overall US population:</p>
    <ul>
      {buildComparison(race)}
      {buildComparison(ethnicity)}
      {buildComparison(gender)}
    </ul>
  </div>);
};

const DemographicsCategory = (props) => {
  const { categoryData, styling } = props;

  const pieChartData = categoryData.map(structureDemoData);

  const raceColorScale = ["#D8A48F", "#4D4D3F", "#EFEBCE", "#A3A380", "#6F493D"];
  const genderColorScale = ["#2AB7CA", "#FE4A49", "#EFEBCE"];

  return (
    <section id="demographics" className={`category demographics ${styling}`}>
      <h3><a href="#demographics">Demographics</a></h3>

      {pieChartData.map(data => (
        <Fragment key={data.population}>
          <h4>{startCase(data.population)}:</h4>

          <div className="grid-4">
            <div className='item'>

              <h5>Race</h5>
              {data.race.length ? 
                <VictoryPie data={data.race} colorScale={raceColorScale} padding={70} /> :
                'We were not able to find data.'}
            </div>

            <div class='item'>
              <h5>Ethnicity</h5>
              {data.ethnicity.length ? 
                <VictoryPie data={data.ethnicity} padding={70} /> :
                'We were not able to find data.'}
            </div>

            <div className='item'>
              <h5>Gender</h5>
              {data.gender.length ? 
                <VictoryPie data={data.gender} colorScale={genderColorScale} padding={70} /> :
                'We were not able to find data.'}
            </div>
            <Comparison data={data} />
          </div>

        </Fragment>
      ))}

      <h4>Sources:</h4>
      <ul>
      </ul>
    </section>
  );
};

export default DemographicsCategory;