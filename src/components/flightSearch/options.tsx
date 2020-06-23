import React from "react";
import { AirplaneLanding, AirplaneTakeoff } from "mdi-material-ui";
import { makeStyles } from "@material-ui/core";
import { FrMotionButton } from "../";
import { FormDate, FormInput } from "./type";

interface IOProps {
  disableUnderline: boolean;
}

const useStyles = makeStyles((theme) => ({
  form: {
    backgroundColor: "#fff",
    padding: "1.25rem 0.75rem",
    [theme.breakpoints.up(1488)]: {
      padding: "2rem 0.75rem",
    },
    borderRadius: 20,
    borderTopLeftRadius: 0,
    [theme.breakpoints.down(768)]: {
      borderTopRightRadius: 0,
      flexDirection: "column",
      padding: "0.5rem",
    },
    boxShadow: "0px 4px 12px #0000004F",
    display: "flex",
    justifyContent: "space-around",
  },
  formAction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexGrow: 1,
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
    },
  },
  button: {
    flexGrow: 1,
    maxWidth: 150,
    backgroundColor: "#028a8a",
    color: "#fff",
    padding: "0.5rem 2rem",
    borderRadius: 15,
    marginLeft: "2rem",
    letterSpacing: 1.53,
    fontSize: "1.1rem",
    alignSelf: "flex-end",
    [theme.breakpoints.down(768)]: {
      alignSelf: "center",
      marginTop: "0.5rem",
    },
    "&:hover": {
      backgroundColor: "#028A8A",
    },
  },
}));

export const RoundTrip = ({ disableUnderline }: IOProps) => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <div className={classes.formAction}>
        <FormInput
          label="From"
          icon={<AirplaneTakeoff />}
          id="flight-start"
          helper="From where"
          disableUnderline={disableUnderline}
        />
        <FormInput
          label="To"
          icon={<AirplaneLanding />}
          id="flight-finish"
          helper="Where to"
          disableUnderline={disableUnderline}
        />
        <FormDate
          id="date-start"
          label="Depart"
          disableUnderline={disableUnderline}
        />
        <FormDate
          id="date-finish"
          label="Return"
          disableUnderline={disableUnderline}
        />
      </div>
      <FrMotionButton
        type="submit"
        className={classes.button}
        variant="contained"
      >
        Search
      </FrMotionButton>
    </form>
  );
};

export const OneWay = ({ disableUnderline }: IOProps) => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <div className={classes.formAction}>
        <FormInput
          label="From"
          icon={<AirplaneTakeoff />}
          id="flight-start"
          helper="From where"
          disableUnderline={disableUnderline}
        />
        <FormInput
          label="To"
          icon={<AirplaneLanding />}
          id="flight-finish"
          helper="Where to"
          disableUnderline={disableUnderline}
        />
        <FormDate
          id="date-start"
          label="Depart"
          disableUnderline={disableUnderline}
        />
      </div>
      <div style={{ flexGrow: 1 }} />
      <FrMotionButton
        type="submit"
        className={classes.button}
        variant="contained"
      >
        Search
      </FrMotionButton>
    </form>
  );
};

export const MultiCity = ({ disableUnderline }: IOProps) => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <div className={classes.formAction}>
        <FormInput
          label="From"
          icon={<AirplaneTakeoff />}
          id="flight-start"
          helper="From:city"
          disableUnderline={disableUnderline}
        />
        <FormInput
          label="To"
          icon={<AirplaneLanding />}
          id="flight-finish"
          helper="to:city"
          disableUnderline={disableUnderline}
        />
        <FormDate
          id="date-start"
          label="Depart"
          disableUnderline={disableUnderline}
        />
      </div>
      <div style={{ flexGrow: 1 }} />
      <FrMotionButton
        type="submit"
        className={classes.button}
        variant="contained"
      >
        Search
      </FrMotionButton>
    </form>
  );
};
