import React, { useContext, useState, useEffect } from "react";
import { countryCode, querySygicCity } from "./countryCode";
import { fetchData } from "./utils";
import {
  IWData,
  IUnsData,
  IUnsDataRes,
  IApiProps,
  INData,
  INDataRes,
  ISygicPlace,
  ISygicPlacesRes,
  IsygicCollectionsRes
} from "./type";

const tourPhotoInit = {
  results: [] as Array<IUnsData>,
  loading: true,
  site: ""
};
const weatherInit = {
  loading: true,
  data: {} as IWData
};
const newsInit = {
  loading: true,
  articles: [] as Array<INData>
};
const sygicInit = {
  loading: true,
  places: [] as Array<ISygicPlace>,
  info: {
    length: 0,
    names: ["", ""]
  }
};

const weatherContext = React.createContext(weatherInit);
const newsContext = React.createContext(newsInit);
const tourFeaturePho = React.createContext(tourPhotoInit);
const sygicContext = React.createContext(sygicInit);

export const WeatherApiDataProvider = ({ children, location }: IApiProps) => {
  const API_KEY = "00194910deb21b1edc80422332e0c1ec";
  const FETCH_URI = "https://api.openweathermap.org/";
  const PATH = "data/2.5/weather";
  const [forecasts, setForecasts] = useState(weatherInit);
  const query = countryCode(location);
  const url = `${FETCH_URI}${PATH}?q=${query}&units=metric&appid=${API_KEY}`;
  useEffect(() => {
    fetchData<IWData>(url, false).then(res => {
      if (res) {
        const data: IWData = {
          main: res.main,
          sys: res.sys,
          name: res.name,
          weather: res.weather,
          wind: res.wind,
          visibility: res.visibility,
          timezone: res.timezone,
          clouds: res.clouds,
          coord: res.coord
        };
        setForecasts({ data, loading: false });
      }
    });
  }, [url]);

  return (
    <weatherContext.Provider value={forecasts}>
      {children}
    </weatherContext.Provider>
  );
};
export const useWeatherContextValue = () => useContext(weatherContext);

export const NewsApiDataProvider = ({ location, children }: IApiProps) => {
  const URI = "https://newsapi.org";
  const PARTH = "/v2/everything";
  const QUERY = location.split(",")[0];
  const API_KEY = "6352c20ad9204ab181b8a82ac99d0299";
  const [newsData, setNewsData] = useState(newsInit);
  const url = `${URI}${PARTH}?q=${QUERY}&apikey=${API_KEY}&pageSize=25&page=1`;

  useEffect(() => {
    fetchData<INDataRes>(url, false).then(res => {
      if (res) {
        const articlesWithId = res.articles.map(
          (article: INData, index: number) => ({
            ...article,
            id: `news-id-${index + 1}`
          })
        );
        setNewsData({
          loading: false,
          articles: articlesWithId
        });
      }
    });
  }, [url]);
  return (
    <newsContext.Provider value={newsData}>{children}</newsContext.Provider>
  );
};
export const useNewsContextValue = () => useContext(newsContext);

export const UnspPhotoProvider = ({ children, location }: IApiProps) => {
  const URI = "https://api.unsplash.com";
  const PTH = "/search/photos";
  const QUERY = `${location}&per_page=12&page=1`;
  const API_KEY =
    "62290e497985a003118ae759aa80d4f3f2a5c6b05a053f4d32a744866330b765";
  const url = `${URI}${PTH}?query=${QUERY}&client_id=${API_KEY}`;
  const [photos, setPhotos] = useState(tourPhotoInit);

  useEffect(() => {
    fetchData<IUnsDataRes>(url, { "Accept-Version": "v1" }).then(res => {
      if (res) {
        const resultState = res.results.map((result: IUnsData) => ({
          id: result.id,
          alt_description: result.alt_description,
          urls: result.urls,
          user: result.user,
          links: result.links,
          created_at: result.created_at
        }));
        setPhotos({ results: resultState, loading: false, site: location });
      }
    });
  }, [url, location]);
  return (
    <tourFeaturePho.Provider value={photos}>{children}</tourFeaturePho.Provider>
  );
};
export const useUnspPhotoContextValue = () => useContext(tourFeaturePho);

export const SygicContextProvider = ({ children, location }: IApiProps) => {
  const API_KEY = "Iw3v10JNHl3iaauM5TSyO9yYOLT20OSf6c6J4tZa";
  const URL = "https://api.sygictravelapi.com/1.2/en";
  const PATH = "/collections";
  const city = location.split(",")[0];
  const country = location.split(",")[1];
  const queryCityIndex = querySygicCity(city, false);
  const queryCountryIndex = querySygicCity(country, true);
  const [sygicPlaces, setSygicPlaces] = useState(sygicInit);

  useEffect(() => {
    let url = "";
    let QUERY = "";

    if (city === undefined && country !== undefined) {
      QUERY = `parent_place_id=${queryCountryIndex}`;
    }
    if (city !== undefined) {
      QUERY = `parent_place_id=${queryCityIndex}`;
    }
    if (city === undefined && country === undefined) {
      QUERY = "parent_place_id=city:3358";
    }
    url = URL + PATH + "?" + QUERY + "&limit=2";
    const dataProcess = async () => {
      const collections = await fetchData<IsygicCollectionsRes>(url, {
        "x-api-key": API_KEY
      });
      if (collections) {
        const wtoSee = collections.data.collections[0];
        const bestHotels = collections.data.collections[1];
        const sceneName = wtoSee.name_long;
        const hotelName = bestHotels.name_long;
        const length = wtoSee.place_ids.slice(0, 25).length;
        const info = {
          length,
          names: [sceneName, hotelName]
        };
        const ids =
          wtoSee.place_ids.slice(0, 25).join("|") +
          "|" +
          bestHotels.place_ids.slice(0, 12).join("|");
        const url = `https://cors-anywhere.herokuapp.com/https://api.sygictravelapi.com/1.2/en/places?ids=${ids}`;

        const places = await fetchData<ISygicPlacesRes>(url, {
          "x-api-key": API_KEY
        });
        if (places) {
          const newPlacesInfo: ISygicPlace[] = places.data.places.map(
            (place: ISygicPlace) => ({
              name: place.name,
              id: place.id,
              url: place.url,
              address: place.address,
              admission: place.admission,
              customer_rating: place.customer_rating,
              hotel_star_rating: place.hotel_star_rating,
              duration_estimate: place.duration_estimate,
              opening_hours_note: place.opening_hours_note,
              opening_hours_raw: place.opening_hours_raw,
              marker: place.marker,
              perex: place.perex,
              main_media: place.main_media,
              categories: place.categories,
              tag_keys: place.tag_keys,
              description: place.description,
              references: place.references
            })
          );
          setSygicPlaces({
            loading: false,
            info,
            places: newPlacesInfo
          });
        }
      }
    };
    dataProcess();
  }, [city, country, queryCityIndex, queryCountryIndex]);

  return (
    <sygicContext.Provider value={sygicPlaces}>
      {children}
    </sygicContext.Provider>
  );
};
export const useSygicContextValue = () => useContext(sygicContext);
