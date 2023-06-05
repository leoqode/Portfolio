import { useEffect, useState } from "react";
import axios from "axios";

const LocationComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.tomorrow.io/v4/timelines?location=30.2672,97.7431&fields=temperature&timesteps=1h&units=metric&apikey=XqcA1V7gG3blEcKCq8nEFNXjDzsBqqSR"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <h1>{data}</h1>;
};

export default LocationComponent;
