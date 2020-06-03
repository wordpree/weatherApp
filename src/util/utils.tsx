import { IGooglePlaceDetail, City, Cuisine } from "./type";

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
    // console.log(url);

    res = await fetch(url);
    // console.log(`${res.status}: ${res.statusText}--${url}`);
  } else {
    res = await fetch(url, { headers: header });
  }
  if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
  return await res.json();
}

export function findNameWithType(types: string[], query: string) {
  return types.join(",").includes(query);
}

export const setStorageSearchPara = (detail: IGooglePlaceDetail) => {
  let location;
  let geoLocation;
  let coordinate;
  let result;
  const storageParaInit = [
    "Brisbane OR Australia",
    "lat=-27.4679&lon=153.0281",
    "-27.4679, 153.0281",
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
    location = `${cityIndex.long_name} OR ${countryIndex.long_name}`; //newsorg
    geoLocation = `lat=${geo.lat}&lon=${geo.lng}`; //openweathermap,zomato
    coordinate = `${geo.lat},${geo.lng}`; //triposo
    result = [location, geoLocation, coordinate];
    localStorage.setItem("location", JSON.stringify(result));
  }
};

export const getStorageSearchPara = () => {
  //local store has been set before
  const storageParaInit = [
    "Brisbane OR Australia",
    "lat=-27.4679&lon=153.0281",
    "-27.4679, 153.0281",
  ];
  const store = localStorage.getItem("location");
  if (store && store !== "undefined") {
    return JSON.parse(store);
  } else {
    return storageParaInit;
  }
};

/******type guard*********/

export function isCity(input: City | Cuisine): input is City {
  return (input as City).coordinates !== undefined;
}
