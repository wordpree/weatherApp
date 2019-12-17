import React, { useState } from "react";
import NavLists from "./NavLists";
import {
  AppBar,
  Drawer,
  Fab,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Plus, CloseBox, ReorderHorizontal } from "mdi-material-ui";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: "#363537"
    },
    mDrawer: {
      backgroundColor: "#85BDA6"
    },
    mobileNav: {
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    mobileLists: {
      width: "80vw"
    },
    icon: {
      color: "#858585"
    },
    desktopNav: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "space-between"
      }
    },
    iconsBtn: {
      flexGrow: 1
    },
    typo: {
      marginLeft: "1rem"
    }
  })
);

const Header = () => {
  const classes = useStyles();
  const [right, setRight] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setRight(open);
  };

  const mobileLists = (
    <div className={classes.mobileLists}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <CloseBox onClick={toggleDrawer(false)} />
          </ListItemIcon>
        </ListItem>
        <Divider style={{ backgroundColor: "#2D3047" }} />
      </List>
      <NavLists mobile />
    </div>
  );

  const renderMobile = (
    <Toolbar className={classes.mobileNav}>
      <IconButton aria-label="more menu" onClick={toggleDrawer(true)}>
        <ReorderHorizontal classes={{ root: classes.icon }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={right}
        classes={{ paper: classes.mDrawer }}
        onClose={toggleDrawer(false)}
      >
        {mobileLists}
      </Drawer>
    </Toolbar>
  );

  return (
    <AppBar classes={{ root: classes.appbar }} position="static">
      <Toolbar className={classes.desktopNav}>
        <NavLists styles={{ display: "flex", flexGrow: 1 }} desktop />
      </Toolbar>
      {renderMobile}
    </AppBar>
  );
};

export default Header;
