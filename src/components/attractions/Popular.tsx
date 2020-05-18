import React, { useRef } from "react";
import Slider from "react-slick";
import { makeStyles, Typography, Fab, useMediaQuery } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "mdi-material-ui";
import { ITriposoPoi } from "../../util/type";
import { AttractionCard } from "./Card";

interface IPProps {
  data: ITriposoPoi[];
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2.5rem",
    marginBottom: "2rem",
    [theme.breakpoints.up(768)]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  titleWrapper: {},
  title: {
    letterSpacing: 4,
    color: "#028A8A",
    marginBottom: "0.75rem",
    borderBottom: "2px solid #028A8A",
    display: "inline-block",
    fontWeight: 600,
  },
  subTitle: {
    letterSpacing: 1.5,
  },
  nav: {
    display: "none",
    [theme.breakpoints.up(768)]: {
      flexShrink: 0,
      display: "block",
      "&>button:first-child": {
        marginRight: "1rem",
      },
    },
  },
  scroll: {
    [theme.breakpoints.down(768)]: {
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
    },
  },
  cardWrapper: {
    [theme.breakpoints.down(768)]: {
      display: "flex",
      overflow: "scroll",
      scrollSnapType: "x mandatory",
      flexFlow: "row nowrap",
      paddingBottom: "1rem",
    },
  },
}));

const Popular = ({ data }: IPProps) => {
  const classes = useStyles();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots: any) => <ul style={{ color: "#04BFBF" }}> {dots} </ul>,
    responsive: [
      {
        breakpoint: 1387,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 959,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const md = useMediaQuery("(min-width:768px)");
  const cardLists = data.map((item) => (
    <AttractionCard data={item} key={item.id} />
  ));
  const ref = useRef<Slider>(null);
  const handlePrevClick = () => {
    ref && ref.current && ref.current.slickPrev();
  };
  const handleNextClick = () => {
    ref && ref.current && ref.current.slickNext();
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.titleWrapper}>
          <Typography className={classes.title} variant="h4">
            Popular Destinations
          </Typography>
          <Typography className={classes.subTitle} variant="h6">
            Explore the stunning and fantastic splendrous on one more step
            forward!
          </Typography>
        </div>
        <div className={classes.nav}>
          <Fab onClick={handlePrevClick} color="primary" size="small">
            <ChevronLeft color="secondary" fontSize="large" />
          </Fab>
          <Fab onClick={handleNextClick} color="primary" size="small">
            <ChevronRight color="secondary" fontSize="large" />
          </Fab>
        </div>
      </div>
      <div className={classes.scroll}>
        {md ? (
          <Slider {...settings} ref={ref}>
            {cardLists}
          </Slider>
        ) : (
          <div className={classes.cardWrapper}>{cardLists}</div>
        )}
      </div>
    </>
  );
};

export default Popular;
