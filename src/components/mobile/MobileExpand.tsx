import React from "react";
import { Link, LinkProps as RouterLinkProps } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { Omit } from "@material-ui/types";

import {
  Home,
  Compass,
  Bed,
  Airplane,
  Blogger,
  CloseThick,
} from "mdi-material-ui";

import {
  StyledList,
  StyledListItemIcon,
  StyledListItemText,
  StyledMobileBtn,
  StyledMobileHd,
  StyledMobileLogoImg,
  StyledOpen,
} from "./styled";
import logo from "../../assets/hero/logo@2x.png";
import { motion } from "framer-motion";

interface IMEProps {
  handleClick(state: boolean): void;
  open: boolean;
}

const MobileExpand = ({ handleClick, open }: IMEProps) => {
  const lists = [
    { label: "Home", icon: <Home />, link: "/" },
    { label: "Explore", icon: <Compass />, link: "/explore" },
    { label: "Hotels", icon: <Bed />, link: "/hotels" },
    { label: "Flights", icon: <Airplane />, link: "/flights" },
    { label: "Blog", icon: <Blogger />, link: "/blog" },
  ];
  const listVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        x: { stiffness: 10 },
        delay: 0.2,
        staggerChildren: 0.05,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
    close: {
      opacity: 0,
      x: "-100vw",
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  };
  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 100, mass: 0.5 },
      },
    },
    close: {
      opacity: 0,
      x: "-100vw",
    },
  };
  const forwardRefToUl = React.forwardRef<any, any>((props, ref) => (
    <motion.ul
      {...props}
      ref={ref}
      variants={listVariants}
      initial="close"
      animate={open ? "open" : "close"}
    />
  ));
  return (
    <StyledOpen>
      <StyledMobileHd>
        <div>
          <StyledMobileLogoImg src={logo} alt="logo" />
        </div>
        <StyledMobileBtn onClick={() => handleClick(false)}>
          <CloseThick />
        </StyledMobileBtn>
      </StyledMobileHd>
      <StyledList component={forwardRefToUl}>
        {lists.map((item) => {
          const routeLink = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
            (props, ref) => <Link ref={ref} to={item.link} {...props} />
          );
          return (
            <motion.div key={item.label} variants={itemVariants}>
              <ListItem component={routeLink}>
                <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                <StyledListItemText primary={item.label} />
              </ListItem>
            </motion.div>
          );
        })}
      </StyledList>
    </StyledOpen>
  );
};

export default MobileExpand;
