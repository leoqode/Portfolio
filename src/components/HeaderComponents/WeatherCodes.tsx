const weatherCodes = new Map([
  ["0", "Unknown"],
  ["1000", "Clear"],
  ["1100", "Mostly Clear"],
  ["1101", "Partly Cloudy"],
  ["1102", "Mostly Cloudy"],
  ["1001", "Cloudy"],
  ["2000", "Fog"],
  ["2100", "Fog Light"],
  ["4000", "Drizzle"],
  ["4001", "Rain"],
  ["4200", "Rain Light"],
  ["4201", "Rain Heavy"],
  ["5000", "Snow"],
  ["5001", "Flurries"],
  ["5100", "Snow Light"],
  ["5101", "Snow Heavy"],
  ["6000", "Freezing Rain Drizzle"],
  ["6001", "Freezing Rain"],
  ["6200", "Freezing Rain Light"],
  ["6201", "Freezing Rain Heavy"],
  ["7000", "Ice Pellets"],
  ["7101", "Ice Pellets Heavy"],
  ["7102", "Ice Pellets Light"],
  ["8000", "tstorm"],
]);
const newMapCodes = new Map()


for(let [key, value] of weatherCodes){
  const number = parseInt(key);
  newMapCodes.set(`${number * 10}`, value);
  newMapCodes.set(`${number * 10 + 1}`, value);
}

const newMapToPng = new Map()

for(let [key,value] of newMapCodes){
  let number = parseInt(key);
  let name = value.toLowerCase().split(' ').join('_');
  let endOfPicName = 'small.png';

  let picName = [number, name, endOfPicName].join('_');
  newMapToPng.set(number, picName);
}



export default newMapToPng;
