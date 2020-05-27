import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";

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
  const classes = useStyles();
  let max = data.content.sections[0].body.replace(/<.*?>/gi, "");
  max = max.length > 550 ? max.substring(0, 550) + "..." : max;
  let min = data.intro;
  min = min.length > 160 ? min.substring(0, 160) + "..." : min;

  if (min.length > max.length) {
    [max, min] = [min, max];
  }
  const ret = data.images.find(
    (item) => item.sizes.medium.width > 550 && item.sizes.medium.height > 400
  );
  const image = ret ? ret.sizes.medium.url : data.images[0].sizes.medium.url;

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
