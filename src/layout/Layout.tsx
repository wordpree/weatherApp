import React, { useEffect } from "react";
import { Home, News, Photos } from "../pages";
import { PopularDetail } from "../components";
import { Route, Switch } from "react-router-dom";
import Error from "../components/Error";
import { ITriposoPoi } from "../util/type";

interface ILProps {
  populars: ITriposoPoi[];
  reqNewsAction(location: string): void;
  reqWeatherAction(geo: string): void;
  reqGoogleSearchText(country: string): void;
  reqTriposoPopularPoiAction(): void;
  reqTriposoLocationAction(): void;
  reqTriposoCitiesAction(): void;
}

function Layout({
  populars,
  reqNewsAction,
  reqTriposoPopularPoiAction,
  reqTriposoLocationAction,
  reqTriposoCitiesAction,
}: ILProps) {
  useEffect(() => {
    /* triposo */
    reqTriposoPopularPoiAction();
    reqTriposoLocationAction();
    reqTriposoCitiesAction();
    /**newsorg */
    reqNewsAction("Brisbane OR Australia");
    /*pexels photos*/
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/explore-nature/:id">
        <PopularDetail data={populars} />
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
