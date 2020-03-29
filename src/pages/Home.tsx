import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Header,
  Search,
  LocalNews,
  LocalWeather,
  TourPhoto,
  Title,
  Banner,
  Recommend,
  SygicCollections,
  Restaurants,
  SygicColDet,
  Loading
} from "../components";

import { Grid, Container } from "@material-ui/core";
import { IWData, INData, ISygicCollection, IHmLocation } from "../util/type";

interface IHProps {
  weather: IWData | undefined;
  news: INData[] | undefined;
  collections: ISygicCollection[] | undefined;
}

const Home = ({ weather, news, collections }: IHProps) => {
  const storageValue: IHmLocation = JSON.parse(
    localStorage.getItem("locale") as string
  );

  const locationDetail = "";

  useEffect(() => {
    localStorage.setItem("locale", JSON.stringify(locationDetail));
  }, [locationDetail]);
  if (!weather || !news || !collections) return <Loading value={100} />;
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Banner />
        <Search />
        <SygicCollections collections={collections} />
        <Container>
          <Title text="News & Weather" css={{ borderBottom: "2px solid" }} />
          <Grid container spacing={5}>
            <LocalNews news={news} />
            <LocalWeather weather={weather} />
          </Grid>
        </Container>
        {/* <UnspPhotoProvider location={query}>
        <TourPhoto />
      </UnspPhotoProvider>
      <Recommend />} */}
      </Route>
      {/* <Route path="/attractions/:id">
        <SygicColDet />
      </Route> */}
    </Switch>
  );
};
export default Home;
