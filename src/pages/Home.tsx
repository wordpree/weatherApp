import React, { useState, useEffect } from "react";
import {
  Header,
  Search,
  LocalNews,
  LocalWeather,
  TourPhoto,
  Title,
  Banner,
  Recommend,
  SygicCollections
} from "../components";
import {
  WeatherApiDataProvider,
  UnspPhotoProvider,
  NewsApiDataProvider,
  SygicContextProvider
} from "../util/apiCall";
import { Grid, Container } from "@material-ui/core";

const Home = () => {
  const handleStorage = () => {
    const req = localStorage.getItem("query");
    const storageData = req ? req : "Brisbane,Australia";
    return storageData;
  };
  const [input, setInput] = useState("");
  const [query, setQuery] = useState(handleStorage());

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
      let query = localStorage.getItem("query");
      if (!query) {
        query = "Brisbane,Australia";
        localStorage.setItem("query", query);
      }
      setQuery(query);
    }
    getQuery();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Search {...handler} />
      <SygicContextProvider location={query}>
        <SygicCollections />
      </SygicContextProvider>
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
      <Recommend />
    </>
  );
};

export default Home;
