import React, { useContext, ReactNode, useState, useEffect } from "react";
import countryCode from "./countryCode";

type WacProps = {
  children: ReactNode;
  location: string;
};

type T = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
type obj = {
  [key: string]: number;
};
interface IWData {
  main: obj;
  sys: obj;
  name: string;
  weather: Array<T>;
  wind: obj;
  timezone: number;
  coord: obj;
  loading: boolean;
}
const initState: IWData = {
  main: {},
  sys: {},
  name: "",
  weather: [],
  wind: {},
  timezone: 0,
  coord: {},
  loading: true
};
const weatherContext = React.createContext(initState);

export const WeatherApiDataProvider = ({ children, location }: WacProps) => {
  const API_KEY = "00194910deb21b1edc80422332e0c1ec";
  const FETCH_URI = "https://api.openweathermap.org/";
  const PATH = "data/2.5/weather";
  const [forecasts, setForecasts] = useState(initState);
  const query = countryCode(location);

  useEffect(() => {
    async function handleDataFetch() {
      const response = await fetch(
        `${FETCH_URI}${PATH}?q=${query}&units=metric&APPID=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      data.cod === 200
        ? setForecasts({
            main: data.main,
            sys: data.sys,
            name: data.name,
            weather: data.weather,
            wind: data.wind,
            timezone: data.timezone,
            coord: data.coord,
            loading: false
          })
        : setForecasts(initState);
    }
    handleDataFetch().catch(e => alert(e));
  }, [query]);

  return (
    <weatherContext.Provider value={forecasts}>
      {children}
    </weatherContext.Provider>
  );
};
export const useWeatherContextValue = () => useContext(weatherContext);
