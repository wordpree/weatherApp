import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";
import {
  htmlSanitizer,
  getImgWithSize,
  secureProtocol,
} from "../../util/utils";

interface ICICProps {
  data: ITriposoPoi;
}

const useStyles = makeStyles((theme) => ({
  cityWrapper: {
    flexDirection: "column",
    [theme.breakpoints.up(768)]: {
      flexDirection: "row",
    },
    display: "flex",
  },
  content: {
    padding: "0.25rem",
    [theme.breakpoints.up(768)]: {
      padding: "0 2rem",
    },
    [theme.breakpoints.up(960)]: {
      padding: "2rem",
      minHeight: 325,
    },

    "& >h5": {
      letterSpacing: 1,
      color: "#028a8a",
    },
  },
  paper: {
    paddingTop: "66%",
    width: "100%",
    [theme.breakpoints.up(768)]: {
      flex: "1 0 40%",
      marginRight: "auto",
      maxHeight: 360,
      paddingTop: "inherit",
      width: "inherit",
    },
  },
  body1: {
    letterSpacing: 0.5,
    padding: "0.5rem 0",
  },
}));

const CityIntroCard = ({ data }: ICICProps) => {
  const getMaxContentByData = (data: ITriposoPoi) => {
    const MAX_LENGTH = 550;
    const MIN_LENGTH = 160;
    let max = htmlSanitizer(data.content.sections[0].body);
    let min = data.intro;
    max = max.length > MAX_LENGTH ? max.substring(0, MAX_LENGTH) + "..." : max;
    min = min.length > MIN_LENGTH ? min.substring(0, MIN_LENGTH) + "..." : min;
    if (min.length > max.length) {
      [max, min] = [min, max];
    }
    return [max, min];
  };

  const classes = useStyles();
  const [max, min] = getMaxContentByData(data);
  const imageData = getImgWithSize(data);
  const image = secureProtocol(imageData.sizes.medium.url);

  return (
    <div className={classes.cityWrapper}>
      <Paper
        elevation={3}
        style={{
          background: `center/cover no-repeat #808080 url(${image})`,
        }}
        className={classes.paper}
      />
      <div className={classes.content}>
        <Typography variant="h5">{data.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {min}
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          {max}
        </Typography>
      </div>
    </div>
  );
};

export default CityIntroCard;
