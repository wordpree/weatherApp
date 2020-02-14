import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    margin: "2.5rem auto 0.25rem auto",
    textAlign: "center",
    padding: "1rem 0.25rem"
  }
});

const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Typography variant="h5">What is your dreaming destination ?</Typography>
    </div>
  );
};

export default Title;
