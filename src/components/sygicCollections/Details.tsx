import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header";
import { Detail } from "../../util/type";
import { TravelStore } from "../../redux-saga/reducer";
import { DetList1, DetList2, DetList3, DetList4 } from "./index";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Footer from "../footer";

interface ISDProps {
  placeDets: Detail[];
}

const useStyles = makeStyles({
  subtitle: {
    color: "#00535e",
    fontWeight: "bold",
    textAlign: "center",
    margin: "2rem auto 0.75rem auto"
  }
});
export const SubTitle = (props: { title: string }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.subtitle} variant="h3">
      {props.title}
    </Typography>
  );
};
const Details = ({ placeDets }: ISDProps) => {
  const { id } = useParams();
  const current = placeDets.find(item => `${item.id}` === id);
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
  placeDets: state.placeDets
});

export default connect(mapStateToPorps)(Details);
