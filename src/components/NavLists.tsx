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
    navLists: {
      display: "flex",
      padding: 0,
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row"
      }
    },
    btnRoot: {
      border: "none",
      margin: "0 auto"
    },
    logo: {
      border: "1px solid #C0D7BB",
      padding: "0.25rem 1rem",
      color: "#C0D7BB"
    },
    mobileNav: {
      marginTop: "0.75rem"
    },
    desktopNav: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "flex-end"
      }
    },
    typo: {
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
    { Icon: Airballoon, label: "Travel", to: "/travel" },
    { Icon: Camera, label: "Photos", to: "/photos" },
    { Icon: Newspaper, label: "News", to: "/news" }
  ];
  const routeLink = React.forwardRef<any, Omit<LinkProps, "to">>(
    (props, ref) => <Link to="/" {...props} ref={ref} />
  );
  return (
    <>
      <List className={classes.navLists}>
        <ListItem>
          <Button
            component={routeLink}
            variant="outlined"
            startIcon={<TennisBall />}
            classes={{ label: classes.logo, root: classes.btnRoot }}
          >
            <Typography variant="subtitle1" className={classes.typo}>
              Travle & go
            </Typography>
          </Button>
        </ListItem>
        <List className={desktop ? classes.desktopNav : classes.mobileNav}>
          {iconLists.map(({ Icon, label, to }) => (
            <NavList
              icon={<Icon style={{ color: "#C0D7BB" }} />}
              key={label}
              label={label}
              to={to}
              mobile={mobile}
            />
          ))}
        </List>
      </List>
    </>
  );
};

export default NavLists;
