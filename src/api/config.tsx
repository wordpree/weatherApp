const G_API_KEY = "AIzaSyBIDPYFVWcF6oMGjC09UXAjXz7L735A36Y";
const W_API_KEY = "00194910deb21b1edc80422332e0c1ec";
const N_API_KEY = "6352c20ad9204ab181b8a82ac99d0299";
const T_API_KEY = "xn5afe1z47abm1o6wjx9m5euskyh0kjn";

export const P_API_KEY =
  "563492ad6f91700001000001f2888cf110ad4577877362bd98cd211d";
export const Z_API_KEY = "dcd4f50adb1146d8bdcc1e2da6c07dc1";
export const S_API_KEY = "Iw3v10JNHl3iaauM5TSyO9yYOLT20OSf6c6J4tZa";
const CORS = "https://cors-anywhere.herokuapp.com/";
const G_PLACE = "https://maps.googleapis.com/maps/api/place";

export const googleAutoComplete = (address: string) =>
  `${CORS}${G_PLACE}/autocomplete/json?input=${address}&types=(regions)&key=${G_API_KEY}`;

export const googlePlaceDetail = (placeId: string) =>
  `${CORS}${G_PLACE}/details/json?place_id=${placeId}&fields=geometry,address_component&key=${G_API_KEY}`;

export const googleTextsearch = (country: string) =>
  `${CORS}${G_PLACE}/textsearch/json?query=point+of+interest+in+${country}&key=${G_API_KEY}`;

export const googlePlacePhoto = (reference: string, maxWidth: number) =>
  `${CORS}${G_PLACE}/photo?maxwidth=${maxWidth}&photoreference=${reference}&key=${G_API_KEY}`;

export const weatherApi = (geo: string) =>
  `https://api.openweathermap.org/data/2.5/weather?${geo}&units=metric&appid=${W_API_KEY}`;

export const newsorgApi = () =>
  `${CORS}https://newsapi.org/v2/top-headlines?country=au&category=general&pageSize=25&page=1&apikey=${N_API_KEY}`;

export const zomatoCuisineUrl = (cusineId: number, lat: number, lon: number) =>
  `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&cuisines=${cusineId}`;

export const triposePopular = () =>
  `https://www.triposo.com/api/20200405/poi.json?token=${T_API_KEY}&location_id=Australia&tag_labels=exploringnature&fields=all&exclude_fields=structured_content_language_info,attribution,tags&account=EERNPMK9&order_by=-score`;

export const triposoLocation = (tagLabels: string) =>
  `https://www.triposo.com/api/20200405/location.json?token=${T_API_KEY}&part_of=Australia&tag_labels=${tagLabels}&fields=all&exclude_fields=structured_content_language_info,attribution,tags&account=EERNPMK9&order_by=-score`;

export const triposoCities = () =>
  `https://www.triposo.com/api/20200405/location.json?token=${T_API_KEY}&account=EERNPMK9&fields=id,coordinates,score,intro,content,images,name,musement_locations&tag_labels=city&part_of=Australia&order_by=-score&count=10`;

export const triposoTours = (city: string) =>
  `https://www.triposo.com/api/20200405/tour.json?token=${T_API_KEY}&account=EERNPMK9&fields=all&order_by=-score&location_ids=${city}&annotate=converted_price:Aud&countrycode=AU&count=10&exclude_fields=structured_content,tags`;
