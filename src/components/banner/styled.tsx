import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const StyledImgWrapper = styled.div`
  padding-top: 65%;
  @media (min-width: 600px) {
    padding-top: 40%;
  }
  @media (min-width: 1024px) {
    padding-top: 30%;
  }
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const StyledTypo = styled(Typography)`
  position: absolute;
  right: 0;
  bottom: 2%;
  padding: 0.25rem;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.25);
  letter-spacing: 1px;
  color: #fff;
  &:hover a {
    text-decoration: underline !important;
  }
`;
