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
    White: demoData.white,
    Black: demoData.black,
    Asian: demoData.asian,
    Indigenous: demoData.indigenous,
    Multiracial: demoData.multiracial,
  };
  
  const ethnicity = {
    Latinx: demoData.latinx,
    'Non-Latinx': 1- demoData.latinx
  };

  const gender = {
    Men: demoData.men,
    Women: demoData.women
  };

  return {
    Race: getPieChartData(race),
    Gender: getPieChartData(gender),
    Ethnicity: getPieChartData(ethnicity),
    Population: demoData.employeePopulation
  };
};

export const buildComparison = (demographic) => {
  const overall = {
    White: 0.763,
    Black: 0.134,
    Asian: 0.059,
    Latinx: 0.185,
    'Non-Latinx': 0.815,
    Indigenous: 0.015,
    Multiracial: 0.028,
    Women: 0.47,
    Men: 0.53
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