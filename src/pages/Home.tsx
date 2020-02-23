import React, { useState, useEffect } from "react";
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
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("Brisbane,Australia");
  const handler = {
    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      localStorage.setItem("query", input);
      setQuery(input);
      e.preventDefault();
    },
    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInput(e.target.value);
    }
  };

  useEffect(() => {
    function getQuery() {
      let query = "";
      if (localStorage.getItem("query")) {
        query = localStorage.getItem("query") as string;
        console.log(query);
      } else {
        query = "Brisbane,Australia";
      }
      return query;
    }
    setQuery(getQuery());
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Search {...handler} />
      <UnspPhotoProvider spot={query}>
        <TourPhoto />
      </UnspPhotoProvider>
      <Container>
        <Title text="News & Weather" css={{ borderBottom: "2px solid" }} />
        <Grid container spacing={5}>
          <NewsApiDataProvider query={query}>
            <LocalNews query={query} />
          </NewsApiDataProvider>
          <WeatherApiDataProvider location={query}>
            <LocalWeather />
          </WeatherApiDataProvider>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
