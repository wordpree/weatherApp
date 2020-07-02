import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import { DataWithImg } from "../../util/utils";
import Islands from "./Islands";
import Loading from "../Loading";
import Parks from "./Parks";
import Popular from "./Popular";
import Subscribe from "./Subscribe";
import { TravelStore } from "../../redux-saga/reducer";
import { ITriposoPoi } from "../../util/type";

interface IAProps {
  popular: ITriposoPoi[];
  islands: ITriposoPoi[];
  parks: ITriposoPoi[];
}

const Attractions = ({ popular, islands, parks }: IAProps) => {
  return popular && islands && popular.length !== 0 && islands.length !== 0 ? (
    <>
      <Container>
        <Popular data={DataWithImg(popular, "Uluru")} />
        <Islands data={DataWithImg(islands)} />
      </Container>
      <Subscribe />
      <Container>
        <Parks data={DataWithImg(parks)} />
      </Container>
    </>
  ) : (
    <Loading value={100} />
  );
};
const mapStateToProps = (state: TravelStore) => ({
  popular: state.tPopular,
  islands: state.tLocation.islands,
  parks: state.tLocation.parks,
});

export default connect(mapStateToProps)(Attractions);
