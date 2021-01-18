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
      indigenous: demoData.indigenous,
      multiracial: demoData.multiracial,
    };
    
    const ethnicity = {
      latinx: demoData.latinx,
      'non-latinx': 1- demoData.latinx
    };

    const gender = {
      men: demoData.men,
      women: demoData.women
    };

    return {
      race: getPieChartData(race),
      gender: getPieChartData(gender),
      ethnicity: getPieChartData(ethnicity),
      population: demoData.employeePopulation
    };
  });

  const overall = {
    white: 0.763,
    black: 0.134,
    asian: 0.059,
    latinx: 0.185,
    'non-latinx': 0.815,
    indigenous: 0.015,
    multiracial: 0.028,
    women: 0.47,
    men: 0.53
  };

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

            {<div className='item'>
              <h5>In perspective</h5>
              <p>Compared to the overall US population:</p>
              <ul>
                {data.race.length ? data.race.map(raceObj => {
                  const { x: raceName, y: percentage } = raceObj;
                  const difference = Math.round(100*(percentage - overall[raceName]));

                  return <li key={raceName}>There are {difference > 0 ? `${difference}% more` : `${-difference}% fewer`} {raceName} employees</li>;
                }) : ""}
                {data.ethnicity.length ? data.ethnicity.map(ethnicityObj => {
                  const { x: ethnicity, y: percentage } = ethnicityObj;
                  const difference = Math.round(100*(percentage - overall[ethnicity]));

                  return <li key={ethnicity}>There are {difference > 0 ? `${difference}% more` : `${-difference}% fewer`} {ethnicity} employees</li>;
                }) : ""}
                {data.gender.length ? data.gender.map(genderObj => {
                  const { x: gender, y: percentage } = genderObj;
                  const difference = Math.round(100*(percentage - overall[gender]));

                  return <li key={gender}>There are {difference > 0 ? `${difference}% more` : `${-difference}% fewer`} {gender} employees</li>;
                }) : ""}
              </ul>
            </div>}
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