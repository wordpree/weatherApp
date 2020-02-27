import React from "react-dom";
import styled from "styled-components";
export const StyledImg = styled.img`
  max-width: 100%;
  width: auto;
  height: auto;
  display: block;
`;

export const StyledSection = styled.div<{ reverse: boolean }>`
  @media (min-width: 768px) {
    margin: 4rem 0;
    display: flex;
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }
`;

export const StyledLargeWrapper = styled.div`
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  background-color: #f6c50f;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1.5rem;
  & > p {
    margin: 0.75rem;
  }
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

export const StyledSmallWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: 2em;
    display: flex;
    flex: 0 1 50%;
    flex-wrap: wrap;
    & > div {
      margin-right: 0.5em;
    }
  }
`;

export const StyledImgWrapper = styled.div``;

export const StyledSmall = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 47%;
  padding-right: 1rem;
  padding-top: 1rem;
`;
