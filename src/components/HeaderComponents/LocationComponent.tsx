import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { MapPin, Thermometer } from 'lucide-react';
import newMapToPng from "./WeatherCodes";
import config from '../../../config';
import "./LocationComponent.css";

const date = new Date();

const postWeatherURL = "https://api.tomorrow.io/v4/timelines";
const apiKey = config.apiKey;
const location = [42.63496561409271, -73.68988401705542];
const timesteps = ["1d"];
const startTime = date.toISOString();

export interface Props {
  weatherID: string;
}

interface WeatherState {
  weatherCode: number;
}

type WeatherAction = 
  | { type: "SET_WEATHER_CODE"; payload: number }
  | { type: "RESET" };

function reducer(state: WeatherState, action: WeatherAction): WeatherState {
  switch (action.type) {
    case "SET_WEATHER_CODE":
      return {
        ...state,
        weatherCode: action.payload,
      };
    case "RESET":
      return { weatherCode: 0 };
    default:
      return state;
  }
}

const LocationComponent: React.FC<Props> = ({ weatherID }) => {
  const [data, setData] = useState<number | null>(null);
  const [weatherStatus, dispatch] = useReducer(reducer, { weatherCode: 0 });
  const [apiCalled, setApiCalled] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.post(`${postWeatherURL}?apikey=${apiKey}`, {
        location,
        fields: ["temperature", "weatherCode"],
        units: "imperial",
        timesteps,
        startTime,
      });
      setApiCalled(true);
      setData(response.data.data.timelines[0].intervals[0].values.temperature);
      
      let weatherCode = response.data.data.timelines[0].intervals[0].values.weatherCode;
      const isNight = date.getHours() >= 19 || date.getHours() < 7;
      
      // Adjust weather code for night if necessary
      if (isNight && weatherCode % 10000 === 0) {
        weatherCode += 1;
      }

      dispatch({ type: "SET_WEATHER_CODE", payload: weatherCode });
    } catch (error) {
      console.error("Error retrieving weather data:", error);
    }
  };

  useEffect(() => {
    if (!apiCalled) {
      fetchData();
    }
  }, [apiCalled]);

  const getWeatherImage = (code: number): string => {
    return newMapToPng.get(code) || '0_unknown_small.png';
  };

  return (
    <div className="location-container">
      <div className="location-background"></div>
      <div id={weatherID} className="location-item">
        <span className="location-icon"><MapPin size={18} /></span>
        <span className="location-text">Leo's Location</span>
      </div>
      <div className="location-item">
        <span className="location-icon"><Thermometer size={18} /></span>
        <span className="location-text">
          {data !== null ? `${Math.round(data)}°F` : 'Loading...'}
        </span>
      </div>
      <div className="location-item">
        <img
          className="weather-icon"
          src={`./src/assets/weatherAssets/${getWeatherImage(weatherStatus.weatherCode)}`}
          alt='Weather'
        />
      </div>
    </div>
  );
};

export default LocationComponent;
