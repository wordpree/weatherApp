import React, { useState, useEffect } from "react";
import { InputBase, Paper, IconButton, Container } from "@material-ui/core";
import { Magnify } from "mdi-material-ui";
import { makeStyles, createStyles } from "@material-ui/styles";
import weatherApiCall from "../util/weatherApiCall";

const useStyles = makeStyles(
  createStyles({
    search: {
      margin: "3rem 0.5rem 1.5rem 0.5rem"
    },
    paper: {
      display: "flex",
      alignItems: "center",
      maxWidth: 500,
      padding: "3px 6px"
    },
    iconButton: { padding: 4 }
  })
);
const Search = () => {
  const classes = useStyles();
  const [location, setLocation] = useState("Brisbane, Australia");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  useEffect(() => {
    function handleEnter(event: KeyboardEvent) {
      if (event.keyCode === 13) {
        weatherApiCall(location);
      }
    }
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [location]);

  return (
    <section className={classes.search}>
      <Container maxWidth="sm">
        <Paper className={classes.paper}>
          <InputBase
            placeholder="City, Country"
            fullWidth
            onChange={handleInput}
            value={location}
          />
          <IconButton className={classes.iconButton} aria-label="search">
            <Magnify />
          </IconButton>
        </Paper>
      </Container>
    </section>
  );
};

export default Search;
