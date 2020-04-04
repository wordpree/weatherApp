import React from "react";
import {
  Header,
  Search,
  LocalNews,
  LocalWeather,
  TourPhoto,
  Title,
  ZCollections,
  Banner,
  Recommend,
  Collections,
  ColDet,
  Footer
} from "../components";

import { Grid, Container } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Search />
      <Collections />
      <ZCollections />
      <Container>
        <Title text="News & Weather" css={{ borderBottom: "2px solid" }} />
        <Grid container spacing={5}>
          <LocalNews />
          <LocalWeather />
        </Grid>
      </Container>
      {/* <UnspPhotoProvider location={query}>
        <TourPhoto />
      </UnspPhotoProvider>
      <Recommend />} */}
      <Footer />
    </>
  );
};

export default Home;
