import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Theme
} from "@material-ui/core";

interface INavProps {
  icon: React.ReactElement;
  label?: string;
  to?: string;
  mobile?: boolean | undefined;
}

const useStyle = makeStyles((theme: Theme) => ({
  listText: {
    color: "#C0D7BB",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-block"
    }
  },
  li: {
    padding: "0 0.75rem",
    maxWidth: "85%",
    margin: "0 auto"
  }
}));

const NavList = ({ to, mobile, ...props }: INavProps) => {
  const classes = useStyle();
  const routeLink = React.forwardRef<LinkProps, any>((props, ref) => (
    <Link to={to} {...props} ref={ref} />
  ));
  return (
    <li className={classes.li}>
      <ListItem button component={routeLink} to={to}>
        {mobile && <ListItemIcon>{props.icon}</ListItemIcon>}
        <ListItemText primary={props.label} className={classes.listText} />
      </ListItem>
      {mobile && <Divider style={{ backgroundColor: "#fff" }} />}
    </li>
  );
};

export default NavList;
