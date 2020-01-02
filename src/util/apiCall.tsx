import React, { useContext, ReactNode, useState, useEffect } from "react";
import countryCode from "./countryCode";

type WacProps = {
  children: ReactNode;
  location: string;
};
type newsProps = {
  children: ReactNode;
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

type Acl = {
  [key: string]: string | {};
};
export type K = {
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  urlToImage: string;
  content: string;
  id: string;
  source: { name: string; id: null | string };
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
interface INData {
  loading: boolean;
  status: string;
  articles: Array<K>;
}
const weatherInit: IWData = {
  main: {},
  sys: {},
  name: "",
  weather: [],
  wind: {},
  timezone: 0,
  coord: {},
  loading: true
};
const newsInit: INData = {
  loading: true,
  status: "error",
  articles: []
};
const weatherContext = React.createContext(weatherInit);
const newsContext = React.createContext(newsInit);

export const WeatherApiDataProvider = ({ children, location }: WacProps) => {
  const API_KEY = "00194910deb21b1edc80422332e0c1ec";
  const FETCH_URI = "https://api.openweathermap.org/";
  const PATH = "data/2.5/weather";
  const [forecasts, setForecasts] = useState(weatherInit);
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
        : setForecasts(weatherInit);
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

export const NewsApiDataProvider = (props: newsProps) => {
  const URI = "https://newsapi.org";
  const PARTH = "/v2/top-headlines";
  const QUERY = "country=au&category=entertainment&pageSize=24";
  const API_KEY = "6352c20ad9204ab181b8a82ac99d0299";
  const [newsData, setNewsData] = useState(newsInit);

  useEffect(() => {
    async function newsApiCall() {
      try {
        const response = await fetch(
          `${URI}${PARTH}?${QUERY}&apikey=${API_KEY}`
        );
        const data = await response.json();
        if (data.status === "ok") {
          const articlesWithId = data.articles.map(
            (article: Acl, index: number) => ({
              ...article,
              id: `news-id-${index}`
            })
          );
          setNewsData({
            loading: false,
            status: data.status,
            articles: articlesWithId
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    newsApiCall();
  }, []);

  return (
    <newsContext.Provider value={newsData}>
      {props.children}
    </newsContext.Provider>
  );
};
export const useNewsContextValue = () => useContext(newsContext);
