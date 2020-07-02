import React, { useEffect } from "react";
import { Home, News, Photos } from "../pages";
import { AttractionDetail } from "../components";
import { Route, Switch } from "react-router-dom";
import Error from "../components/Error";
import { ITriposoPoi } from "../util/type";
import { DataWithImg } from "../util/utils";

interface ILProps {
  islands: ITriposoPoi[];
  populars: ITriposoPoi[];
  parks: ITriposoPoi[];
  reqNewsAction(location: string): void;
  reqWeatherAction(geo: string): void;
  reqGoogleSearchText(country: string): void;
  reqTriposoPopularPoiAction(): void;
  reqTriposoLocationAction(): void;
  reqTriposoCitiesAction(): void;
  reqZomatoCuisineAction(cuisineId: number, lat: number, lon: number): void;
}

const cuisineId = 177;
const cityInitBrisbane = { latitude: -27.4709989, longitude: 153.0252 };

function Layout({
  islands,
  populars,
  parks,
  reqNewsAction,
  reqZomatoCuisineAction,
  reqTriposoPopularPoiAction,
  reqTriposoLocationAction,
  reqTriposoCitiesAction,
}: ILProps) {
  useEffect(() => {
    /* triposo */
    reqTriposoPopularPoiAction();
    reqTriposoLocationAction();
    reqTriposoCitiesAction();
    /*zomato*/
    reqZomatoCuisineAction(
      cuisineId,
      cityInitBrisbane.latitude,
      cityInitBrisbane.longitude
    );
    /**newsorg */
    reqNewsAction("Brisbane OR Australia");
  }, []);
  const popularsWithImg = DataWithImg(populars, "Uluru");
  const islandsWithImg = DataWithImg(islands);
  const parksWithImg = DataWithImg(parks);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/explore-nature/:id">
        <AttractionDetail data={popularsWithImg} />
      </Route>
      <Route path="/attractive-islands/:id">
        <AttractionDetail data={islandsWithImg} />
      </Route>
      <Route path="/national-park/:id">
        <AttractionDetail data={parksWithImg} />
      </Route>
      <Route path="/blog" component={News} />
      <Route path="/explore" component={Photos} />
      <Route exact path="/Flights" component={Photos} />
      <Route exact path="/hotels" component={Photos} />
      <Route component={Error} />
    </Switch>
  );
}

export default Layout;
