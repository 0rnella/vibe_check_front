export const getDemoPieChartData = (demographics = {}) => {
  const demoKeys = Object.keys(demographics);
  const filteredKeys = demoKeys.filter(key => key !== 'sources' && key !== "employeePopulation");
  const stringToObject = (identifier) => {
    const pieChartThing = { x: identifier, y: demographics[identifier] };
    return (pieChartThing);
  };
  const demoPieChartData = filteredKeys.map(stringToObject);

  return demoPieChartData;
};