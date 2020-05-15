import React, { useState } from "react";
import {
  StyledImgWrapper,
  StyledNavTypo,
  StyledLogo,
  StyledNav,
  StyledHeader,
  StyledLogoImg,
  StyledNavLink,
  StyledMsgMain,
  StyledContWrapper,
  StyledMsgSub,
  StyledSearchContainer,
  StyledMainWrapper,
  StyledMobileNav,
  StyledMobileBtn,
} from "./styled";
import { Menu } from "mdi-material-ui";
import SearchFlights from "../flightSearch/SearchFlights";
import logo from "../../assets/hero/logo@2x.png";
import MobileExpand from "./MobileExpand";

const Banner = () => {
  const nav = [
    { name: "Home", to: "/" },
    { name: "Explore", to: "/explore" },
    { name: "Hotels", to: "/hotels" },
    { name: "Flights", to: "/flight" },
    { name: "Blog", to: "/blog" },
  ];
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);
  return (
    <div style={{ position: "relative" }}>
      <StyledImgWrapper>
        <StyledHeader>
          <StyledLogo>
            <StyledLogoImg src={logo} alt="travelus logo" />
          </StyledLogo>
          <StyledNav>
            {nav.map((item) => (
              <StyledNavLink key={item.name} to={item.to}>
                <StyledNavTypo variant="subtitle1">{item.name}</StyledNavTypo>
              </StyledNavLink>
            ))}
          </StyledNav>
          <StyledMobileNav>
            <StyledMobileBtn onClick={handleClick}>
              <Menu />
            </StyledMobileBtn>
          </StyledMobileNav>
        </StyledHeader>
        <StyledMainWrapper>
          <StyledContWrapper>
            <StyledMsgMain>Let's Get Your First Best Trip Ever!</StyledMsgMain>
            <StyledMsgSub>Your life, your journey, your world</StyledMsgSub>
          </StyledContWrapper>
          <StyledSearchContainer>
            <SearchFlights />
          </StyledSearchContainer>
        </StyledMainWrapper>
      </StyledImgWrapper>
      <MobileExpand open={open} handleClick={setOpen} />
    </div>
  );
};

export default Banner;
