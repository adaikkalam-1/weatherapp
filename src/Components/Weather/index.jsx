import React, { useState } from "react";
import styles from "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
const KEY = "59ee4427c7d6b29d0ff838aab0d20665";
const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const responce = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
      );
      setData(responce.data);
    } catch (err) {
      alert("Please Enter The City Name Correctly");
    }
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <div className="input-container">
          <input
            type="text"
            className="input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter The City Name"
          />
          <button className="but" onClick={fetchData}>
            Fetch
          </button>
        </div>
        <div>
          {data && (
            <div className="conta">
              <h1 className="city-name">
                {data.name},{data.sys.country}
              </h1>

              <div className="temp">{Math.round(data.main.temp)}°C </div>
              <div className="weather-info">
                <div className="left">
                  Lat - {data.coord.lat}
                  <br></br>
                  Lon - {data.coord.lon}
                </div>
                <div className="right">
                  sunrise-{data.sys.sunrise}
                  <br></br>
                  speed-{data.wind.speed}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Weather;
