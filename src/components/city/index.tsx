import React, { useEffect } from "react";
import City from "./City";
import Tour from "./Tour";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { TravelStore } from "../../redux-saga/reducer";
import { ITriposoPoi } from "../../util/type";
import { Container } from "@material-ui/core";
import {
  reqTriposoTourAction,
  reqTriposoTourDelete,
  reqWeatherAction,
} from "../../redux-saga/actions";

export type Tours = {
  tours: ITriposoPoi[];
  city: string;
};

interface IIProps {
  cities: ITriposoPoi[];
  tours: Tours;
  reqTriposoTourAction(city: string): void;
  reqTriposoTourDelete(): void;
  reqWeatherAction(geo: string): void;
}
const Index = ({
  cities,
  reqTriposoTourAction,
  tours,
  reqTriposoTourDelete,
  reqWeatherAction,
}: IIProps) => {
  useEffect(() => {
    reqTriposoTourAction("Sydney");
    reqWeatherAction("lat=-33.869612446998374&lon=151.21067778304484");
  }, []);

  const handleWeather = (id: string) => {
    let para;
    const ret = cities.find((city) => city.id === id);
    if (ret) {
      para = `lat=${ret.coordinates.latitude}&lon=${ret.coordinates.longitude}`;
    } else {
      para = "lat=-33.869612446998374&lon=151.21067778304484";
    }
    reqWeatherAction(para);
  };
  return (
    <Container style={{ marginTop: "4rem", marginBottom: "6rem" }}>
      {cities.length !== 0 && (
        <>
          <City
            data={cities}
            reqTourOnClick={reqTriposoTourAction}
            reqTourDelete={reqTriposoTourDelete}
            handleWeather={handleWeather}
          />
          <Tour data={tours} />
        </>
      )}
    </Container>
  );
};
const mapStateToProps = (state: TravelStore) => ({
  cities: state.tCities,
  tours: state.tTours,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { reqTriposoTourAction, reqTriposoTourDelete, reqWeatherAction },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Index);
