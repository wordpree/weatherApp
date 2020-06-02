import React from "react";
import { Fab, makeStyles } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "mdi-material-ui";

interface ISProps {
  nextClick(): void;
  prevClick(): void;
}

const useStyles = makeStyles((theme) => ({
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
  fab1: {
    backgroundColor: "#fff",
    "&:hover $icon1 ": {
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#028a8a",
    },
  },
  icon1: {
    color: "#028a8a",
  },
  icon2: {
    color: "#fff",
  },
}));

const SliderNav = ({ prevClick, nextClick }: ISProps) => {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <Fab onClick={prevClick} size="small" className={classes.fab1}>
        <ChevronLeft fontSize="large" className={classes.icon1} />
      </Fab>
      <Fab onClick={nextClick} color="primary" size="small">
        <ChevronRight className={classes.icon2} fontSize="large" />
      </Fab>
    </div>
  );
};
export default SliderNav;

/**  customized react-slick arrow**/
export const Arrow = (Component: typeof ChevronLeft) => (props: any) => {
  const { onClick, arrowStyle } = props;
  return (
    <div onClick={onClick} style={{ ...arrowStyle }}>
      <Fab color="primary" size="small">
        <Component color="secondary" fontSize="large" />
      </Fab>
    </div>
  );
};
