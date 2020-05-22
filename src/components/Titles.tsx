import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

interface ITProps {
  title: string;
  subTitle: string;
  style?: object;
}

const useStyles = makeStyles({
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
});

const Titles = ({ title, subTitle, style }: ITProps) => {
  const classes = useStyles();
  return (
    <div style={{ ...style }}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      <Typography className={classes.subTitle} variant="h6">
        {subTitle}
      </Typography>
    </div>
  );
};

export default Titles;
