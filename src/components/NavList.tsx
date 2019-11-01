import React from "react";
import { Link, LinkProps } from "react-router-dom";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from "@material-ui/core";

interface INavProps {
  icon: React.ReactElement;
  label?: string;
  to?: string;
}
const NavList = ({ to, ...props }: INavProps) => {
  //ref type need fixed later
  const routeLink = React.forwardRef<LinkProps, any>((props, ref) => (
    <Link to={to} {...props} ref={ref} />
  ));
  return (
    <>
      <ListItem button component={routeLink} to={to}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.label} style={{ color: "#2D3047" }} />
      </ListItem>
      <Divider />
    </>
  );
};

export default NavList;
