import React, { useEffect } from "react";
import { Home, News, Photos, Restaurant } from "../pages";
import { Route, Switch } from "react-router-dom";
import Error from "../components/Error";
import { TDetail, ZDetail } from "../components";
import { IGooglePlaceDetail } from "../util/type";
import { setStorageSearchPara, getStorageSearchPara } from "../util/utils";

interface ILProps {
  detail: IGooglePlaceDetail;
  reqNewsAction(location: string): void;
  reqWeatherAction(geo: string): void;
  reqZomatoCityAction(geo: string): void;
  reqZomatoCollectionAction(geo: string): void;
  reqGoogleSearchText(country: string): void;
}

function Layout({
  detail,
  reqNewsAction,
  reqWeatherAction,
  reqZomatoCityAction,
  reqZomatoCollectionAction,
  reqGoogleSearchText,
}: ILProps) {
  useEffect(() => {
    setStorageSearchPara(detail);
    const [location, geoLocation] = getStorageSearchPara();

    /*zomato retaurant*/
    reqZomatoCollectionAction(geoLocation);
    reqZomatoCityAction(geoLocation);

    /**newsorg */
    reqNewsAction(location);

    /**openweathermap */
    reqWeatherAction(geoLocation);

    /*pexels photos*/
    reqGoogleSearchText(location.split("OR")[1]);
  }, [
    detail,
    reqZomatoCollectionAction,
    reqZomatoCityAction,
    reqNewsAction,
    reqWeatherAction,
    reqGoogleSearchText,
  ]);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/attractions/:tag" component={TDetail} />
      <Route path="/restaurant/:id" component={ZDetail} />
      <Route path="/news" component={News} />
      <Route path="/photos" component={Photos} />
      <Route exact path="/restaurant" component={Restaurant} />
      <Route component={Error} />
    </Switch>
  );
}

export default Layout;
