import React, { useEffect, Dispatch } from "react";
import { connect } from "react-redux";
import { TravelStore } from "../../redux-saga/reducer";
import { useParams } from "react-router-dom";
import { reqZomatoDetailAction } from "../../redux-saga/actions";
import { TravelActionType } from "../../redux-saga/actionType";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { Omit } from "@material-ui/types";
import { LinkProps, Link } from "react-router-dom";
import { IZomatoDetailRes } from "../../util/type";
import { Title } from "../../components";
import ScrollToTop from "../ScrollToTop";
import { Header } from "../../components";
import { Footer } from "../../components";
import DetListLeft from "./DetListLeft";
import { DetList1, DetList2, DetList3, DetList4 } from "../detail";
import Loading from "../Loading";

interface IDProps {
  reqZomatoDetailAction(cityId: number, colId: string): void;
  cityId: number;
  detail: IZomatoDetailRes;
}

const useStyles = makeStyles({
  container: {
    margin: "4rem auto 0",
    textAlign: "center",
  },
  gridWrapper: {
    margin: "0 auto",
    textAlign: "center",
  },
  btn: {
    transition: "all 0.4s ease-in-out",
    margin: "2rem  1rem auto",
    color: "#ddd",
    fontWeight: "bold",
    background: "#00535e",
    "&:hover": {
      background: "#003138",
      color: "#ddd",
      borderColor: "#00535e",
    },
  },
});

const ZDetail = ({ cityId, reqZomatoDetailAction, detail }: IDProps) => {
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined && cityId !== null) {
      reqZomatoDetailAction(cityId, id);
    }
  }, [cityId, id]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Container className={classes.container}>
        <Title text="Enjoy the local cuisines of your selection" />
        <div className={classes.gridWrapper}>
          {detail && detail.length ? (
            <>
              <DetList1 detail={detail[0]} />
              <DetList2 detail={detail.slice(1, 4)} />
              <DetList3 detail={detail.slice(4, 7)} />
              <DetList4 detail={detail.slice(7, 9)} />
              <DetListLeft detail={detail.slice(9)} />
            </>
          ) : (
            <Loading value={100} />
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: TravelStore) => ({
  cityId: state.zId,
  detail: state.zColDetail,
});

const mapDispatchToProps = (dispatch: Dispatch<TravelActionType>) => ({
  reqZomatoDetailAction: (cityId: number, colId: string) =>
    dispatch(reqZomatoDetailAction(cityId, colId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ZDetail);
