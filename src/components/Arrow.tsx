import React from "react";
import { ChevronLeft, ChevronRight } from "mdi-material-ui";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  fabNext: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(50%,-50%)"
  },
  fabPrev: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1
  }
});

export function NextArrow(props: any) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <Fab className={classes.fabNext} onClick={onClick} size="medium">
      <ChevronRight />
    </Fab>
  );
}

export function PrevArrow(props: any) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <Fab className={classes.fabPrev} onClick={onClick} size="medium">
      <ChevronLeft />
    </Fab>
  );
}
