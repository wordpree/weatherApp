import React, { useEffect, useCallback } from "react";
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
  reqNewsAction(): void;
  reqWeatherAction(geo: string): void;
  reqGoogleSearchText(country: string): void;
  reqTriposoPopularPoiAction(): void;
  reqTriposoLocationAction(): void;
  reqTriposoCitiesAction(): void;
}

function Layout({
  islands,
  populars,
  parks,
  reqNewsAction,
  reqTriposoPopularPoiAction,
  reqTriposoLocationAction,
  reqTriposoCitiesAction,
}: ILProps) {
  const reqTriposoPopularPoi = useCallback(reqTriposoPopularPoiAction, []);
  const reqTriposoLocation = useCallback(reqTriposoLocationAction, []);
  const reqTriposoCities = useCallback(reqTriposoCitiesAction, []);
  useEffect(() => {
    /* triposo */
    reqTriposoPopularPoi();
    reqTriposoLocation();
    reqTriposoCities();
    /**newsorg */
    reqNewsAction();
  }, [
    reqNewsAction,
    reqTriposoCities,
    reqTriposoLocation,
    reqTriposoPopularPoi,
  ]);
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
