import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Button,
  List,
  Container,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { motion } from "framer-motion";
import hero from "../../assets/hero/luca-bravo-unsplash.jpg";

export const StyledMobileNav = styled.div`
  display: flex;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledOpen = styled.div`
  background: #068080;
  width: 100vw;
  height: 100vh;
`;

export const StyledMobileBtn = styled(Button)`
  background-color: #fff;
  &:hover {
    background-color: #cecece;
  }
`;

export const StyledMobileHd = styled.div`
  padding: 2.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 76px;
`;
export const StyledMobileLogoImg = styled.img`
  width: 142px;
  height: auto;
`;
export const StyledList = styled(List)`
  width: 90%;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 6rem;
  background: #0a9d9d;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  & > a {
    border-bottom: 1px solid #eee;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  color: #fff;
  letter-spacing: 1.6px;
  & > span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  color: #fff;
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  color: #fff;
  & :hover {
    color: #cecece;
    transition: all 0.3s ease-in-out;
  }
`;
export const StyledEntry = styled.div`
  min-height: 100vh;
  max-height: 960px;
  @media only screen and (min-width: 1024px) {
    height: 100vh;
    max-height: inherit;
    min-height: inherit;
  }
  position: relative;
`;
export const StyledImgWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  background-position: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.5) 80%,
      transparent 100%
    ),
    url(${hero});
  z-index: -999;
`;
export const StyledNav = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex: 1 0 55%;
    max-width: 580px;
    justify-content: space-evenly;
  }
`;

export const StyledHeader = styled.div`
  padding: 1.5rem 1% 0;
  @media only screen and (min-width: 768px) {
    padding-left: 2%;
    padding-right: 2%;
  }
  @media only screen and (min-width: 1024px) {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media only screen and (min-width: 1280px) {
    padding-left: 8%;
    padding-right: 8%;
  }

  display: flex;
  align-items: center;
  maxwidth: 80px;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  flex: 1 0 25%;
  display: flex;
`;
export const StyledLogoImg = styled.img`
  height: 100%;
  width: auto;
`;

export const StyledNavTypo = styled(Typography)`
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0;
  @media only screen and (min-width: 960px) {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.25rem;
  }
`;

export const StyledMainWrapper = styled(Container)`
  padding-top: 18%;
  padding-bottom: 10%;
  min-height: 90vh;
  @media only screen and (min-width: 768px) {
    padding-top: 8%;
    padding-bottom: 8%;
    padding-left: 8%;
    min-height: inherit;
    margin-left: inherit;
    margin-rigth: inherit;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledContWrapper = styled(motion.div)`
  max-width: 90%;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    margin: inherit;
  }
`;

export const StyledMsgMain = styled.div`
  color: #fff;
  max-width: 320px;
  font-weight: bold;
  letter-spacing: 1.6px;
  font-size: 2rem;
  @media only screen and (min-width: 500px) {
    letter-spacing: 2px;
    font-size: 2.2rem;
  }
  @media only screen and (min-width: 768px) {
    letter-spacing: 3px;
    font-size: 2.5rem;
  }
`;

export const StyledMsgSub = styled(motion.div)`
  margin-top: 1.75rem;
  letter-spacing: 2.16px;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 400;
  @media only screen and (min-width: 768px) {
    max-width: 320px;
  }
`;
export const StyledSearchContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  padding-top: 18%;
  @media only screen and (min-width: 960px) {
    margin: inherit;
    padding-top: 8%;
  }
`;
