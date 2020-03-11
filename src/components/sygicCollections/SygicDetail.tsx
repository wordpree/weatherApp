import React, { Component } from "react";
import { Typography, Grid, Container, Paper } from "@material-ui/core";
import { NextArrow, PrevArrow } from "../Arrow";
import Slider from "react-slick";

import {
  StyledSlickWrapper1,
  StyledSlickImge,
  StyledContainer,
  StyledPaperWrapper
} from "./styled";
import one from "../../assets/attractions/1.jpg";
import two from "../../assets/attractions/2.jpg";
import three from "../../assets/attractions/3.jpg";
import four from "../../assets/attractions/4.jpg";

interface ISDState {
  nav1: any;
  nav2: any;
}

class SygicDetail extends Component<{}, ISDState> {
  state = {
    nav1: undefined,
    nav2: undefined
  };

  private settings1 = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true
  };
  private settings2 = {
    dots: false,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true
  };

  private slider1: any;
  private slider2: any;

  urls = [one, two, three, four];
  sliders = this.urls.map((item: string, index: number) => {
    //const img = item.url_template.replace("{size}", "360x240");
    return (
      <StyledPaperWrapper key={index}>
        <Paper>
          <StyledSlickImge
            style={{
              background: `center / cover no-repeat url(${item}) `
            }}
          />
        </Paper>
      </StyledPaperWrapper>
    );
  });

  componentDidMount() {
    this.setState({ nav1: this.slider1, nav2: this.slider2 });
  }

  render() {
    return (
      <StyledContainer>
        <Grid
          container
          spacing={3}
          style={{ padding: "1rem 0.5ren", marginBottom: "1rem" }}
        >
          <Grid item xs={12} md={7}>
            <Typography variant="h4">
              welcom to Brisbane Botanic Garden
            </Typography>
            <Typography color="textSecondary">
              147 Alice St Brisbane City QLD 4000 Australia | Park Free
              |Botanical Garden| Strolling Area|Flora
            </Typography>
            <StyledSlickWrapper1>
              <Slider
                className="slick-gallery"
                ref={slider => (this.slider1 = slider)}
                asNavFor={this.state.nav2}
                {...this.settings1}
              >
                {this.sliders}
              </Slider>
              <Slider
                className="slick-thumbnail"
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                {...this.settings2}
              >
                {this.sliders}
              </Slider>
            </StyledSlickWrapper1>
          </Grid>
        </Grid>
      </StyledContainer>
    );
  }
}

export function SygicDetail1() {
  //console.log(state);
  const urls = [one, two, three, four];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const CustomSlider = urls.map((item: string, index: number) => {
    //const img = item.url_template.replace("{size}", "360x240");

    return (
      <Paper key={index}>
        <div
          style={{
            background: `center / cover no-repeat url(${item}) `,
            paddingTop: "65% "
          }}
        />
      </Paper>
    );
  });
  return (
    <Container>
      <Grid
        container
        spacing={3}
        style={{ padding: "1rem 0.5ren", marginBottom: "1rem" }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4">
            welcom to Brisbane Botanic Garden
          </Typography>
          <Typography color="textSecondary">
            147 Alice St Brisbane City QLD 4000 Australia | Park Free |Botanical
            Garden| Strolling| AreaFlora
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
      </Grid>
      <Paper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
        tempor risus, lobortis suscipit mauris. Vestibulum feugiat lobortis
        ante, id imperdiet dolor pretium id. Praesent commodo cursus elit ac
        fermentum. Nunc varius id massa aliquam bibendum.
      </Paper>
    </Container>
  );
}

export default SygicDetail;
