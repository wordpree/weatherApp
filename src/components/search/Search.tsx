import React, { useState } from "react";
import {
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Container,
  Grow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Magnify } from "mdi-material-ui";
import { IGoogleAutoData } from "../../util/type";
import Title from "../Title";

interface ISProps {
  submitAction(address: string): void;
  inputAction(input: string): void;
  clearAutoCompleteAction(): void;
  predictions: Array<IGoogleAutoData>;
}

const useStyles = makeStyles({
  div: {
    padding: "0.5rem",
    margin: "1rem auto",
    width: "55%",
  },
  form: {
    textAlign: "center",
    margin: "0 auto",
  },
  textField: {
    letterSpacing: 1,
    width: "86%",
  },
  list: {
    maxHeight: 325,
    overflow: "auto",
  },
  item: {
    "&:hover": {
      background: "#777",
      color: "#eee",
    },
  },
});

const Search = ({
  submitAction,
  inputAction,
  clearAutoCompleteAction,
  predictions,
}: ISProps) => {
  const chooseInit = { description: "", place_id: "" };
  const [choose, setChoose] = useState(chooseInit);
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length !== 0) {
      inputAction(e.target.value);
    } else {
      clearAutoCompleteAction();
    }
    setChoose({ ...choose, description: e.target.value });
  };

  const handleClick = ({ description, place_id }: IGoogleAutoData) => {
    setChoose({ description, place_id });
    clearAutoCompleteAction();
  };

  return (
    <Container>
      <Title text="Search & Fun" />

      <div className={classes.div}>
        <form
          onSubmit={(e) => {
            submitAction(choose.place_id);
            setChoose(chooseInit);
            e.preventDefault();
          }}
          className={classes.form}
        >
          <TextField
            value={choose.description}
            label="where to be..."
            onChange={handleChange}
            className={classes.textField}
          />

          <IconButton
            type="submit"
            onClick={() => {
              submitAction(choose.place_id);
              setChoose(chooseInit);
            }}
          >
            <Magnify />
          </IconButton>
        </form>
        <Grow
          in={Boolean(predictions.length)}
          timeout={{ enter: 400, exit: 350 }}
        >
          {
            <List className={classes.list}>
              {predictions &&
                predictions.map((place) => (
                  <Paper key={place.id} elevation={3}>
                    <ListItem
                      button
                      className={classes.item}
                      onClick={() => handleClick(place)}
                    >
                      <ListItemText primary={place.description} />
                    </ListItem>
                    <Divider />
                  </Paper>
                ))}
            </List>
          }
        </Grow>
      </div>
    </Container>
  );
};

export default Search;
