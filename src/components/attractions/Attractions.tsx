import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import Carousel1 from "../Carousel1";
import { Slide, Image } from "pure-react-carousel";
import {
  StyledSection,
  StyledLargeWrapper,
  StyledImgWrapper,
  StyledBgImg,
  StyledImg,
  StyledContent,
  StyledSmallWrapper,
  StyledSmall,
  StyledButton,
  StyledPrcBtn
} from "./styled";

interface IAProps {
  urls: Array<string>;
  reverse: boolean;
}

function Attractions({ urls, reverse }: IAProps) {
  const md = useMediaQuery("(min-width:768px)");
  const sm = useMediaQuery("(min-width:450px)");

  const settings = {
    orientation: "horizontal" as "horizontal" | "vertical" | undefined,
    visibleSlides: md ? 4 : sm ? 2 : 1,
    totalSlides: 4,
    step: 1,
    naturalSlideWidth: 17,
    naturalSlideHeight: 10
  };
  const slideData = urls.slice(1, 5).map((item, key) => (
    <Slide key={key} index={key}>
      <Image src={item} hasMasterSpinner />
    </Slide>
  ));
  const noneSlideData = (
    <StyledSmallWrapper>
      {urls.slice(1, 5).map((item, key) => (
        <StyledSmall key={key}>
          <StyledImgWrapper>
            <StyledImg src={item} />
          </StyledImgWrapper>
          <StyledContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do,consectetur adipiscing elit
          </StyledContent>
        </StyledSmall>
      ))}
    </StyledSmallWrapper>
  );
  return (
    <StyledSection reverse={reverse}>
      <StyledLargeWrapper reverse={!reverse}>
        <StyledBgImg img={urls[0]} />
        <StyledContent>
          <Typography variant="h2">Paris</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do,consectetur adipiscing elit
          </Typography>
          <StyledButton size="large" variant="outlined" mobile={false}>
            Explore your new scene
          </StyledButton>
        </StyledContent>
      </StyledLargeWrapper>

      {md ? (
        noneSlideData
      ) : (
        <Carousel1
          settings={settings}
          carousel={slideData}
          btnType={<StyledPrcBtn />}
        />
      )}
      <StyledButton size="large" variant="outlined" mobile={true}>
        Explore your new scene
      </StyledButton>
    </StyledSection>
  );
}

export default Attractions;
