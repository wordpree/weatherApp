const G_API_KEY = "AIzaSyBIDPYFVWcF6oMGjC09UXAjXz7L735A36Y";
const W_API_KEY = "00194910deb21b1edc80422332e0c1ec";
const N_API_KEY = "6352c20ad9204ab181b8a82ac99d0299";
export const Z_API_KEY = "dcd4f50adb1146d8bdcc1e2da6c07dc1";
export const S_API_KEY = "Iw3v10JNHl3iaauM5TSyO9yYOLT20OSf6c6J4tZa";
const CORS = "https://cors-anywhere.herokuapp.com/";

export const googleAutoComplete = (address: string) =>
  `${CORS}https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&types=(regions)&key=${G_API_KEY}`;

export const googlePlaceDetail = (placeId: string) =>
  `${CORS}https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry,address_component&key=${G_API_KEY}`;

export const weatherApi = (geo: string) =>
  `https://api.openweathermap.org/data/2.5/weather?${geo}&units=metric&appid=${W_API_KEY}`;

export const newsorgApi = (location: string) =>
  `https://newsapi.org/v2/everything?q=${location}&pageSize=25&page=1&apikey=${N_API_KEY}`;

export const sygicApi = (placeId: string) =>
  `${CORS}https://api.sygictravelapi.com/1.2/en/collections?parent_place_id=${placeId}&prefer_unique=1&limit=5`;

export const sygicDetailApi = (ids: string) =>
  `${CORS}https://api.sygictravelapi.com/1.2/en/places?ids=${ids}`;

export const zomatoCityUrl = (geo: string) =>
  `https://developers.zomato.com/api/v2.1/cities?${geo}`;

export const zomatoCollectionsUrl = (geo: string) =>
  `https://developers.zomato.com/api/v2.1/collections?${geo}`;
