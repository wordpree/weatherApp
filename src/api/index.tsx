import { fetchData } from "../util/utils";
import { S_API_KEY } from "./config";

const sygicHeader = {
  "x-api-key": S_API_KEY
};

export const fetchGooglePlace = async (url: string) => {
  const res = await fetchData(url, false);
  if (res.status !== "OK") {
    throw new Error(`${res.status}`);
  }
  return res;
};

export const fetchWeather = async (url: string) => {
  const res = await fetchData(url, false);
  if (res.cod !== 200) {
    throw new Error(`${res.cod}: no data show up`);
  }
  return res;
};

export const fetchNewsorg = async (url: string) => {
  const res = await fetchData(url, false);
  if (res.status !== "ok") {
    throw new Error(`${res.status}:${res.code}`);
  }
  return res;
};

export const fetchSygic = async (url: string) => {
  const res = await fetchData(url, sygicHeader);
  if (res.status_code !== 200) {
    throw new Error(`${res.status_code}`);
  }
  return res;
};
