import React from "react";
import Slider from "react-slick";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";
import PopularCard from "./Card";
import { SliderNav, Titles } from "../";

interface IPProps {
  data: ITriposoPoi[];
}

const useStyles = makeStyles((theme) => ({
  entry: {
    margin: "4rem auto",
  },
  wrapper: {
    marginTop: "2.5rem",
    marginBottom: "2rem",
    [theme.breakpoints.up(768)]: {
      display: "flex",
      justifyContent: "space-between",
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
        },
      },
    ],
  };
  let slider: Slider | null = null;
  const md = useMediaQuery("(min-width:768px)");
  const cardLists = data.map((item) => (
    <PopularCard data={item} key={item.id} />
  ));

  const handleSlider = (sliderRef: Slider | null) => (slider = sliderRef);
  const preClick = () => slider && slider.slickPrev();
  const nextClick = () => slider && slider.slickNext();
  return (
    <div className={classes.entry}>
      <div className={classes.wrapper}>
        <Titles
          title="Popular Destinations"
          subTitle="Explore the stunning and fantastic splendrous on one more step
            forward!"
        />
        <SliderNav prevClick={preClick} nextClick={nextClick} />
      </div>
      <div className={classes.scroll}>
        {md ? (
          <Slider {...settings} ref={(slider) => handleSlider(slider)}>
            {cardLists}
          </Slider>
        ) : (
          <div className={classes.cardWrapper}>{cardLists}</div>
        )}
      </div>
    </div>
  );
};

export default Popular;
