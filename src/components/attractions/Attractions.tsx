import React from "react";
import { Typography, Button, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import Carousel from "../Carousel";
import {
  StyledSection,
  StyledLargeWrapper,
  StyledImgWrapper,
  StyledImg,
  StyledContent,
  StyledSmallWrapper,
  StyledSmall
} from "./styled";

interface IAProps {
  urls: Array<string>;
  reverse: boolean;
}

const StyledButton = styled(props => (
  <Button {...props} size="large" variant="outlined" />
))`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
  border-radius: 50px;
  border: 2px solid #000;
`;

const settings = {
  arrows: false,
  dots: false,
  autoplay: false,
  slidesToShow: 1.1
};

function Attractions({ urls, reverse }: IAProps) {
  const md = useMediaQuery("(min-width:768px)");
  const sliderData = urls.slice(1, 5).map((item, key) => (
    <StyledSmall key={key}>
      <StyledImgWrapper>
        <StyledImg src={item} />
      </StyledImgWrapper>
      <StyledContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </StyledContent>
    </StyledSmall>
  ));

  return (
    <StyledSection reverse={reverse}>
      <StyledLargeWrapper>
        <StyledImgWrapper>
          <StyledImg src={urls[0]} />
        </StyledImgWrapper>
        <StyledContent>
          <Typography variant="h2">Paris</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Typography>
          <StyledButton>Explore your new scene</StyledButton>
        </StyledContent>
      </StyledLargeWrapper>
      <StyledSmallWrapper>
        {md ? (
          sliderData
        ) : (
          <Carousel settings={settings} carousel={sliderData} />
        )}
      </StyledSmallWrapper>
    </StyledSection>
  );
}

export default Attractions;
