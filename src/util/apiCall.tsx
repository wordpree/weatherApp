import React, { useContext, ReactNode, useState, useEffect } from "react";
import countryCode from "./countryCode";

type WacProps = {
  children: ReactNode;
  location: string;
};
type newsProps = {
  children: ReactNode;
  city: string;
};
type UnsPhoProps = {
  children: ReactNode;
  spot: string;
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
type UnspRes = {
  [key: string]: string | number | { user: { username: string } };
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
  articles: Array<K>;
}
type UnsData = {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  des: string;
  author: string;
  link: string;
};

interface IUnsData {
  photos: Array<UnsData>;
}
const tourPhotoInit: IUnsData = {
  photos: []
};
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
  articles: []
};
const weatherContext = React.createContext(weatherInit);
const newsContext = React.createContext(newsInit);
const tourFeaturePho = React.createContext(tourPhotoInit);

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

export const NewsApiDataProvider = ({ city, children }: newsProps) => {
  const URI = "https://newsapi.org";
  const PARTH = "/v2/everything";
  const QUERY = `${city}&pageSize=48&page=1&sortBy=popularity`;
  const API_KEY = "6352c20ad9204ab181b8a82ac99d0299";
  const [newsData, setNewsData] = useState(newsInit);

  useEffect(() => {
    async function newsApiCall() {
      try {
        const response = await fetch(
          `${URI}${PARTH}?q=${QUERY}&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data.status === "ok") {
          const articlesWithId = data.articles.map(
            (article: Acl, index: number) => ({
              ...article,
              id: `news-id-${index + 1}`
            })
          );
          setNewsData({
            loading: false,
            articles: articlesWithId
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
    newsApiCall();
  }, [QUERY]);

  return (
    <newsContext.Provider value={newsData}>{children}</newsContext.Provider>
  );
};
export const useNewsContextValue = () => useContext(newsContext);

export const UnspPhotoProvider = ({ children, spot }: UnsPhoProps) => {
  const URI = "https://api.unsplash.com/";
  const PTH = "/search/photos";
  const QUERY = `${spot}&per_page=12&page=1`;
  const API_KEY =
    "62290e497985a003118ae759aa80d4f3f2a5c6b05a053f4d32a744866330b765";
  const [photos, setPhotos] = useState(tourPhotoInit);
  useEffect(() => {
    async function apiUnspCall() {
      const response = await fetch(
        `${URI}${PTH}?query=${QUERY}&client_id=${API_KEY}`,
        {
          headers: { "Accept-Version": "v1" }
        }
      );
      if (!response.ok) throw new Error(`error! status: ${response.status}`);
      const result = await response.json();
      const resultState = result.results.map((result: any) => ({
        id: result.id,
        des: result.alt_description,
        urls: result.urls,
        author: result.user.name,
        link: result.links.html
      }));
      setPhotos({ photos: resultState });
      console.log(result);
    }
    apiUnspCall();
  }, [QUERY]);
  return (
    <tourFeaturePho.Provider value={photos}>{children}</tourFeaturePho.Provider>
  );
};
export const usePexelsPhotoContextValue = () => useContext(tourFeaturePho);
