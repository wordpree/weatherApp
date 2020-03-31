import React, { useContext, useState, useEffect } from "react";
// import { querySygicCityNCountry } from "./utils";
import { fetchData } from "./utils";
import {
  //   IZomatoColtnRes,
  //   IZomatoColtnData,
  //   IWData,
  //   IUnsData,
  //   IUnsDataRes,
  IApiProps,
  INData
  //   INDataRes,
  //   ISygicPlace,
  //   ISygicPlacesRes,
  //   ISygicCol,
  //   ISygicColDet,
  //   IsygicCollectionsRes,
  //   ISygicCollection
} from "./type";

// const tourPhotoInit = {
//   results: [] as Array<IUnsData>,
//   loading: true,
//   site: ""
// };
// const weatherInit = {
//   loading: true,
//   data: {} as IWData
// };
const newsInit = {
  loading: true,
  articles: [] as Array<INData>
};
// const sygicColInit = {
//   collections: [] as ISygicCollection[]
// };
// const sygicColDetInit: ISygicPlace[] = [];

// const zomatoInit = { loading: true, collections: [] as IZomatoColtnData[] };

// const weatherContext = React.createContext(weatherInit);
const newsContext = React.createContext(newsInit);
// const tourFeaturePho = React.createContext(tourPhotoInit);
// const sygicColContext = React.createContext(sygicColInit);
// const sygicColDetContext = React.createContext(sygicColDetInit);
// const zomatoContext = React.createContext(zomatoInit);

// export const WeatherProvider = ({ children, location }: IApiProps) => {
//   const API_KEY = "00194910deb21b1edc80422332e0c1ec";
//   const FETCH_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const [forecasts, setForecasts] = useState(weatherInit);

//   useEffect(() => {
//     const url = `${FETCH_URL}?${location}&units=metric&appid=${API_KEY}`;
//     fetchData(url, false).then(res => {
//       if (res) {
//         const data: IWData = {
//           main: res.main,
//           sys: res.sys,
//           name: res.name,
//           weather: res.weather,
//           wind: res.wind,
//           visibility: res.visibility,
//           timezone: res.timezone,
//           clouds: res.clouds,
//           coord: res.coord
//         };
//         setForecasts({ data, loading: false });
//       }
//     });
//   }, [location]);

//   return (
//     <weatherContext.Provider value={forecasts}>
//       {children}
//     </weatherContext.Provider>
//   );
// };
// export const useWeatherContext = () => useContext(weatherContext);

export const NewsProvider = ({ location, children }: IApiProps) => {
  const URL = "https://newsapi.org/v2/everything";
  const API_KEY = "6352c20ad9204ab181b8a82ac99d0299";
  const [newsData, setNewsData] = useState(newsInit);
  const url = `${URL}?q=${location}&apikey=${API_KEY}&pageSize=25&page=1`;

  useEffect(() => {
    fetchData(url, false).then(res => {
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
export const useNewsContext = () => useContext(newsContext);

// export const UnspPhotoProvider = ({ children, location }: IApiProps) => {
//   const URI = "https://api.unsplash.com";
//   const PTH = "/search/photos";
//   const QUERY = `${location}&per_page=12&page=1`;
//   const API_KEY =
//     "62290e497985a003118ae759aa80d4f3f2a5c6b05a053f4d32a744866330b765";
//   const url = `${URI}${PTH}?query=${QUERY}&client_id=${API_KEY}`;
//   const [photos, setPhotos] = useState(tourPhotoInit);

//   useEffect(() => {
//     fetchData(url, { "Accept-Version": "v1" }).then(res => {
//       if (res) {
//         const resultState = res.results.map((result: IUnsData) => ({
//           id: result.id,
//           alt_description: result.alt_description,
//           urls: result.urls,
//           user: result.user,
//           links: result.links,
//           created_at: result.created_at
//         }));
//         setPhotos({ results: resultState, loading: false, site: location });
//       }
//     });
//   }, [url, location]);
//   return (
//     <tourFeaturePho.Provider value={photos}>{children}</tourFeaturePho.Provider>
//   );
// };
// export const useUnspPhotoContextValue = () => useContext(tourFeaturePho);

// export const SygicColContextProvider = ({ children, address }: ISygicCol) => {
//   const init = { collections: [] as Array<ISygicCollection> };
//   const [data, setData] = useState(init);
//   useEffect(() => {
//     const API_KEY = "Iw3v10JNHl3iaauM5TSyO9yYOLT20OSf6c6J4tZa";
//     const SygicDetails = "https://api.sygictravelapi.com/1.2/en/collections";
//     const lookUpResult = querySygicCityNCountry(address);

//     const dataProcess = async () => {
//       if (!lookUpResult) return;
//       const url =
//         SygicDetails +
//         `?parent_place_id=${lookUpResult}&prefer_unique=1&limit=5`;
//       const res = await fetchData(url, {
//         "x-api-key": API_KEY
//       });
//       if (res) {
//         setData({ collections: res.data.collections });
//       }
//     };
//     dataProcess();
//   }, [address]);

//   return (
//     <sygicColContext.Provider value={data}>{children}</sygicColContext.Provider>
//   );
// };
// export const useSygicColContext = () => useContext(sygicColContext);

// export const SygicColDetContextProvider = ({
//   children,
//   place_ids
// }: ISygicColDet) => {
//   const placeInit: ISygicPlace[] = [];
//   const [places, setPlaces] = useState(placeInit);
//   useEffect(() => {
//     const dataProcess = async () => {
//       const API_KEY = "Iw3v10JNHl3iaauM5TSyO9yYOLT20OSf6c6J4tZa";
//       const ids = place_ids.slice(0, 9).join("|");
//       const url = `https://cors-anywhere.herokuapp.com/https://api.sygictravelapi.com/1.2/en/places?ids=${ids}`;
//       const places = await fetchData(url, {
//         "x-api-key": API_KEY
//       });
//       if (places) {
//         setPlaces(places.data.places);
//       }
//     };
//     dataProcess();
//   }, [place_ids]);
//   return (
//     <sygicColDetContext.Provider value={places}>
//       {children}
//     </sygicColDetContext.Provider>
//   );
// };
// export const useSygicColDetContext = () => useContext(sygicColDetContext);

// export const ZomatoProvider = ({ location, children }: IApiProps) => {
//   const CORS = "https://cors-anywhere.herokuapp.com/";
//   const API_KEY = "dcd4f50adb1146d8bdcc1e2da6c07dc1";
//   const [collections, setCollections] = useState(zomatoInit);
//   useEffect(() => {
//     const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`;
//     const header = { Authorization: `Bearer ${API_KEY}` };
//     const dataProcess = async () => {
//       const response = await fetchData(url, header);
//       if (response) {
//         console.log("calling from yelp");
//         setCollections({ loading: false, collections: response });
//       }
//     };
//     dataProcess();
//   }, [location]);

//   return (
//     <zomatoContext.Provider value={collections}>
//       {children}
//     </zomatoContext.Provider>
//   );
// };
// export const useZomatoContext = () => useContext(zomatoContext);
