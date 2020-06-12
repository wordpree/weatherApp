import React from "react";
import {
  CityAndTour,
  Attractions,
  LocalNews,
  LocalWeather,
  Banner,
  FoodCourt,
  Footer,
  Titles,
} from "../components";

import { Grid, Container } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Banner />
      <CityAndTour />
      <Attractions />
      <FoodCourt />
      <Container style={{ margin: "6rem auto" }}>
        <Titles
          title="News & Weather"
          subTitle="Headlines and weather condition around Australia"
          style={{ marginBottom: "1.5rem" }}
        />
        <Grid
          container
          spacing={5}
          style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.25)", borderRadius: 10 }}
        >
          <LocalWeather />
          <LocalNews />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
