import React from "react";
import Loading from "./Loading";
import { dataFormat, degreeToDir, localTime } from "../util/utils";
import { useWeatherContextValue } from "../util/apiCall";

import {
  Container,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  ListItemIcon
} from "@material-ui/core";
import {
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
    [theme.breakpoints.up("sm")]: {
      transform: "translateY(25%)",
      WebkitTransform: "translateY(25%)"
    }
  },
  card: {
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(180deg, #7BC9D5 0%, #B1B59A 100%)",
    position: "relative",
    minHeight: 240
  },
  head: {
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  title: { fontSize: "1.5rem", color: "#fff" },
  subHeader: { color: "rgba(250,250,250,0.54)" },
  content: {
    margin: "0 auto",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0
    }
  },
  listItem: { padding: 4 },
  listPrimary: { fontSize: "0.8rem", color: "#fff" },
  tempPrimary: { fontSize: "2rem", color: "#fff" },
  timePrimary: { fontSize: "1.25rem", color: "#fff" },
  listSecondary: { color: "rgba(250,250,250,0.54)" },
  weatherList: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      minWidth: 240,
      minHeight: 160,
      top: "10%",
      left: "8%"
    }
  },

  avatar: { backgroundColor: "inherit" }
}));

const Forecasts = () => {
  const classes = useStyles();
  const data = useWeatherContextValue();
  const { main, name, sys, weather, wind, loading, timezone } = data;
  const icons = [
    Umbrella,
    WaterPercent,
    WeatherWindy,
    WeatherSunsetUp,
    WeatherSunsetDown
  ];
  const title = !loading && [
    { primary: weather[0].main, secondary: weather[0].description },
    `${main.humidity}%`,
    wind.speed + " " + degreeToDir(wind.deg),
    dataFormat(localTime(new Date(sys.sunrise * 1000), timezone)),
    dataFormat(localTime(new Date(sys.sunset * 1000), timezone))
  ];

  const weatherLists = (icons: any, title: any) =>
    icons.map((Icon: any, index: number) => (
      <div key={index}>
        <ListItem disableGutters classes={{ root: classes.listItem }}>
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
            primary={
              typeof title[index] === "object"
                ? title[index].primary
                : title[index]
            }
            secondary={
              typeof title[index] === "object" ? title[index].secondary : null
            }
          />
        </ListItem>
        <Divider />
      </div>
    ));

  return loading ? (
    <Loading value={100} />
  ) : (
    <section>
      <Container>
        <Paper className={classes.paper}>
          <Card className={classes.card}>
            <CardHeader
              classes={{ title: classes.title, subheader: classes.subHeader }}
              className={classes.head}
              avatar={
                <Avatar
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  style={{
                    width: 146,
                    height: 146
                  }}
                />
              }
              title={name}
              subheader={localTime(new Date(), timezone).toDateString()}
            />
            <CardContent className={classes.content}>
              <List aria-label="temperature">
                <ListItem>
                  <ListItemText
                    classes={{ primary: classes.tempPrimary }}
                    primary={Math.floor(main.temp + 0.5)}
                  />
                  <ListItemIcon>
                    <TemperatureCelsius style={{ color: "#fff" }} />
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemText
                    classes={{ primary: classes.timePrimary }}
                    primary={dataFormat(localTime(new Date(), timezone))}
                  />
                </ListItem>
              </List>
              <List className={classes.weatherList} aria-label="weather lists">
                {weatherLists(icons, title)}
              </List>
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </section>
  );
};
export default Forecasts;
