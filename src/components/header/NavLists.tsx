import React from "react";
import { List, Theme, Button } from "@material-ui/core";
import { Link, LinkProps } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Home, Camera, Airballoon, Newspaper } from "mdi-material-ui";
import { Omit } from "@material-ui/types";

import logo from "../../assets/logo/logo@2x.png";
import NavList from "./NavList";

interface INavListsProps {
  mobile?: boolean;
  desktop?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    li: {
      listStyle: "none",
    },
    logo: {
      maxWidth: 160,
      height: "auto",
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

const NavLists = ({ mobile, desktop }: INavListsProps) => {
  const classes = useStyles();
  const iconLists = [
    { Icon: Home, label: "Home", to: "/" },
    { Icon: Airballoon, label: "Explore", to: "/explore" },
    { Icon: Camera, label: "Hotels", to: "/hotels" },
    { Icon: Camera, label: "Flights", to: "/flights" },
    { Icon: Newspaper, label: "Blog", to: "/blog" },
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
      <List className={desktop ? classes.desktopNav : classes.mobileNav}>
        {iconLists.map(({ Icon, label, to }) => (
          <NavList
            icon={<Icon style={{ color: "#ccc" }} />}
            key={label}
            label={label}
            to={to}
            mobile={mobile}
          />
        ))}
      </List>
    </>
  );
};

export default NavLists;
