import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    margin: "2.5rem auto",
    textAlign: "center",
    padding: "1rem 0.25rem"
  },
  typo: {
    letterSpacing: "0.09em",
    textTransform: "uppercase"
  }
});

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
