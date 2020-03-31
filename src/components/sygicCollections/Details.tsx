import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header";
import { ISygicPlace } from "../../util/type";
import { TravelStore } from "../../redux-saga/reducer";
import { DetList1, DetList2, DetList3, DetList4 } from "./index";
import { Container } from "@material-ui/core";
import Footer from "../footer";

type P = {
  id: number;
  places: ISygicPlace[];
};

interface IDProps {
  placesDet: Array<P>;
}

const Details = ({ placesDet }: IDProps) => {
  const { id } = useParams();
  const current = placesDet.find(item => `${item.id}` === id);
  return (
    <>
      <Header />
      {current && (
        <Container>
          <DetList1 place={current.places[0]} />
          <DetList2 place={current.places.slice(1, 4)} />
          <DetList3 place={current.places.slice(4, 7)} />
          <DetList4 place={current.places.slice(7, 9)} />
        </Container>
      )}
      <Footer />
    </>
  );
};

const mapStateToPorps = (state: TravelStore) => ({
  placesDet: state.places
});

export default connect(mapStateToPorps)(Details);
