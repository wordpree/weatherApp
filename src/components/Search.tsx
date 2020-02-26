import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Magnify } from "mdi-material-ui";
import Title from "./Title";

interface ITPP {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
  div: {
    padding: "0.5rem",
    margin: "0.25rem 0.25rem 1rem"
  },
  form: {
    textAlign: "center",
    margin: "0 auto"
  },
  textField: {
    width: "48%",
    letterSpacing: 1
  },
  input: {}
});

const Search = ({ handleSubmit, handleChange }: ITPP) => {
  const classes = useStyles();
  return (
    <>
      <Title text="Search & Fun" />
      <div className={classes.div}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            label="city, country"
            onChange={handleChange}
            className={classes.textField}
          />
          <IconButton type="submit">
            <Magnify />
          </IconButton>
        </form>
      </div>
    </>
  );
};

export default Search;
