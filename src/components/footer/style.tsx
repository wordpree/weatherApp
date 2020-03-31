import styled from "styled-components";

export const StyledDivWrapper = styled.div`
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
  font-size: 0.7rem;
  padding: 0.75rem 0.5rem;
  min-width: 160px;
  margin: 2rem auto 0 auto;
  display: flex;
  background-color: #11263a;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
  & > div {
    color: #ccc;
    opacity: 0.5;
  }
`;
export const StyledDivRights = styled.div``;

export const StyledDivSMedia = styled.div`
  padding: 0.25rem 0.5rem;
`;

export const StyledDivPowerBy = styled.div``;

export const StyledUl = styled.ul`
  display: flex;
  padding: 0;
  & > li {
    list-style: none;
    display: inline-block;
    margin-right: 0.5rem;
    margin-left: 0;
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: #ccc;
`;
