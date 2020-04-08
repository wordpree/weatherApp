import React, { useEffect, Dispatch } from "react";
import { connect } from "react-redux";
import { TravelStore } from "../../redux-saga/reducer";
import { useParams } from "react-router-dom";
import {
  reqTriposoPoiAction,
  deleteTriposoPois,
} from "../../redux-saga/actions";
import { TravelActionType } from "../../redux-saga/actionType";
import { Container, makeStyles } from "@material-ui/core";
import { Omit } from "@material-ui/types";
import { LinkProps, Link } from "react-router-dom";
import { ITriposoPoi } from "../../util/type";
import { getStorageSearchPara } from "../../util/utils";
import { Title } from "../../components";
import ScrollToTop from "../ScrollToTop";
import { Header } from "../../components";
import { Footer } from "../../components";
import { DetList1, DetList2, DetList3, DetList4, DetListLeft } from "../detail";
import Loading from "../Loading";

interface IDProps {
  reqTriposoPoiAction(geo: string, tagLabel: string[]): void;
  deleteTriposoPois(): void;
  detail: ITriposoPoi[];
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

const TDetail = ({
  reqTriposoPoiAction,
  deleteTriposoPois,
  detail,
}: IDProps) => {
  const para = getStorageSearchPara();
  let tagLabel: string[];
  const classes = useStyles();
  const { tag } = useParams();
  switch (tag) {
    case "sightseeing":
      tagLabel = ["sightseeing"];
      break;
    case "do":
      tagLabel = ["do", "!shopping", "!swimming"];
      break;
    case "nightlife":
      tagLabel = ["nightlife"];
      break;
    default:
      tagLabel = [];
  }

  useEffect(() => {
    if (para.length && tagLabel.length) {
      reqTriposoPoiAction(para[2], tagLabel);
    }
    return () => {
      deleteTriposoPois();
    };
  }, []);

  //filter details without image and make sure first detail has large image
  const retDetail = detail.filter(
    (item) => item.images && item.images.length !== 0
  );
  const index = retDetail.findIndex(
    (item) => item.images[0].attribution.attribution_text !== "Facebook"
  );
  if (index !== -1) {
    const temp = retDetail[0];
    retDetail[0] = retDetail[index];
    retDetail[index] = temp;
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Container className={classes.container}>
        <Title text="Makde yourself submerged under the local feature" />
        <div className={classes.gridWrapper}>
          {retDetail && retDetail.length ? (
            <>
              <DetList1 detail={retDetail[0]} />
              <DetList2 detail={retDetail.slice(1, 4)} />
              <DetList3 detail={retDetail.slice(4, 7)} />
              <DetList4 detail={retDetail.slice(7, 9)} />
              <DetListLeft detail={retDetail.slice(9)} />
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
  detail: state.tPoisDetail,
});

const mapDispatchToProps = (dispatch: Dispatch<TravelActionType>) => ({
  reqTriposoPoiAction: (geo: string, tagLabel: string[]) =>
    dispatch(reqTriposoPoiAction(geo, tagLabel)),
  deleteTriposoPois: () => dispatch(deleteTriposoPois()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TDetail);
