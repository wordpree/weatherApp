import React, { useContext, ReactNode, useState, useEffect } from "react";
import countryCode from "./countryCode";

type WacProps = {
  children: ReactNode;
  location: string;
};
const wacDataContext = React.createContext({ city: null, forecast: null });

export const WeatherApiDataProvider = ({ children, location }: WacProps) => {
  const API_KEY = "00194910deb21b1edc80422332e0c1ec";
  const FETCH_URI = "https://api.openweathermap.org/";
  const PATH = "data/2.5/forecast";
  const [forecasts, setForecasts] = useState({ city: null, forecast: null });
  const query = countryCode(location);
  useEffect(() => {
    async function handleDataFetch() {
      const response = await fetch(
        `${FETCH_URI}${PATH}?q=${query}&units=metric&APPID=${API_KEY}`
      );
      const data = await response.json();
      setForecasts({ city: data.city, forecast: data.list });
    }
    handleDataFetch();
  }, [query]);

  console.log("fetch start");

  return (
    <wacDataContext.Provider value={forecasts}>
      {children}
    </wacDataContext.Provider>
  );
};
export const useWacContextValue = () => useContext(wacDataContext);
