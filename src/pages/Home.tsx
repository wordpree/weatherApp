import React, { useState } from "react";
import {
  Header,
  Search,
  LocalNews,
  LocalWeather,
  TourPhoto,
  Title,
  Banner
} from "../components";
import {
  WeatherApiDataProvider,
  UnspPhotoProvider,
  NewsApiDataProvider
} from "../util/apiCall";
import { Grid, Container } from "@material-ui/core";

const Home = () => {
  const [submit, setSubmit] = useState("Brisbane, Australia");
  const [input, setInput] = useState("Brisbane, Australia");

  const handler = {
    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      setSubmit(input);
      e.preventDefault();
    },
    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <Search {...handler} />
      <UnspPhotoProvider spot={submit}>
        <TourPhoto />
      </UnspPhotoProvider>
      <Container>
        <Title text="Weather & News" css={{ borderBottom: "2px solid" }} />
        <Grid container spacing={5}>
          <WeatherApiDataProvider location={submit}>
            <LocalWeather />
          </WeatherApiDataProvider>
          <NewsApiDataProvider city={submit.replace(",", " And ")}>
            <LocalNews />
          </NewsApiDataProvider>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
