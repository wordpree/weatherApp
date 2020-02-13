import React, { useState, useEffect } from "react";
import {
  Header,
  Search,
  Forecasts,
  TourPhoto,
  Title,
  Carousel
} from "../components";
import { WeatherApiDataProvider, UnspPhotoProvider } from "../util/apiCall";
import { makeStyles } from "@material-ui/styles";
import langdingImage from "../assets/unsplash.jpg";

const useStyles = makeStyles({
  landingPage: {
    background: `url(${langdingImage}) no-repeat center center`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%"
  }
});

const Home = () => {
  const classes = useStyles();
  const [submit, setSubmit] = useState("Brisbane, Australia");
  const [input, setInput] = useState("Brisbane,Australia");

  const handler = {
    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      setSubmit(input);
      e.preventDefault();
    },
    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInput(e.target.value);
    }
  };
  return (
    <>
      <Header />
      <Carousel />
      <Title />
      <Search {...handler} />
      {/*<UnspPhotoProvider spot={submit}>
        <TourPhoto />
      </UnspPhotoProvider>*/}
      <WeatherApiDataProvider location={submit}>
        <div className={classes.landingPage}>
          <Forecasts />
        </div>
      </WeatherApiDataProvider>
    </>
  );
};

export default Home;
