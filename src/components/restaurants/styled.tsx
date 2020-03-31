import styled from "styled-components";
import { CardMedia, CardActionArea, Typography } from "@material-ui/core";

/** restaurants******************/
export const StyledCardMedia = styled(CardMedia)`
  padding-top: 66%;
  @media (min-width: 768px) {
    padding-top: 55%;
  }
  @media (min-width: 960px) {
    padding-top: 44%;
  }
`;
export const StyledCardActionArea = styled(CardActionArea)`
  position: relative;
`;

export const StyledImgBackDrop = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.55);
  &:hover {
    background-color: rgba(0, 0, 0, 0.35);
  }
`;

export const StyledTypoName = styled(Typography)`
  top: 50%;
  position: relative;
  left: 50%;
  display: inline-block;
  border: 3px solid aliceblue;
  padding: 5px 8px;
  transform: translate(-50%, -50%);
  color: rgb(255, 204, 14);
  text-align: center;
  @media screen and (min-width: 400px) {
    padding: 8px 12px;
  }
`;

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTags = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 6px;
`;
