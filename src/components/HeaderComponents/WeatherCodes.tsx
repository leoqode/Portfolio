type WeatherDescription = string;
type WeatherCode = string;
type ImageFileName = string;

const weatherCodes: Map<WeatherCode, WeatherDescription> = new Map([
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
  ["8000", "Thunderstorm"],
]);

const newMapToPng: Map<number, ImageFileName> = new Map();

function addWeatherCode(code: WeatherCode, description: WeatherDescription): void {
  const dayCode = parseInt(code);
  
  const nightCode = dayCode * 10 + 1;
  const baseFileName = description.toLowerCase().replace(/ /g, '_');

  newMapToPng.set(dayCode, `${dayCode * 10}_${baseFileName}_small.png`);
  newMapToPng.set(nightCode, `${nightCode}_${baseFileName}_small.png`);
}

weatherCodes.forEach((description, code) => {
  addWeatherCode(code, description);
});
export default newMapToPng;
