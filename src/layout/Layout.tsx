import React, { useEffect } from "react";
import { Home, News, Photos, Travel } from "../pages";
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
  collections: ISygicCollection[];
  detail: IGooglePlaceDetail;
  reqNewsAction(location: string): void;
  reqSygicCollections(placeId: string): void;
  reqWeatherAction(geo: string): void;
  reqSygicDetail(id: number[], placeIds: string): void;
}

function Layout({
  collections,
  detail,
  reqNewsAction,
  reqSygicCollections,
  reqWeatherAction,
  reqSygicDetail
}: ILProps) {
  useEffect(() => {
    setStorageSearchPara(detail);
    const [placeId, location, geoLocation] = getStorageSearchPara();
    /*sygic travel collections*/
    reqSygicCollections(placeId);
    /**newsorg */
    reqNewsAction(location);
    /**openweathermap */
    reqWeatherAction(geoLocation);
  }, [detail]);

  useEffect(() => {
    /* sygic travel details*/
    const mix = idsSort(collections);
    if (mix !== undefined) {
      const [id, placeIds] = mix;
      reqSygicDetail(id, placeIds);
    }
  }, [collections]);

  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/attractions/:id" component={Details} />
      <Route path="/news" component={News} />
      <Route path="/photos" component={Photos} />
      <Route path="/travel" component={Travel} />
      <Route component={Error} />
    </Switch>
  );
}

export default Layout;
