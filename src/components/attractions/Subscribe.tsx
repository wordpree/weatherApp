import React from "react";
import { makeStyles, TextField, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  entry: {
    margin: "1.5rem auto",
    padding: "1.5rem",
    backgroundColor: "#028a8a",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    paddingBottom: "1.5rem",
    letterSpacing: 2,
    [theme.breakpoints.down(500)]: {
      letterSpacing: 1,
    },
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down(500)]: {
      flexDirection: "column",
    },
  },
  field: {
    marginBottom: "2rem",
    width: "95%",
    [theme.breakpoints.up(500)]: {
      width: "55%",
      maxWidth: 380,
      marginRight: "2rem",
      marginBottom: "inherit",
    },
  },
  input: {
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  btn: {
    color: "#fff",
    border: "2px solid #fff",
    borderRadius: 20,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
}));
const Subscribe = () => {
  const classes = useStyles();
  return (
    <div className={classes.entry}>
      <Typography variant="h5" className={classes.title}>
        Subscribe to get our new featured viewpoint among Australia
      </Typography>
      <form className={classes.form} autoComplete="off">
        <TextField
          InputProps={{ className: classes.input }}
          className={classes.field}
          color="primary"
          id="filled-basic"
          placeholder="Enter your email here"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.btn}
          color="primary"
          size="large"
        >
          Subscribe Now
        </Button>
      </form>
    </div>
  );
};

export default Subscribe;
