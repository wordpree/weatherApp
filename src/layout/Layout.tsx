import React, { useEffect } from "react";
import { Home, News, Photos, Restaurant } from "../pages";
import { Route, Switch } from "react-router-dom";
import Error from "../components/Error";
import { IGooglePlaceDetail } from "../util/type";
import { setStorageSearchPara, getStorageSearchPara } from "../util/utils";

interface ILProps {
  detail: IGooglePlaceDetail;
  reqNewsAction(location: string): void;
  reqWeatherAction(geo: string): void;
  reqGoogleSearchText(country: string): void;
  reqTriposoPopularPoiAction(): void;
  reqTriposoLocationAction(): void;
  reqTriposoCitiesAction(): void;
}

function Layout({
  detail,
  reqNewsAction,
  reqWeatherAction,
  reqGoogleSearchText,
  reqTriposoPopularPoiAction,
  reqTriposoLocationAction,
  reqTriposoCitiesAction,
}: ILProps) {
  useEffect(() => {
    setStorageSearchPara(detail);
    const [location] = getStorageSearchPara();
    /* triposo */
    reqTriposoPopularPoiAction();
    reqTriposoLocationAction();
    reqTriposoCitiesAction();
    /**newsorg */
    reqNewsAction(location);
    /*pexels photos*/
    reqGoogleSearchText(location.split("OR")[1]);
  }, [
    detail,
    reqNewsAction,
    reqWeatherAction,
    reqGoogleSearchText,
    reqTriposoPopularPoiAction,
    reqTriposoLocationAction,
    reqTriposoCitiesAction,
  ]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/news" component={News} />
      <Route path="/photos" component={Photos} />
      <Route exact path="/restaurant" component={Restaurant} />
      <Route component={Error} />
    </Switch>
  );
}

export default Layout;
