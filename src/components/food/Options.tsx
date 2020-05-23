import React, { useState } from "react";
import { ITriposoPoi } from "../../util/type";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

type City = Pick<ITriposoPoi, "coordinates" | "name">;
type Cusine = { cuisine_id: number; cuisine_name: string };
interface IOProps {
  option: (City | Cusine)[];
  init: string;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginBottom: "1rem",
    [theme.breakpoints.up(768)]: {
      marginBottom: "inherit",
      flex: "1 0 30%",
      maxWidth: 270,
      width: "inherit",
      marginRight: "1.5rem",
    },
  },
}));

function isCity(input: City | Cusine): input is City {
  return (input as City).coordinates !== undefined;
}

const Options = ({ option, init }: IOProps) => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const handleChange = (
    event: React.ChangeEvent<{ value: string | unknown }>
  ) => setCity(event.target.value as typeof city);
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={init}>{init}</InputLabel>
      <Select id={init} onChange={handleChange} value={city} label={init}>
        <option disabled value="">
          {init}
        </option>
        {option.map((item) => {
          if (isCity(item)) {
            return (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            );
          } else {
            return (
              <MenuItem key={item.cuisine_id} value={item.cuisine_name}>
                {item.cuisine_name}
              </MenuItem>
            );
          }
        })}
      </Select>
    </FormControl>
  );
};

export default Options;
