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
}
const Index = ({
  cities,
  reqTriposoTourAction,
  tours,
  reqTriposoTourDelete,
}: IIProps) => {
  useEffect(() => {
    reqTriposoTourAction("Sydney");
  }, []);
  return (
    <Container style={{ marginTop: "4rem", marginBottom: "6rem" }}>
      {cities.length !== 0 && (
        <>
          <City
            data={cities}
            reqTourOnClick={reqTriposoTourAction}
            reqTourDelete={reqTriposoTourDelete}
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
  bindActionCreators({ reqTriposoTourAction, reqTriposoTourDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Index);
