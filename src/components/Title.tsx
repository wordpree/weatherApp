import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledTitleWrapper = styled.div`
  margin: 2rem auto;
  padding: 0.75rem 0.25rem;
  text-align: center;
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
  &:after {
    display: table;
    content: "";
    height: 1px;
    width: 100%;
    color: rgb(255, 204, 14);
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
