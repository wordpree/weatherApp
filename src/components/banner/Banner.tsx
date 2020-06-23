import React from "react";
import { Menu } from "mdi-material-ui";
import { motion } from "framer-motion";
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
  const titleVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5,
        type: "spring",
        stiffness: 60,
        mass: 0.6,
        when: "beforeChildren",
      },
    },
  };
  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { delay: 0, type: "spring" },
  };
  const transition = {
    type: "spring",
    stiffness: 230,
    ease: "anticipate",
    delay: 0,
    duration: 0.4,
  };
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
                <motion.div
                  transition={transition}
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0 0 4px #fff",
                    boxShadow: "0 0 1px #fff",
                    borderRadius: 5,
                  }}
                >
                  <StyledNavTypo variant="subtitle1">{item.name}</StyledNavTypo>
                </motion.div>
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
          <StyledContWrapper
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <StyledMsgMain>Let's Get Your First Best Trip Ever!</StyledMsgMain>
            <StyledMsgSub variants={subtitleVariants}>
              Your life, your journey, your world
            </StyledMsgSub>
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
