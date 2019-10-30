import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  Fab,
  Toolbar,
  Button,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Plus,
  CloseBox,
  Home,
  ReorderHorizontal,
  Camera,
  Airballoon,
  Newspaper
} from "mdi-material-ui";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: "#43AA8B"
    },
    mDrawer: {
      backgroundColor: "#E0A458"
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
      color: "#F6E7CB"
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

function Header() {
  const classes = useStyles();
  const iconLabels = ["Forecast", "Travel", "Photos", "News"];
  const iconLists = [Home, Airballoon, Camera, Newspaper];
  const nav = (labels: string[]) =>
    iconLists.map((Icon, index) => (
      <Button key={index} className={classes.iconsBtn}>
        <Icon classes={{ root: classes.icon }} />
        <Typography variant="h6" className={classes.typo}>
          {labels[index]}
        </Typography>
      </Button>
    ));
  const [right, setRight] = useState(false);
  const toggleClose = (open: boolean) => (
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
  const mobileLists = (labels: string[]) => (
    <div className={classes.mobileLists}>
      <List>
        <ListItem button style={{ padding: "1rem" }}>
          <ListItemIcon onClick={toggleClose(false)}>
            <CloseBox />
          </ListItemIcon>
        </ListItem>
        <Divider style={{ backgroundColor: "#2D3047" }} />
        {iconLists.map((Icon, index) => (
          <React.Fragment key={index}>
            <ListItem button>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={labels[index]}
                style={{ color: "#2D3047" }}
              />
            </ListItem>
            {index === 3 ? null : (
              <Divider style={{ backgroundColor: "#2D3047" }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  const renderMobile = (
    <Toolbar className={classes.mobileNav}>
      <IconButton aria-label="more menu" onClick={toggleClose(true)}>
        <ReorderHorizontal classes={{ root: classes.icon }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={right}
        classes={{ paper: classes.mDrawer }}
        onClose={toggleClose(false)}
      >
        {mobileLists(iconLabels)}
      </Drawer>
    </Toolbar>
  );
  return (
    <AppBar classes={{ root: classes.appbar }}>
      <Toolbar className={classes.desktopNav}>{nav(iconLabels)}</Toolbar>
      {renderMobile}
    </AppBar>
  );
}

export default Header;
