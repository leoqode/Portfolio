import { useEffect, useReducer, useState } from "react";
import newMapToPng from "./WeatherCodes";
import config from '/Users/angeljimenez/Portfolio/config.ts'
import axios from "axios";

const date = new Date();

const postWeatherURL = "https://api.tomorrow.io/v4/timelines";
const apiKey = config.apiKey;
const location = [42.63496561409271, -73.68988401705542];
const timesteps = ["1d"];
const startTime = date.toISOString();

export interface Props {
  headerStyle: string;
  weatherID: string;
}

function reducer(state: object, action: {type: string; payload?: any}) {
  switch (action.type) {
    case "SET_WEATHER_CODE":
      return {
        ...state,
        weatherCode: action.payload,
      };
    default:
      return { weatherCode: 0 };
  }
}

const LocationComponent = (props: Props) => {
  const [data, setData] = useState(null);
  const [weatherStatus, setWeatherStatus] = useReducer(reducer, {
    weatherCode: 0,
  });
  const [apiCalled, setApiCalled] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.post(`${postWeatherURL}?apikey=${apiKey}`, {
        location,
        fields: ["temperature", "weatherCodeDay", "weatherCodeNight"],
        units: "imperial",
        timesteps,
        startTime,
      });
      setApiCalled(true)
      setData(response.data.data.timelines[0].intervals[0].values.temperature);
      if (date.getHours() >= 7 && date.getHours() <= 19) {
        setWeatherStatus({
          type: "SET_WEATHER_CODE",
          payload:
            response.data.data.timelines[0].intervals[0].values
              .weatherCodeNight,
        });
      } else {
        setWeatherStatus({
          type: "SET_WEATHER_CODE",
          payload:
            response.data.data.timelines[0].intervals[0].values.weatherCodeDay,
        });
      }
    } catch (error) {
      console.error("Error retrieving weather data:", error);
    }
  };

  useEffect(() => {
    if (!apiCalled) {
      fetchData();
      setApiCalled(true);
    }
  }, [apiCalled]);

  const getWeatherImage = (newMapToPng: Map<number, string>) => {
    let code: number = weatherStatus.weatherCode;
    if(code == 0 || 1){
      code = 10010
    }
    return newMapToPng.get(code);
  };
  return (
    <>
      <h1 id={props.weatherID} className={props.headerStyle}>
        Leo's Current Weather: {data ? `${data + 18}` : null}
      </h1>
      <img
        id='header_weather_logo'
        src={`./src/assets/weatherAssets/${getWeatherImage(newMapToPng)}`}
        alt='Weather'
      />
    </>
  );
};

export default LocationComponent;
