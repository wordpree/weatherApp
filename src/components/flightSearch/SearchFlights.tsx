import React, { useState } from "react";
import { makeStyles, Tabs, Tab, useMediaQuery } from "@material-ui/core";
import { motion } from "framer-motion";

import { RoundTrip, OneWay, MultiCity } from "./options";
import TabPanel from "./TabPanel";

const useStyles = makeStyles((theme) => ({
  indicator: {
    display: "none",
  },
  root: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: "1rem 0.25rem ",
    [theme.breakpoints.down(1024)]: {
      padding: "0.75rem 0.25rem ",
    },
    backgroundColor: "#ffffff64",
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: 1.44,
    color: "#fff",
    borderRight: "1px solid #707070",
    [theme.breakpoints.down(768)]: {
      padding: 0,
      fontSize: "0.8rem",
    },
  },
  selected: {
    backgroundColor: "#fff",
    color: "#028A8A",
    fontWeight: 600,
    fontSize: "1rem",
    borderBottom: "none",
    [theme.breakpoints.down(768)]: {
      fontSize: "0.8rem",
    },
  },
}));

const SearchFlights = () => {
  const md = useMediaQuery("(min-width:768px)");
  const sm = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const searchVariant = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.5,
        duration: 1.5,
        mass: 0.7,
      },
    },
  };
  const handleChange = (e: React.ChangeEvent<{}>, value: number) =>
    setValue(value);
  return (
    <motion.div initial="hidden" animate="visible" variants={searchVariant}>
      <div>
        <Tabs
          variant={sm ? "standard" : "fullWidth"}
          onChange={handleChange}
          value={value}
          classes={{ indicator: classes.indicator }}
        >
          <Tab
            label="One Way"
            classes={{ selected: classes.selected, root: classes.root }}
          />
          <Tab
            label="Round Trip"
            classes={{ selected: classes.selected, root: classes.root }}
          />
          <Tab
            label="Multi-city"
            classes={{ selected: classes.selected, root: classes.root }}
          />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <OneWay disableUnderline={md} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RoundTrip disableUnderline={md} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MultiCity disableUnderline={md} />
      </TabPanel>
    </motion.div>
  );
};

export default SearchFlights;
