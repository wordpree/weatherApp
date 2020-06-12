import React from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
    transition: "all 0.3s ease-in-out",
    borderRadius: 4,
    "&:hover": {
      color: "#fff",
      backgroundColor: "#028a8a",
    },
  },
}));

const NavList = ({ to, ...props }: INavProps) => {
  const classes = useStyle();
  const routeLink = React.forwardRef<LinkProps, any>((props, ref) => (
    <NavLink strict exact to={to} {...props} ref={ref} />
  ));
  return (
    <li className={classes.li}>
      <ListItem button component={routeLink} to={to} className={classes.item}>
        <ListItemText primary={props.label} className={classes.listText} />
      </ListItem>
    </li>
  );
};

export default NavList;
