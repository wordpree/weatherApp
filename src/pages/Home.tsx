import React, { useState } from "react";
import {
  Header,
  Search,
  Forecasts,
  TourPhoto,
  Title,
  Banner
} from "../components";
import { WeatherApiDataProvider, UnspPhotoProvider } from "../util/apiCall";

const Home = () => {
  //hanlde search process
  const [submit, setSubmit] = useState("Brisbane, Australia");
  const [input, setInput] = useState("Brisbane,Australia");

  const handler = {
    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      setSubmit(input);
      e.preventDefault();
    },
    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInput(e.target.value);
    }
  };
  //handle banner data process

  return (
    <>
      <Header />
      <Banner />
      <Title />
      <Search {...handler} />
      <UnspPhotoProvider spot={submit}>
        <TourPhoto />
      </UnspPhotoProvider>
      <WeatherApiDataProvider location={submit}>
        <Forecasts />
      </WeatherApiDataProvider>
    </>
  );
};

export default Home;
