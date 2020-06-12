import styled from "styled-components";
import { Button, List, ListItemText, ListItemIcon } from "@material-ui/core";

export const StyledOpen = styled.div`
  background: #068080;
  width: 100vw;
  height: 100vh;
`;

export const StyledMobileBtn = styled(Button)`
  background-color: #fff;
  &:hover {
    background-color: #cecece;
  }
`;

export const StyledMobileHd = styled.div`
  padding: 2.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 76px;
`;
export const StyledMobileLogoImg = styled.img`
  width: 142px;
  height: auto;
`;
export const StyledList = styled(List)`
  width: 90%;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 6rem;
  background: #0a9d9d;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  & > a {
    border-bottom: 1px solid #eee;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  color: #fff;
  letter-spacing: 1.6px;
  & > span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  color: #fff;
`;
