import React from "react";
import {
  Facebook,
  Linkedin,
  Reddit,
  Twitter,
  ArrowUpBold,
} from "mdi-material-ui";
import Expand from "./Expand";
import ExpandList from "./ExpandList";
import {
  StyledDivWrapper,
  StyledContent,
  StyledRights,
  StyledIconButton,
  StyledLogoWrapper,
} from "./style";
import logo from "../../assets/hero/logo.png";
import { List } from "@material-ui/core";

const Footer = () => {
  const pages = [
    { label: "Explore" },
    { label: "Hotels" },
    { label: "Flight" },
    { label: "Blog" },
  ];
  const apis = [
    { label: "Google place" },
    { label: "Triposo" },
    { label: "Zomato" },
    { label: "OpenWeatherMap" },
    { label: "NewsApi" },
  ];
  const media = [
    { label: "Facebook", icon: Facebook },
    { label: "Linkedin", icon: Linkedin },
    { label: "Reddit", icon: Reddit },
    { label: "Twitter", icon: Twitter },
  ];
  const handleClick = () => window.scroll(0, 0);
  return (
    <StyledDivWrapper>
      <StyledContent>
        <StyledLogoWrapper>
          <img src={logo} alt="site-logo" />
        </StyledLogoWrapper>
        <List>
          <Expand label="Website pages">
            <ExpandList info={pages} />
          </Expand>
          <Expand label="Presented apis">
            <ExpandList info={apis} />
          </Expand>
          <Expand label="Find us through the following">
            <ExpandList info={media} />
          </Expand>
        </List>
        <StyledIconButton size="small" color="secondary" onClick={handleClick}>
          <ArrowUpBold />
        </StyledIconButton>
        <StyledRights>
          &copy;{new Date().getFullYear()} Travel Website. All rights reserved.
          Designed and developed by Jun
        </StyledRights>
      </StyledContent>
    </StyledDivWrapper>
  );
};

export default Footer;
