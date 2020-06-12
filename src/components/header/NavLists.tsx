import React from "react";
import { List, Theme, Button } from "@material-ui/core";
import { Link, LinkProps } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Omit } from "@material-ui/types";

import logo from "../../assets/logo/logo@2x.png";
import NavList from "./NavList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    li: {
      listStyle: "none",
    },
    logo: {
      maxWidth: 140,
      height: "auto",
      [theme.breakpoints.up(960)]: {
        maxWidth: 160,
      },
    },
    btnRoot: {
      border: "none",
      margin: "0 auto",
    },
    mobileNav: {
      marginTop: "0.75rem",
      color: "#ddd",
    },
    desktopNav: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        padding: "0.5rem 1rem",
        display: "flex",
      },
    },
    typo: {
      fontWeight: "bold",
      fontSize: "0.85em",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2em",
      },
    },
  })
);

const NavLists = () => {
  const classes = useStyles();
  const iconLists = [
    { label: "Home", to: "/" },
    { label: "Explore", to: "/explore" },
    { label: "Hotels", to: "/hotels" },
    { label: "Flights", to: "/flights" },
    { label: "Blog", to: "/blog" },
  ];
  const routeLink = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => <Link to="/" {...props} ref={ref} />
  );
  return (
    <>
      <li className={classes.li}>
        <Button
          component={routeLink}
          variant="outlined"
          classes={{ label: classes.logo, root: classes.btnRoot }}
        >
          <div className={classes.typo}>
            <img src={logo} alt="logo" className={classes.logo} />
          </div>
        </Button>
      </li>
      <List className={classes.desktopNav}>
        {iconLists.map(({ label, to }) => (
          <NavList key={label} label={label} to={to} />
        ))}
      </List>
    </>
  );
};

export default NavLists;
