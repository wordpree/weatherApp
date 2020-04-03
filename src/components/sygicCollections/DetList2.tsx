import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
  Fade
} from "@material-ui/core";
import { ISygicPlace } from "../../util/type";
import SubTitle from "../SubTitle";

interface ISCLProps {
  place: ISygicPlace[];
}

const useStyles = makeStyles(theme => ({
  entry: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(768)]: {
      overflowX: "scroll",
      scrollSnapType: "x mandatory",
      scrollbarWidth: "none" /* Firefox */,
      msOverflowStyle: "none" /* ie 10+*/,
      "&::webkitScrollbar": {
        /* webkit */
        width: 0,
        height: 0
      }
    }
  },
  cardWrapper: {
    maxWidth: "32.5%",
    [theme.breakpoints.down(768)]: {
      scrollSnapAlign: "start",
      minWidth: "75%",
      paddingRight: 12,
      paddingLeft: 0
    }
  },
  cardAct: {
    transition: "all 0.6s ease-in-out 0.1s",
    position: "relative",
    "&:hover": {
      transform: "scale(1.08)"
    }
  },
  media: {
    paddingTop: "66%"
  },
  content: {
    padding: "6px 2px",
    marginTop: "0.5rem",
    letterSpacing: 1.2
  },
  title: {
    color: "#00535e",
    fontWeight: "bold"
  },
  des: {}
}));

const DetList2 = ({ place }: ISCLProps) => {
  const classes = useStyles();
  if (place.length === 0) return <div />;
  return (
    <>
      <SubTitle title="Enjoy where you are starting" />
      <div className={classes.entry}>
        {place.map(item => {
          const img = item.main_media.media[0].url_template.replace(
            "{size}",
            "750x500"
          );
          return (
            <div key={item.id} className={classes.cardWrapper}>
              <Fade in={Boolean(place.length)}>
                <Card>
                  <CardActionArea className={classes.cardAct}>
                    <CardMedia image={img} className={classes.media} />
                  </CardActionArea>
                </Card>
              </Fade>
              <div className={classes.content}>
                <Typography variant="h5" className={classes.title}>
                  {item.name}
                </Typography>
                <Typography variant="body1" className={classes.des}>
                  {item.perex}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetList2;
