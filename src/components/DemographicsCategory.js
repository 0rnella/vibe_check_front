import React, { Fragment } from 'react';
import { VictoryPie } from 'victory';
import { getPieChartData } from '../utils/index';
import startCase from 'lodash.startcase';


const DemographicsCategory = (props) => {
  const { categoryData, styling } = props;

  const pieChartData = categoryData.map(demoData => {
    const race = {
      white: demoData.white,
      black: demoData.black,
      asian: demoData.asian,
      latinx: demoData.latinx,
      indigenous: demoData.indigenous,
      multiracial: demoData.multiracial,
    };

    const gender = {
      men: demoData.men,
      women: demoData.women
    };

    return {
      race: getPieChartData(race),
      gender: getPieChartData(gender),
      population: demoData.employeePopulation
    };
  });

  const overallRace = {
    white: 0.763,
    black: 0.134,
    asian: 0.059,
    latinx: 0.185,
    indigenous: 0.015,
    multiracial: 0.028
  };

  const raceColorScale = ["#D8A48F", "#4D4D3F", "#EFEBCE", "#A3A380", "#6F493D"];
  const genderColorScale = ["#2AB7CA", "#FE4A49", "#EFEBCE"];

  return (
    <section className={`category demographics ${styling}`}>
      <h3>Demographics</h3>

      {pieChartData.map(data => (
        <Fragment key={data.population}>
          <h4>{startCase(data.population)}:</h4>

          <div className="grid">
            <div className='item'>

              <h5>Race</h5>
              {data.race.length ? 
                <VictoryPie data={data.race} colorScale={raceColorScale} padding={70} /> :
                'We were not able to find data.'}
            </div>

            {data.race.length && <div className='item'>
              <p>Compared to the overall US population:</p>
              <ul>
                {data.race.map(raceObj => {
                  const { x: raceName, y: percentage } = raceObj;
                  const difference = Math.round(100*(percentage - overallRace[raceName]));

                  return <li key={raceName}>There are {difference > 0 ? `${difference}% more` : `${-difference}% fewer`} {raceName} employees</li>;
                })}
              </ul>
            </div>}

            <div className='item'>
              <h5>Gender</h5>
              {data.gender.length ? 
                <VictoryPie data={data.gender} colorScale={genderColorScale} padding={70} /> :
                'We were not able to find data.'}
            </div>
          </div>

        </Fragment>
      ))}

      <h4>sources:</h4>
      <ul>
      </ul>
    </section>
  );
};

export default DemographicsCategory;