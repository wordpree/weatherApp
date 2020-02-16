import React from "react";
import Loading from "./Loading";
import { dataFormat, degreeToDir, localTime } from "../util/utils";
import { useWeatherContextValue } from "../util/apiCall";

import {
  Avatar,
  Paper,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Grid,
  Typography,
  List
} from "@material-ui/core";
import {
  ClockOutline,
  TemperatureCelsius,
  Umbrella,
  WeatherSunsetDown,
  WeatherSunsetUp,
  WaterPercent,
  WeatherWindy
} from "mdi-material-ui";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundImage:
      "linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)",
    backgroundBlendMode: "normal, lighten, soft-light"
  },
  name: {
    display: "block",
    color: "#fff",
    fontSize: "1.5rem",
    padding: "0.25rem"
  },
  time: {
    color: "rgba(250, 250, 250, 0.54)",
    display: "block",
    fontSize: "0.875rem"
  },
  spanTemp: {
    marginLeft: "0.4rem"
  },
  listItem: { padding: 4 },
  listPrimary: { fontSize: "0.8rem", color: "#fff" },
  tempPrimary: { fontSize: "2rem", color: "#fff" },
  timePrimary: { fontSize: "1.25rem", color: "#fff" },
  listSecondary: { color: "rgba(250,250,250,0.54)" },
  weatherList: {
    display: "flex"
  },
  avatar: { backgroundColor: "inherit" }
}));

const LocalWeather = () => {
  const classes = useStyles();
  const data = useWeatherContextValue();
  const { main, name, sys, weather, wind, loading, timezone } = data;
  const icons = [
    Umbrella,
    ClockOutline,
    WaterPercent,
    WeatherWindy,
    WeatherSunsetUp,
    WeatherSunsetDown
  ];
  const title = !loading && [
    weather[0].main,
    dataFormat(localTime(new Date(), timezone)),
    `${main.humidity}%`,
    wind.speed + " " + degreeToDir(wind.deg),
    dataFormat(localTime(new Date(sys.sunrise * 1000), timezone)),
    dataFormat(localTime(new Date(sys.sunset * 1000), timezone))
  ];

  const weatherLists = (icons: any, title: any) =>
    icons.map((Icon: any, index: number) => (
      <ListItem disableGutters key={index} classes={{ root: classes.listItem }}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <Icon style={{ color: "#8A8349" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          classes={{
            primary: classes.listPrimary,
            secondary: classes.listSecondary
          }}
          primary={title[index]}
        />
      </ListItem>
    ));

  return loading ? (
    <Loading value={100} />
  ) : (
    <Grid item xs={12} md={7}>
      <Paper className={classes.paper}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt={`${weather[0].description}`}
              style={{
                width: 146,
                height: 146
              }}
            />
          </div>
          <div>
            <span className={classes.name}>
              {name}
              <span className={classes.spanTemp}>
                {Math.floor(main.temp + 0.5)}
                <TemperatureCelsius style={{ color: "#fff" }} />
              </span>

              <Typography>{weather[0].description}</Typography>
            </span>
            <span className={classes.time}>
              {localTime(new Date(), timezone).toDateString()}
            </span>
          </div>
        </div>
        <Divider />
        <List className={classes.weatherList}>
          {weatherLists(icons, title)}
        </List>
      </Paper>
    </Grid>
  );
};
export default LocalWeather;
