import React from "react";
import {
  // Header,
  CityAndTour,
  Search,
  Attractions,
  LocalNews,
  LocalWeather,
  Banner,
  FoodCourt,
  Photos,
  Footer,
  Titles,
} from "../components";

import { Grid, Container } from "@material-ui/core";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <CityAndTour />
      <Attractions />
      <FoodCourt />
      {/* <Search /> */}
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
      {/* <Photos /> */}
      <Footer />
    </>
  );
};

export default Home;
