import React from "react";
import NavList from "./NavList";
import { Link, LinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import { List, Theme, Typography, Button, ListItem } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Home,
  Camera,
  Airballoon,
  Newspaper,
  TennisBall
} from "mdi-material-ui";

interface INavListsProps {
  mobile?: boolean;
  desktop?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    li: {
      listStyle: "none"
    },
    btnRoot: {
      border: "none",
      margin: "0 auto"
    },
    logo: {
      padding: "0.25rem 1rem",
      color: "#01B3A7"
    },
    mobileNav: {
      marginTop: "0.75rem",
      color: "#ddd"
    },
    desktopNav: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        padding: "0.5rem 1rem",
        display: "flex",
        "&>li:first-child": {
          backgroundColor: "rgb(1, 179, 167)",
          color: "#ccc"
        }
      }
    },
    typo: {
      fontWeight: "bold",
      fontSize: "0.85em",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2em"
      }
    }
  })
);

const NavLists = ({ mobile, desktop }: INavListsProps) => {
  const classes = useStyles();
  const iconLists = [
    { Icon: Home, label: "Home", to: "/" },
    { Icon: Airballoon, label: "Restaurant", to: "/restaurant" },
    { Icon: Camera, label: "Photos", to: "/photos" },
    { Icon: Newspaper, label: "News", to: "/news" }
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
          startIcon={<TennisBall />}
          classes={{ label: classes.logo, root: classes.btnRoot }}
        >
          <Typography variant="h6" className={classes.typo}>
            Travellie & go
          </Typography>
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
