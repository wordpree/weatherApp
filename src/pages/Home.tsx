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
      <Container>
        <Titles
          title="News & Weather"
          style={{ borderBottom: "2px solid" }}
          subTitle=""
        />
        <Grid container spacing={5}>
          <LocalNews />
          <LocalWeather />
        </Grid>
      </Container>
      {/* <Photos /> */}
      <Footer />
    </>
  );
};

export default Home;
