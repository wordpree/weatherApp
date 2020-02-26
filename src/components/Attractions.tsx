import React from "react";
import styled from "styled-components";
import { Container, Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

interface IAProps {
  urls: Array<string>;
  reverse: boolean;
}

const StyledImg = styled.img`
  max-width: 100%;
  width: auto;
  height: auto;
  display: block;
`;

const StyledSection = styled.div<{ reverse: boolean }>`
  margin: 4rem 0;
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
`;

const StyledLargeWrapper = styled.div`
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
`;

const StyledContent = styled.div`
  padding: 3rem;
  background-color: #f6c50f;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  & > p {
    margin: 0.75rem;
  }
`;

const StyledSmallWrapper = styled.div`
  margin-left: 2em;
  display: flex;
  flex: 0 1 50%;
  flex-wrap: wrap;
  & > div {
    margin-right: 0.5em;
  }
`;

const StyledImgWrapper = styled.div``;

const StyledSmall = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 47%;
`;

const CustomButton = styled(props => (
  <Button variant="outlined" size="large" {...props} />
))`
  border-radius: 50px;
  border: 2px solid #000;
`;

function Attractions({ urls, reverse }: IAProps) {
  return (
    <Container>
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
            <CustomButton>Explore your new scene</CustomButton>
          </StyledContent>
        </StyledLargeWrapper>
        <StyledSmallWrapper>
          {urls.slice(1, 5).map((item, key) => (
            <StyledSmall key={key}>
              <StyledImgWrapper>
                <StyledImg src={item} />
              </StyledImgWrapper>
              <StyledContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </StyledContent>
            </StyledSmall>
          ))}
        </StyledSmallWrapper>
      </StyledSection>
    </Container>
  );
}

export default Attractions;
