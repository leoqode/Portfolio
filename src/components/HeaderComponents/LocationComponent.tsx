import { useEffect, useReducer, useState } from "react";
import newMapToPng from "./WeatherCodes";
import axios from "axios";

const date = new Date();

const postWeatherURL = "https://api.tomorrow.io/v4/timelines";
const apiKey = "XqcA1V7gG3blEcKCq8nEFNXjDzsBqqSR";
const location = [42.63496561409271, -73.68988401705542];
const timesteps = ["current"];
const startTime = date.toISOString();

export interface Props {
  headerStyle: string;
  weatherID: string;
  dateHour: number;
}

function reducer(state, action) {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${postWeatherURL}?apikey=${apiKey}`,
          {
            location,
            fields: ["temperature", "weatherCodeDay", "weatherCodeNight"],
            units: "imperial",
            timesteps,
            startTime,
          }
        );
        setData(
          response.data.data.timelines[0].intervals[0].values.temperature
        );
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
              response.data.data.timelines[0].intervals[0].values
                .weatherCodeDay,
          });
        }
      } catch (error) {
        console.error("Error retrieving weather data:", error);
      }

    };

    fetchData();

  }, []);

  const getWeatherImage = (newMapToPng: Map<number,string>) =>{
    let code: number = 10000;
    return newMapToPng.get(code)
  }

  return (
    <>
      <h1 id={props.weatherID} className={props.headerStyle}>
        Leo's Current Weather: {data}
      </h1>
      <img src={`./src/assets/weatherAssets/${getWeatherImage(newMapToPng)}`} alt="Weather" />
    </>
  );
};

export default LocationComponent;
