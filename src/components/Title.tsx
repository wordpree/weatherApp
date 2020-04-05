import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledTitleWrapper = styled.div`
  margin: 4.5rem auto 1.25rem;
  padding: 0.75rem 0.25rem;
  text-align: center;
  font-weight: "bold";
  text-align: "center";
`;
const StyledTypo = styled(Typography)`
  letter-spacing: 0.09em;
  text-transform: uppercase;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

interface IProps {
  text: string;
  css?: {};
}
const Title = ({ text, css }: IProps) => {
  return (
    <StyledTitleWrapper>
      <StyledTypo variant="h3" style={{ ...css }}>
        {text}
      </StyledTypo>
    </StyledTitleWrapper>
  );
};

export default Title;
