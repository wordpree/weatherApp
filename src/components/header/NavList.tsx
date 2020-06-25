import React from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { ListItem, ListItemText, Theme } from "@material-ui/core";

interface INavProps {
  label?: string;
  to?: string;
}

const useStyle = makeStyles((theme: Theme) => ({
  item: {},
  listText: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block",
      padding: "0.1rem 0.75rem",
    },
  },
  li: {
    borderRadius: 4,
  },
}));

const NavList = ({ to, ...props }: INavProps) => {
  const classes = useStyle();
  const routeLink = React.forwardRef<LinkProps, any>((props, ref) => (
    <NavLink strict exact to={to} {...props} ref={ref} />
  ));
  return (
    <motion.li
      className={classes.li}
      whileHover={{
        color: "#fff",
        backgroundColor: "#028a8a",
        scale: 1.05,
        textShadow: "0 0 4px #fff",
      }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <ListItem button component={routeLink} to={to} className={classes.item}>
        <ListItemText primary={props.label} className={classes.listText} />
      </ListItem>
    </motion.li>
  );
};

export default NavList;
