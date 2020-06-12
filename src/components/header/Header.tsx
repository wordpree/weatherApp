import React from "react";
import { MobileDrawer } from "../";
import NavLists from "./NavLists";
import useMobileNavClick from "./useMobileNavClick";

import { Box, IconButton, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ReorderHorizontal } from "mdi-material-ui";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navLists: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.25rem 1rem",
    },
    mDrawer: {
      background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, #B1B59A 100%)",
      backdropFilter: "blur(5px)",
    },
    mobileNav: {
      display: "block",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    mobileLists: {
      height: "100%",
      backgroundColor: "inherit",
      padding: "1.25rem 1rem",
    },
    icon: {
      color: "#858585",
    },
    iconsBtn: {
      flexGrow: 1,
    },
    typo: {
      marginLeft: "1rem",
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const [open, toggleDrawer] = useMobileNavClick();
  const renderMobile = (
    <Box className={classes.mobileNav}>
      <IconButton aria-label="more menu" onClick={() => toggleDrawer(true)}>
        <ReorderHorizontal classes={{ root: classes.icon }} />
      </IconButton>
      <MobileDrawer open={open} handleDrawer={toggleDrawer} />
    </Box>
  );

  return (
    <Paper elevation={8} square className={classes.navLists}>
      <NavLists />
      {renderMobile}
    </Paper>
  );
};

export default Header;
