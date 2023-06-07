import { useEffect, useState } from "react";
import axios from "axios";

const postWeatherURL = "https://api.tomorrow.io/v4/timelines";
const apiKey = "XqcA1V7gG3blEcKCq8nEFNXjDzsBqqSR";
const location = [42.63496561409271, -73.68988401705542];
const timesteps = ["current"];
const startTime = new Date().toISOString();

export interface Props {
  headerStyle: string,
  weatherID: string,
}

const LocationComponent = (props: Props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${postWeatherURL}?apikey=${apiKey}`,
          {
            location,
            fields: ["temperature"],
            units: "imperial",
            timesteps,
            startTime,
          }
        );
        setData(
          response.data.data.timelines[0].intervals[0].values.temperature
        );
      } catch (error) {
        console.error("Error retrieving weather data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 id={props.weatherID} className={props.headerStyle}>Leos Current Weather: {data}</h1>
  );
};

export default LocationComponent;
