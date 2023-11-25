type ElectricityVariables = {
  wattage: string;
  hours: string;
  cost: string;
};

const calculateWattageCost = ({ wattage, hours, cost }: ElectricityVariables) => {
  const wattageValue = parseFloat(wattage);
  const hoursValueInSeconds = parseFloat(hours) * 60 * 60;
  const costValue = parseFloat(cost);
  if (
    !isNaN(wattageValue) &&
    !isNaN(hoursValueInSeconds) &&
    !isNaN(costValue)
  ) {
    const energyConsumption = (wattageValue * hoursValueInSeconds) / 3600;
    const cost = (energyConsumption * costValue) / 1000;
    return cost.toFixed(2);
  } else {
    console.log(` ~ lib.tsx:26 ~ calculate ~ Error on input`);
    return 0;
  }
};

export default calculateWattageCost;
