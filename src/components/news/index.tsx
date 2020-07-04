import React from "react";
import { INData } from "../../util/type";
import { connect } from "react-redux";
import { TravelStore } from "../../redux-saga/reducer";
import { Container, makeStyles, Divider } from "@material-ui/core";
import { Loading, ScrollToTop, Titles } from "../";

import {
  NewsPartOne,
  NewsPartTwo,
  NewsPartThree,
  NewsPartFour,
} from "./newsSections";

export interface NewsProps {
  news: INData[];
}

const useStyles = makeStyles({
  textPrimary: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#FFCC0E",
    },
    letterSpacing: 1,
  },
  credit: {
    textAlign: "right",
    color: "rgba(0,0,0,0.45)",
  },
});

export const TITLE_LENGTH = 30;
export const CONTENT_LENGTH_SM = 90;
export const CONTENT_LENGTH_LG = 170;

const Index = ({ news }: NewsProps) => {
  const classes = useStyles();
  const partOne = news.slice(0, 2) || [];
  const partTwo = news.slice(2, 6) || [];
  const partThree = news.slice(6, 9) || [];
  const partFour = news.slice(9, 25) || [];
  return news.length === 0 ? (
    <Loading value={100} />
  ) : (
    <>
      <ScrollToTop />
      <Container>
        <Titles
          title="Headline news from the locals"
          subTitle=""
          style={{ marginTop: "3rem" }}
        />
        <NewsPartOne news={partOne} />
        <NewsPartTwo news={partTwo} />
        <NewsPartThree news={partThree} />
        <Divider />
        <NewsPartFour news={partFour} />
        <div className={classes.credit}>
          <a
            className={classes.textPrimary}
            href="https://newsapi.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powed by newsapi
          </a>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = (state: TravelStore) => ({
  news: state.news,
});
export default connect(mapStateToProps)(Index);
