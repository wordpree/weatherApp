import React from "react";
import { Menu } from "mdi-material-ui";
import logo from "../../assets/hero/logo@2x.png";
import SearchFlights from "../flightSearch/SearchFlights";
import { MobileDrawer } from "../";
import useMobileNavClick from "../header/useMobileNavClick";
import {
  StyledContWrapper,
  StyledEntry,
  StyledHeader,
  StyledImgWrapper,
  StyledLogo,
  StyledLogoImg,
  StyledMainWrapper,
  StyledMsgMain,
  StyledMsgSub,
  StyledMobileBtn,
  StyledMobileNav,
  StyledNav,
  StyledNavLink,
  StyledNavTypo,
  StyledSearchContainer,
} from "./styled";

const Banner = () => {
  const nav = [
    { name: "Home", to: "/" },
    { name: "Explore", to: "/explore" },
    { name: "Hotels", to: "/hotels" },
    { name: "Flights", to: "/flight" },
    { name: "Blog", to: "/blog" },
  ];
  const [open, toggleDrawer] = useMobileNavClick();

  return (
    <StyledEntry>
      <StyledImgWrapper />
      <div>
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
            <StyledMobileBtn onClick={() => toggleDrawer(true)}>
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
      </div>
      <MobileDrawer open={open} handleDrawer={toggleDrawer} />
    </StyledEntry>
  );
};

export default Banner;
