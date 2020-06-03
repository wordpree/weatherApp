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
  StyledListWrapper,
} from "./style";
import logo from "../../assets/hero/logo.png";
import { List, useMediaQuery } from "@material-ui/core";

const Footer = () => {
  const pages = [
    { label: "Explore" },
    { label: "Hotels" },
    { label: "Flight" },
    { label: "Blog" },
  ];
  const apis = [
    {
      label: "Google place",
      link: "https://developers.google.com/places/web-service/intro",
    },
    { label: "Triposo", link: "https://www.triposo.com/" },
    { label: "Zomato", link: "https://www.zomato.com/" },
    { label: "Openweathermap", link: "https://openweathermap.org/" },
    { label: "Newsapi", link: "https://newsapi.org/" },
  ];
  const media = [
    { label: "Facebook", icon: Facebook },
    { label: "Linkedin", icon: Linkedin },
    { label: "Reddit", icon: Reddit },
    { label: "Twitter", icon: Twitter },
  ];
  const md = useMediaQuery("(min-width:768px)");
  const handleClick = () => window.scroll(0, 0);
  return (
    <StyledDivWrapper>
      <StyledContent>
        <StyledLogoWrapper>
          <img src={logo} alt="site-logo" />
        </StyledLogoWrapper>
        {md ? (
          <StyledListWrapper>
            {[pages, apis, media].map((item) => (
              <ExpandList info={item} key={item[0].label} />
            ))}
          </StyledListWrapper>
        ) : (
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
        )}
        <StyledIconButton size="small" color="secondary" onClick={handleClick}>
          <ArrowUpBold />
        </StyledIconButton>
        <StyledRights>
          &copy;{new Date().getFullYear()} Travelus website. All rights
          reserved. Designed and developed by Jun
        </StyledRights>
      </StyledContent>
    </StyledDivWrapper>
  );
};

export default Footer;
