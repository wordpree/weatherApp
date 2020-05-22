import React from "react";
import { makeStyles } from "@material-ui/core";

interface IEDProps {
  children: React.ReactNode;
}

const useStyles = makeStyles({
  entry: {
    margin: "4rem auto",
  },
});

const EntryDiv = ({ children }: IEDProps) => {
  const classes = useStyles();
  return <div className={classes.entry}>{children}</div>;
};

export default EntryDiv;
