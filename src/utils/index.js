export const getPieChartData = (data = {}) => {
  const keys = Object.keys(data);
  const stringToObject = (identifier) => {
    const xyObject = { x: identifier, y: data[identifier] };
    return (xyObject);
  };
  const pieChartData = keys.map(stringToObject).filter(object => !!object.y);

  return pieChartData;
};