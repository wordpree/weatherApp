import React from "react";
import { IconButton, TextField, Divider, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Magnify } from "mdi-material-ui";

interface ITPP {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
  div: {
    padding: "0.5rem"
  },
  form: {
    textAlign: "center",
    margin: "0 auto"
  },
  input: {
    width: "48%"
  }
});

const Search = ({ handleSubmit, handleChange }: ITPP) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="city, country"
          onChange={handleChange}
          className={classes.input}
        />
        <IconButton type="submit">
          <Magnify />
        </IconButton>
      </form>
    </div>
  );
};

export default Search;
