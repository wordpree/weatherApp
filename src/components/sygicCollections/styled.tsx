import styled from "styled-components";
import { Container, Card } from "@material-ui/core";
export const StyledContainer = styled(Container)`
  @media (max-width: 760px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

/* sygic detail */
export const StyledSlickWrapper1 = styled.div`
  .slick-slider {
    width: 100%;
  }
  .slick-gallery {
    .slick-dots {
      background-color: rgba(0, 0, 0, 0.2);
      bottom: 0;
      li.slick-active button::before {
        opacity: 1;
      }
      li button::before {
        color: #fff;
      }
    }
  }
  .slick-thumbnail {
    display: none;
  }
  @media (min-width: 960px) {
    .slick-thumbnail {
      display: block;
    }
  }
`;

export const StyledPaperWrapper = styled.div`
  .slick-thumbnail .slick-current & > div {
    box-shadow: 3px 3px 1px 0px rgba(0, 0, 0, 0.55);
  }
  .slick-thumbnail & > div {
    padding: 6px 4px;
  }
`;

export const StyledSlickImge = styled.div`
  padding-top: 63%;
  .slick-thumbnail .slick-current & {
  }
`;

/*sygic hotel*/

export const StyledCardH = styled(Card)`
  padding: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;
