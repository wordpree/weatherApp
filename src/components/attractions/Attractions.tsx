import React from "react";
import { connect } from "react-redux";
import Islands from "./Islands";
import Parks from "./Parks";
import Popular from "./Popular";
import { Container } from "@material-ui/core";
import { TravelStore } from "../../redux-saga/reducer";
import { ITriposoPoi } from "../../util/type";
import Loading from "../Loading";

interface IAProps {
  popular: ITriposoPoi[];
  islands: ITriposoPoi[];
  parks: ITriposoPoi[];
}

const Attractions = ({ popular, islands, parks }: IAProps) => {
  return popular && islands && popular.length !== 0 && islands.length !== 0 ? (
    <Container>
      <Popular data={popular} />
      <Islands data={islands} />
      <Parks data={parks} />
    </Container>
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
