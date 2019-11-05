import React, { useState } from "react";
import { Header, Search, Display } from "../components";
import { WeatherApiDataProvider } from "../util/weatherApiCall";

const Home = () => {
  const [location, setLocation] = useState("Brisbane, Australia");
  return (
    <WeatherApiDataProvider location={location}>
      <Header />
      <Search setLocation={setLocation} />
      <Display />
    </WeatherApiDataProvider>
  );
};

export default Home;
