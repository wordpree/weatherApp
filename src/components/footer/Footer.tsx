import React from "react";
import { Facebook, Linkedin, Reddit, Twitter } from "mdi-material-ui";
import { Typography } from "@material-ui/core";
import {
  StyledDivWrapper,
  StyledDivRights,
  StyledDivSMedia,
  StyledDivPowerBy,
  StyledUl,
  StyledAnchor
} from "./style";

const Footer = () => {
  const power = [
    "NewsApi | ",
    "OpenWeatherMap | ",
    "SygicTravel | ",
    "Zomato | ",
    "Unsplash"
  ].map((item, index) => (
    <StyledAnchor href="#b" key={index}>
      <span>{item}</span>
    </StyledAnchor>
  ));
  return (
    <StyledDivWrapper>
      <StyledDivRights>
        &copy;{new Date().getFullYear()} Travel Website. All rights reserved.
        Design and develop by Jun
      </StyledDivRights>
      <StyledDivSMedia>
        <StyledUl>
          <li>
            <Facebook fontSize="small" />
          </li>
          <li>
            <Linkedin fontSize="small" />
          </li>
          <li>
            <Reddit fontSize="small" />
          </li>
          <li>
            <Twitter fontSize="small" />
          </li>
        </StyledUl>
      </StyledDivSMedia>
      <StyledDivPowerBy>
        <span>Powered by</span> {power}
      </StyledDivPowerBy>
    </StyledDivWrapper>
  );
};

export default Footer;
