import React from "react";
import {
  Header,
  Search,
  LocalNews,
  LocalWeather,
  Title,
  ZCollections,
  Banner,
  TCollections,
  Photos,
  Footer,
} from "../components";

import { Grid, Container } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Search />
      <TCollections />
      <ZCollections />
      <Container>
        <Title text="News & Weather" css={{ borderBottom: "2px solid" }} />
        <Grid container spacing={5}>
          <LocalNews />
          <LocalWeather />
        </Grid>
      </Container>
      <Photos />
      <Footer />
    </>
  );
};

export default Home;
