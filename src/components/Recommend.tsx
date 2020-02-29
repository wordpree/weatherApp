import React from "react";
import { Attractions } from "./attractions";
import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";
import Title from "./Title";
import {
  paris,
  rome,
  barelona,
  newyork,
  lodon,
  sydney,
  dubai,
  maldives,
  phuket,
  amsterdam
} from "../assets/cities";

const StyledContainer = styled(Container)`
  margin: 3rem auto;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const StyledTypography = styled(Typography)`
  text-align: center;
  letter-spacing: 1px;
`;
function Recommend() {
  const imgUrls = [
    [paris, rome, barelona, newyork, lodon],
    [sydney, dubai, maldives, phuket, amsterdam]
  ];
  return (
    <StyledContainer>
      <Title text="Unmatched destinations" />
      <StyledTypography variant="subtitle1">
        Explore your new stunning adventure where everyone enjoys themselves
      </StyledTypography>
      {imgUrls.map((item, index) => (
        <Attractions
          key={index}
          urls={item}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
    </StyledContainer>
  );
}

export default Recommend;
