import React, { useState } from "react";
import {
  InputAdornment,
  makeStyles,
  SvgIconProps,
  TextField,
  IconButton,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

interface InputProps {
  label: string;
  icon?: React.ReactElement<SvgIconProps>;
  id: string;
  helper?: string;
  disableUnderline: boolean;
}

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    letterSpacing: 1.44,
    color: "#028A8A",
    paddingBottom: "1rem",
    paddingLeft: "0.25rem",
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
  },
  container: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "column",
    maxWidth: 200,
    [theme.breakpoints.down(768)]: {
      width: "100%",
      maxWidth: "inherit",
    },
  },
  root: {
    "&>button": {
      color: "#028A8A",
    },
  },
  textField: {
    boxShadow: "0px 4px 12px #0000004F",
    border: "1px solid #707070",
    [theme.breakpoints.down(768)]: {
      border: "none",
      boxShadow: "none",
    },
    borderRadius: 15,
    padding: "0.5rem 0.25rem",
    "&>div": {
      fontSize: "0.9rem",
      color: "#028A8A",
      fontWeight: 500,
      paddingLeft: "0.75rem",
    },
  },
}));

export const FormDate = ({ label, id, disableUnderline }: InputProps) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const handleDate = (date: Date | null) => setDate(date);
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.container}>
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
        <KeyboardDatePicker
          InputAdornmentProps={{ classes: { root: classes.root } }}
          className={classes.textField}
          InputProps={{ disableUnderline }}
          onChange={handleDate}
          value={date}
          disablePast
          disableToolbar
          inputVariant="standard"
          id={id}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};

export const FormInput = ({
  label,
  icon,
  id,
  helper,
  disableUnderline,
}: InputProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <TextField
        className={classes.textField}
        placeholder={helper}
        id={id}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary">{icon}</IconButton>
            </InputAdornment>
          ),
          disableUnderline,
        }}
      />
    </div>
  );
};
