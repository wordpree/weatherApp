import React, { useEffect } from "react";
import { Home, News, Photos, Travel } from "../pages";
import { Route, Switch } from "react-router-dom";
import Error from "../components/Error";
import { sortData } from "../util/utils";
import { ISygicCollection, IWData, INData } from "../util/type";

type InitState = {
  collections: ISygicCollection[];
  weather: IWData;
  news: INData[];
};

interface ILProps {
  state: InitState;
  reqNewsAction(location: string): void;
  reqSygicCollections(placeId: string): void;
  reqWeatherAction(geo: string): void;
}

function Layout({
  state,
  reqNewsAction,
  reqSygicCollections,
  reqWeatherAction
}: ILProps) {
  const [placeId, location, geoLocation] = sortData();

  useEffect(() => {
    if (!placeId || !location || !geoLocation) return;
    /*sygic travel*/
    reqSygicCollections(placeId);
    /**newsorg */
    reqNewsAction(location);
    /**openweathermap */
    reqWeatherAction(geoLocation);
  }, [placeId, location, geoLocation]);

  return (
    <Switch>
      <Route exact path="/" render={() => <Home {...state} />} />
      <Route path="/attractions" component={Home} />
      <Route path="/news" component={News} />
      <Route path="/photos" component={Photos} />
      <Route path="/travel" component={Travel} />
      <Route component={Error} />
    </Switch>
  );
}

export default Layout;
