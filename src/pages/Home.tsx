import React, { useState } from "react";
import { Header, Search, Forecasts, TourPhoto } from "../components";
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
  const [location, setLocation] = useState("Brisbane, Australia");
  const [spot, setSpot] = useState("Brisbane");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpot(e.target.value);
  };
  return (
    <>
      <Header />
      <UnspPhotoProvider spot={spot}>
        <TourPhoto onTextFieldChange={handleChange} />
      </UnspPhotoProvider>
      <WeatherApiDataProvider location={location}>
        <div className={classes.landingPage}>
          <Search setLocation={setLocation} />
          <Forecasts />
        </div>
      </WeatherApiDataProvider>
    </>
  );
};

export default Home;
