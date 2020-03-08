import React, { useContext, ReactNode, useState, useEffect } from "react";
import { countryCode, querySygicCity } from "./countryCode";

type WacProps = {
  children: ReactNode;
  location: string;
};
type newsProps = {
  children: ReactNode;
  query: string;
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
  vis: number;
  clouds: number;
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
  site: string;
  date: Date;
};

interface IUnsData {
  photos: Array<UnsData>;
}

/**********sygic api call data type start*********************/
type SygicProps = {
  children: ReactNode;
  location: string;
};

type SygicMetaProps = {
  children: ReactNode;
  id: string;
};

type SygicCollection = {
  name_long: string;
  place_ids: Array<string>;
};
type ReferType = {
  [key: string]: string | number;
};

export interface SygicPlace {
  name: string;
  url: string;
  id: string;
  categories: Array<string>;
  tag_keys: Array<string>;
  address: string;
  admission: string;
  opening_hours_note: string;
  description: {
    text: string;
    provider: string;
    link: string;
  };
  opening_hours_raw: string;
  references: Array<ReferType>;
  attributes: {};
  duration_estimate: number;
  marker: string;
  perex: string;
  main_media: {
    media: Array<{ url_template: string }>;
  };
}

interface ISygicRes {
  status_code: number;
  data: { collections: Array<SygicCollection> } | { places: Array<SygicPlace> };
}

export interface ISygicMeta {
  type: string;
  url_template: string;
  url: string;
  created_at: string;
  attribution: {
    title: string;
    title_url: string;
    author: string;
    author_url: string;
    license_url: string;
    license: string;
  };
}

export interface ISygicMetaRes {
  statuse_code: number;
  data: { media: Array<ISygicMeta> };
}
/**********sygic api call data type end*********************/

const tourPhotoInit: IUnsData = {
  photos: []
};
const weatherInit: IWData = {
  main: {},
  sys: {},
  name: "",
  weather: [],
  wind: {},
  vis: 0,
  clouds: 0,
  timezone: 0,
  coord: {},
  loading: true
};
const newsInit: INData = {
  loading: true,
  articles: []
};
const sygicInit = { loading: true, name: "", placeArray: [] as SygicPlace[] };

const weatherContext = React.createContext(weatherInit);
const newsContext = React.createContext(newsInit);
const tourFeaturePho = React.createContext(tourPhotoInit);
const sygicContext = React.createContext(sygicInit);

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
      data.cod === 200
        ? setForecasts({
            main: data.main,
            sys: data.sys,
            name: data.name,
            weather: data.weather,
            wind: data.wind,
            vis: data.visibility,
            timezone: data.timezone,
            clouds: data.clouds.all,
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

export const NewsApiDataProvider = ({ query, children }: newsProps) => {
  const URI = "https://newsapi.org";
  const PARTH = "/v2/everything";
  const QUERY = query.split(",")[0];
  const API_KEY = "6352c20ad9204ab181b8a82ac99d0299";
  const [newsData, setNewsData] = useState(newsInit);

  useEffect(() => {
    async function newsApiCall() {
      try {
        const response = await fetch(
          `${URI}${PARTH}?q=${QUERY}&apikey=${API_KEY}&pageSize=25&page=1&sortBy=popularity`
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
        link: result.links.html,
        date: result.created_at,
        site: spot
      }));
      setPhotos({ photos: resultState });
    }
    apiUnspCall();
  }, [QUERY, spot]);
  return (
    <tourFeaturePho.Provider value={photos}>{children}</tourFeaturePho.Provider>
  );
};
export const useUnspPhotoContextValue = () => useContext(tourFeaturePho);

export const SygicContextProvider = ({ children, location }: SygicProps) => {
  const API_KEY = "Iw3v10JNHl3iaauM5TSyO9yYOLT20OSf6c6J4tZa";
  const URL = "https://api.sygictravelapi.com/1.2/en";
  const PATH = "/collections";

  const city = location.split(",")[0];
  const country = location.split(",")[1];
  const queryCityIndex = querySygicCity(city, false);
  const queryCuntryIndex = querySygicCity(country, true);
  const [sygicData, setSygicData] = useState(sygicInit);

  useEffect(() => {
    let QUERY = "";
    const CORS = "https://cors-anywhere.herokuapp.com/"; //avoid crossing-origin block
    if (city === undefined && country !== undefined) {
      QUERY = `parent_place_id=${queryCuntryIndex}`;
    }
    if (city !== undefined) {
      QUERY = `parent_place_id=${queryCityIndex}`;
    }
    if (city === undefined && country === undefined) {
      QUERY = "parent_place_id=country:73";
    }
    async function sygicApiCall(url: string): Promise<ISygicRes | undefined> {
      try {
        const res = await fetch(url, {
          headers: {
            "x-api-key": API_KEY
          }
        });
        if (!res.ok) throw new Error("Error messege: " + res.status);
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    }
    const url = CORS + URL + PATH + "?" + QUERY;
    const response = sygicApiCall(url); //api call for poi collections
    response.then(data => {
      if (data) {
        const dataCol = data.data as {
          collections: SygicCollection[];
        };

        const name = dataCol.collections[0].name_long;
        const place_ids = dataCol.collections[0].place_ids;
        const newQuery = place_ids.join("|");
        const detailsUrl = CORS + URL + "/places?ids=" + newQuery;
        const detailsResponse = sygicApiCall(detailsUrl); //api call for each poi details
        detailsResponse.then(places => {
          if (places) {
            const placeData = places.data as { places: SygicPlace[] };
            const placeArray = placeData.places;
            setSygicData({ loading: false, name, placeArray });
          }
        });
      }
    });
  }, [city, country, queryCityIndex, queryCuntryIndex]);

  return (
    <sygicContext.Provider value={sygicData}>{children}</sygicContext.Provider>
  );
};
export const useSygicContextValue = () => useContext(sygicContext);
