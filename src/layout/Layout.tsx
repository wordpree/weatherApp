import React, { useEffect } from "react";
import { Home, News, Photos, Restaurant } from "../pages";
import { Route, Switch } from "react-router-dom";
import Error from "../components/Error";
import { Details } from "../components";
import { ISygicCollection, IGooglePlaceDetail } from "../util/type";
import {
  setStorageSearchPara,
  getStorageSearchPara,
  idsSort
} from "../util/utils";

interface ILProps {
  //collections: ISygicCollection[];
  detail: IGooglePlaceDetail;
  reqNewsAction(location: string): void;
  //reqSygicCollections(placeId: string): void;
  reqWeatherAction(geo: string): void;
  //reqSygicDetail(id: number[], placeIds: string): void;
  reqZomatoCityAction(geo: string): void;
  reqZomatoCollectionAction(geo: string): void;
}

function Layout({
  detail,
  reqNewsAction,
  reqWeatherAction,
  reqZomatoCityAction,
  reqZomatoCollectionAction
}: ILProps) {
  useEffect(() => {
    setStorageSearchPara(detail);
    const [placeId, location, geoLocation] = getStorageSearchPara();
    /*sygic travel collections*/
    // reqSygicCollections(placeId);

    /*zomato retaurant*/
    reqZomatoCollectionAction(geoLocation);
    reqZomatoCityAction(geoLocation);

    /**newsorg */
    reqNewsAction(location);

    /**openweathermap */
    reqWeatherAction(geoLocation);
  }, [detail]);

  // useEffect(() => {
  //   /* sygic travel details*/
  //   const mix = idsSort(collections);
  //   if (mix !== undefined) {
  //     const [id, placeIds] = mix;
  //     reqSygicDetail(id, placeIds);
  //   }
  // }, [collections]);

  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/attractions/:id" component={Details} />
      <Route path="/news" component={News} />
      <Route path="/photos" component={Photos} />
      <Route path="/restaurant" component={Restaurant} />
      <Route component={Error} />
    </Switch>
  );
}

export default Layout;
