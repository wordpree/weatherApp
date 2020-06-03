import React, { useState } from "react";
import {
  makeStyles,
  List,
  ListItem,
  Collapse,
  ListItemText,
} from "@material-ui/core";
import { ChevronDown, ChevronUp } from "mdi-material-ui";

interface IEProps {
  label: string;
  children: React.ReactNode;
}

const useStyles = makeStyles({
  item: {
    borderTop: "1px solid #ddd",
    color: "#fff",
    fontSize: "0.75rem",
    fontWeight: 500,
  },
  expand: {
    paddingLeft: "1rem",
    "& ul>a": {
      color: "#fff",
    },
  },
  typo: {
    fontWeight: 500,
  },
});

const Expand = ({ label, children }: IEProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);
  const classes = useStyles();
  return (
    <>
      <ListItem button onClick={handleClick} className={classes.item}>
        <ListItemText
          primary={label}
          primaryTypographyProps={{ variant: "body2", className: classes.typo }}
        />
        {open ? <ChevronUp /> : <ChevronDown />}
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        className={classes.expand}
      >
        <List>{children}</List>
      </Collapse>
    </>
  );
};

export default Expand;
