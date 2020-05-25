import React from "react";
import { FormControl, InputLabel, Select, makeStyles } from "@material-ui/core";
import { Option } from "../../util/type";
import { isCity } from "../../util/utils";

interface IOProps {
  options: Option;
  option: string;
  init: string;
  handleChange(
    event: React.ChangeEvent<{ value: unknown; name?: string | undefined }>
  ): void;
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
    "&:hover fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: "#028a8a",
    },
  },
}));

const Options = ({ init, options, handleChange, option }: IOProps) => {
  const classes = useStyles();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={init}>{init}</InputLabel>
      <Select
        id={init}
        onChange={handleChange}
        value={option}
        native
        label={init}
        inputProps={{ name: init }}
      >
        <option aria-label="None" value="" />
        {options.map((item) => {
          if (isCity(item)) {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          } else {
            return (
              <option key={item.cuisine_id} value={item.cuisine_name}>
                {item.cuisine_name}
              </option>
            );
          }
        })}
      </Select>
    </FormControl>
  );
};

export default Options;
