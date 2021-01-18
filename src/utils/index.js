import React, { Fragment } from 'react';

export const getPieChartData = (data = {}) => {
  const keys = Object.keys(data);
  const stringToObject = (identifier) => {
    const xyObject = { x: identifier, y: data[identifier] };
    return (xyObject);
  };
  const pieChartData = keys.map(stringToObject).filter(object => !!object.y);

  return pieChartData;
};

export const structureDemoData = (demoData) => {
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
};

export const buildComparison = (demographic) => {
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

  if (demographic.length) {
    return (<Fragment>
      {demographic.map(demoObj => {
        const { x: demographicName, y: percentage } = demoObj;
        const difference = Math.round(100*(percentage - overall[demographicName]));
        return (<li key={demographicName}>There are {difference > 0 ? `${difference}% more` : `${-difference}% fewer`} {demographicName} employees</li>);
      })}
    </Fragment>);
  } else {
    return null;
  }

};