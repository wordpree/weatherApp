import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    margin: "2.5rem auto 0.5rem",
    textAlign: "center",
    padding: "0.25rem"
  },
  typo: {
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem"
    }
  }
}));

interface IProps {
  text: string;
  css?: {};
}
const Title = ({ text, css }: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Typography className={classes.typo} variant="h3" style={{ ...css }}>
        {text}
      </Typography>
    </div>
  );
};

export default Title;
