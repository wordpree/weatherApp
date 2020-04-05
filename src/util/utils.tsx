import sygicCities from "./sygicTopCity.json";
import sygicCountries from "./sygicTopCountry.json";
import {
  IHmAddressBase,
  IGooglePlaceDetail,
  ISygicCollection,
  ISygicPlace,
  IZomatoDetail,
  detailIsZ,
} from "./type";

interface ICtyCodes {
  [k: string]: string;
}

export const dataFormat = (date: Date) => {
  return date.toLocaleString("en-AU", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const localTime = (date: Date, timezone: number) => {
  const offset = date.getTimezoneOffset() * 60000 + timezone * 1000;
  return new Date(Date.parse(date.toString()) + offset);
};

export const degreeToDir = (degree: number) => {
  const val = Math.floor(degree / 22.5 + 0.5);
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export async function fetchData(
  url: string,
  header: Record<string, string> | boolean
) {
  let res;
  if (typeof header === "boolean") {
    res = await fetch(url);
  } else {
    res = await fetch(url, { headers: header });
  }
  if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
  return await res.json();
}

export function findNameWithType(types: string[], query: string) {
  return types.join(",").includes(query);
}

function setString(input: string) {
  return input.trim().toLowerCase();
}

export function querySygicCityNCountry(address: IHmAddressBase[]) {
  let res;
  const city_short = setString(address[0].short_name);
  const city_long = setString(address[0].long_name);
  const country_short = setString(address[1].short_name);
  const country_long = setString(address[1].long_name);
  const sygicCitiesData: ICtyCodes = sygicCities;
  const sygicCountriesData: ICtyCodes = sygicCountries;

  res = Object.keys(sygicCitiesData).find((key: string) => {
    const city = sygicCitiesData[key].toLowerCase(); //city contains country info
    return (
      //city must be a city of a matched country
      (city.includes(city_short) || city.includes(city_long)) &&
      (city.includes(country_short) || city.includes(country_long))
    );
  });

  if (!res) {
    //city not found,search country instead
    res = Object.keys(sygicCountriesData).find((key: string) => {
      const country = sygicCountriesData[key].toLowerCase();
      return (
        country.includes(country_short) ||
        country.includes(country_long) ||
        country_short.includes(country) ||
        country_long.includes(country)
      );
    });
  }
  if (!res) {
    //country not found too
    res = "city:3358";
  }
  return res;
}

export const setStorageSearchPara = (detail: IGooglePlaceDetail) => {
  let placeId;
  let location;
  let geoLocation;
  let result;
  const storageParaInit = [
    "city:3358",
    "Brisbane OR Australia",
    "lat=-27.4679&lon=153.0281",
  ];
  if (!detail.hasOwnProperty("address_components")) {
    const localStore = localStorage.getItem("location");
    if (localStore) {
      return;
    }
    localStorage.setItem("location", JSON.stringify(storageParaInit));
    return;
  }
  const geo = detail.geometry.location;
  const cityIndex = detail.address_components.find((address) =>
    findNameWithType(address.types, "locality")
  );
  const countryIndex = detail.address_components.find((address) =>
    findNameWithType(address.types, "country")
  );

  if (cityIndex && countryIndex) {
    const city = {
      long_name: cityIndex.long_name,
      short_name: cityIndex.short_name,
    };
    const country = {
      long_name: countryIndex.long_name,
      short_name: countryIndex.short_name,
    };
    placeId = querySygicCityNCountry([city, country]); //sygic collections
    location = `${cityIndex.long_name} OR ${countryIndex.long_name}`; //newsorg
    geoLocation = `lat=${geo.lat}&lon=${geo.lng}`; //openweathermap
    result = [placeId, location, geoLocation];
    localStorage.setItem("location", JSON.stringify(result));
  }
};

export const getStorageSearchPara = () => {
  //local store has been set before
  const storageParaInit = [
    "city:3358",
    "Brisbane OR Australia",
    "lat=-27.4679&lon=153.0281",
  ];
  const store = localStorage.getItem("location");
  if (store && store !== "undefined") {
    return JSON.parse(store);
  } else {
    return storageParaInit;
  }
};

export const idsSort = (
  collections: ISygicCollection[]
): [number[], string] | undefined => {
  if (collections.length === 0) return undefined;
  let placeIds: string[] = [];
  let id: number[] = [];
  collections.forEach((col) => {
    placeIds = placeIds.concat(col.place_ids);
    id.push(col.id);
  });

  return [id.slice(0, 3), placeIds.slice(0, 27).join("|")];
};

export const sortDetailsData = (item: ISygicPlace | IZomatoDetail) => {
  let ret;
  if (detailIsZ(item)) {
    ret = {
      address: item.restaurant.location.address,
      addressLocal: item.restaurant.location.locality_verbose,
      cuisines: item.restaurant.cuisines,
      establishment: item.restaurant.establishment,
      rating: item.restaurant.user_rating,
      id: item.restaurant.id,
      img: item.restaurant.featured_image,
      name: item.restaurant.name,
    };
  } else {
    ret = {
      img: item.main_media.media[0].url_template.replace("{size}", "750x500"),
      name: item.name,
      perex: item.perex,
      id: item.id,
    };
  }
  return ret;
};
