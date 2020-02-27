import React from "react";
import { Attractions } from "./attractions";
import { Container } from "@material-ui/core";
import styled from "styled-components";
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
  @media (max-width: 600px) {
    padding: 0;
  }
`;

function Recommend() {
  const imgUrls = [
    [paris, rome, barelona, newyork, lodon],
    [sydney, dubai, maldives, phuket, amsterdam]
  ];
  return (
    <StyledContainer>
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
