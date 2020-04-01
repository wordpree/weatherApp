import React, { useState } from "react";
import NavLists from "./NavLists";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Paper
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CloseBox, ReorderHorizontal } from "mdi-material-ui";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navLists: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.25rem 1rem"
    },
    mDrawer: {
      background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, #B1B59A 100%)",
      backdropFilter: "blur(5px)"
    },
    mobileNav: {
      display: "block",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    mobileLists: {
      height: "100%",
      backgroundColor: "inherit",
      padding: "1.25rem 1rem"
    },
    icon: {
      color: "#858585"
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
    <Paper
      className={classes.mobileLists}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <CloseBox onClick={toggleDrawer(false)} style={{ color: "#ddd" }} />
          </ListItemIcon>
        </ListItem>
      </List>
      <NavLists mobile />
    </Paper>
  );

  const renderMobile = (
    <Box className={classes.mobileNav}>
      <IconButton aria-label="more menu" onClick={toggleDrawer(true)}>
        <ReorderHorizontal classes={{ root: classes.icon }} />
      </IconButton>
      <Drawer
        transitionDuration={{ enter: 1000, exit: 600 }}
        anchor="right"
        open={right}
        classes={{ paper: classes.mDrawer }}
        onClose={toggleDrawer(false)}
      >
        {mobileLists}
      </Drawer>
    </Box>
  );

  return (
    <Paper elevation={8} square className={classes.navLists}>
      <NavLists desktop />
      {renderMobile}
    </Paper>
  );
};

export default Header;
