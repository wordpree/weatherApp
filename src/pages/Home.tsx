import React, { useState } from "react";
import { Header, Search, Forecasts } from "../components";
import { WeatherApiDataProvider } from "../util/weatherApiCall";
import { makeStyles } from "@material-ui/styles";
import langdingImage from "../assets/unsplash.jpg";
const useStyles = makeStyles({
  landingPage: {
    backgroundImage: `url(${langdingImage})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%"
  }
});

const Home = () => {
  const classes = useStyles();
  const [location, setLocation] = useState("Brisbane, Australia");
  return (
    <WeatherApiDataProvider location={location}>
      <div className={classes.landingPage}>
        <Header />
        <Search setLocation={setLocation} />
        <Forecasts />
      </div>
    </WeatherApiDataProvider>
  );
};

export default Home;
