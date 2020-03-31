import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

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
