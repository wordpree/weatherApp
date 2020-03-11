import React from "react";
import { Typography, useMediaQuery, Paper } from "@material-ui/core";
import Slider from "react-slick";

import {
  StyledSection,
  StyledLargeWrapper,
  StyledImgWrapper,
  StyledBgImg,
  StyledImg,
  StyledContent,
  StyledSmallWrapper,
  StyledSmall,
  StyledButton
} from "./styled";

interface IAProps {
  urls: Array<string>;
  reverse: boolean;
}

function Attractions({ urls, reverse }: IAProps) {
  const md = useMediaQuery("(min-width:768px)");
  const sm = useMediaQuery("(min-width:450px)");

  const settings = {
    slidesToShow: md ? 4 : sm ? 2 : 1
  };
  const slideData = urls.slice(1, 5).map((item, key) => (
    <div key={key}>
      <Paper
        style={{
          background: `center / cover no-repeat url(${item}) no-repeat`
        }}
      />
    </div>
  ));
  const noneSlideData = (
    <StyledSmallWrapper>
      {urls.slice(1, 5).map((item, key) => (
        <StyledSmall key={key}>
          <StyledImgWrapper>
            <StyledImg src={item} />
          </StyledImgWrapper>
          <StyledContent>
            <img
              src="https://cdn.travel.sygic.com/web/markers/discovering-garden-botanical.png"
              alt=""
            />
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

      {md ? noneSlideData : <Slider {...settings}>{slideData}</Slider>}
      <StyledButton size="large" variant="outlined" mobile={true}>
        Explore your new scene
      </StyledButton>
    </StyledSection>
  );
}

export default Attractions;
