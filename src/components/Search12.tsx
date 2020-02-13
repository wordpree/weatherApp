import React, { useState, useEffect } from "react";
import { InputBase, Paper, IconButton, Container } from "@material-ui/core";
import { Magnify } from "mdi-material-ui";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  createStyles({
    search: {
      margin: "auto 0.5rem",
      padding: "1.5rem 0"
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

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

interface ISearchProps {
  setLocation: Dispatch<SetStateAction<string>>;
}

const Search12 = ({ setLocation }: ISearchProps) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("Brisbane, Australia");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    function handleEnter(event: KeyboardEvent) {
      if (event.keyCode === 13) {
        setLocation(inputValue);
      }
    }
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [inputValue, setLocation]);

  return (
    <section className={classes.search}>
      <Container maxWidth="sm">
        <Paper className={classes.paper}>
          <InputBase
            placeholder="City, Country"
            fullWidth
            onChange={handleInput}
            value={inputValue}
          />
          <IconButton className={classes.iconButton} aria-label="search">
            <Magnify />
          </IconButton>
        </Paper>
      </Container>
    </section>
  );
};

export default Search12;
