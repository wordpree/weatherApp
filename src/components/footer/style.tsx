import styled from "styled-components";
import { Fab, Container } from "@material-ui/core";

export const StyledDivWrapper = styled.div`
  padding: 1rem;
  @media only screen and (min-width: 500px) {
    padding: 1.5rem 2rem;
  }
  margin: 5rem auto 0;
  background-color: #04506b;
  position: relative;
`;
export const StyledContent = styled.div`
  margin: 0 auto;
  padding-top: 2rem;
`;
export const StyledIconButton = styled(Fab)`
  position: absolute;
  right: 1.5%;
  top: 0;
  background-color: rgb(234, 175, 4);
  transform: translateY(-50%);
  & > * {
    color: #fff;
  }
`;

export const StyledLogoWrapper = styled.div`
  max-width: 120px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export const StyledRights = styled.div`
  padding-top: 2rem;
  text-align: center;
  color: #efefef;
  font-size: 0.75rem;
`;

export const StyledListWrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  & ul > a {
    color: #fff;
  }
  & ul > a:hover {
    text-decoration: underline;
  }
`;
