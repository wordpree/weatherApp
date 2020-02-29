import React from "react";
import styled from "styled-components";
import { DotGroup } from "pure-react-carousel";
import { Button } from "@material-ui/core";

export const StyledSection = styled.section<{ reverse: boolean }>`
  margin: 1.5rem 0;
  @media (min-width: 1024px) {
    margin: 2rem 0;
    display: flex;
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }
`;

export const StyledLargeWrapper = styled.div<{ reverse: boolean }>`
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
    > div {
      flex: 1 1 50%;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledBgImg = styled.div<{ img: string }>`
  background: ${props => `center/ cover no-repeat url(${props.img})`};
  padding-top: 62.5%;
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

export const StyledSmallWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    > div {
      margin-right: 0.5em;
    }
  }
  @media (min-width: 1024px) {
    margin-left: 2em;
    padding: 0.5rem;
    display: flex;
    flex: 0 1 50%;
    flex-wrap: wrap;
    > div {
      margin-right: 0.5em;
    }
  }
`;

export const StyledSmall = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 47%;
  margin-top: 0.75rem;
  margin-bottom: 0.25rem;
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const StyledImg = styled.img`
  max-width: 100%;
  width: auto;
  height: auto;
  display: block;
`;

export const StyledPrcBtn = styled(DotGroup)`
  text-align: center;
  button {
    padding: 0;
    border: 0;
    width: 25px;
    height: 12px;
    background: #f6c50f;
    margin-right: 5px;
    border-radius: 10px;
  }
  .carousel__dot--selected {
    background: #c29a0c;
    transition: background-color 0.5s ease-in-out;
  }
`;

export const StyledButton = styled(({ mobile, ...rest }) => (
  <Button {...rest} />
))<{ mobile?: boolean }>`
  display: ${props => (props.mobile ? "block" : "none")};
  margin: 2rem auto;
  @media (min-width: 768px) {
    display: ${props => (props.mobile ? "none" : "block")};
    margin: 1rem;
  }
  border-radius: 50px;
  border: 2px solid #000;
  letter-spacing: 1px;
`;

export const StyledContent = styled.div`
  background-color: #f6c50f;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem;
  & > p {
    margin: 0.75rem;
  }
  @media (min-width: 1024px) {
    padding: 3rem;
  }
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const StyledImgWrapper = styled.div``;
