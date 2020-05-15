import React from "react";
import { Link, LinkProps as RouterLinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import { ListItem } from "@material-ui/core";
import {
  Home,
  Compass,
  Bed,
  Airplane,
  Blogger,
  CloseThick,
} from "mdi-material-ui";
import {
  StyledOpen,
  StyledListItemIcon,
  StyledListItemText,
  StyledList,
  StyledMobileHd,
  StyledMobileLogo,
  StyledMobileBtn,
  StyledMobileLogoImg,
} from "./styled";
import logo from "../../assets/hero/logo@2x.png";

interface IMEProps {
  open: boolean;
  handleClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileExpand = ({ open, handleClick }: IMEProps) => {
  const lists = [
    { label: "Home", icon: <Home fontSize="large" />, link: "/" },
    { label: "Explore", icon: <Compass fontSize="large" />, link: "/explore" },
    { label: "Hotels", icon: <Bed fontSize="large" />, link: "/hotels" },
    { label: "Flights", icon: <Airplane fontSize="large" />, link: "/flights" },
    { label: "Blog", icon: <Blogger fontSize="large" />, link: "/blog" },
  ];
  return (
    <StyledOpen open={open}>
      <StyledMobileHd>
        <StyledMobileLogo>
          <StyledMobileLogoImg src={logo} alt="logo" />
        </StyledMobileLogo>
        <StyledMobileBtn onClick={() => handleClick(false)}>
          <CloseThick />
        </StyledMobileBtn>
      </StyledMobileHd>
      <StyledList>
        {lists.map((item) => {
          const routeLink = React.forwardRef<any, Omit<RouterLinkProps, "to">>(
            (props, ref) => <Link ref={ref} to={item.link} {...props} />
          );
          return (
            <ListItem key={item.label} component={routeLink}>
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <StyledListItemText primary={item.label} />
            </ListItem>
          );
        })}
      </StyledList>
    </StyledOpen>
  );
};

export default MobileExpand;