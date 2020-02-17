import React from "react";
import Loading from "./Loading";
import { dataFormat, degreeToDir, localTime } from "../util/utils";
import { useWeatherContextValue } from "../util/apiCall";
import {
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Grid,
  Typography,
  List,
  Card,
  CardContent,
  CardMedia,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import {
  TemperatureCelsius,
  WeatherSunsetDown,
  WeatherSunsetUp,
  WaterPercent,
  WeatherWindy
} from "mdi-material-ui";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  frog,
  night,
  thunder,
  rain,
  snow,
  clouds,
  sunny
} from "../assets/weather";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    position: "relative"
  },
  cardCont: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "rgba(0,0,0,0.2)",
    backdropFilter: "blur(7px)",
    borderRadius: 10
  },
  media: {
    paddingTop: "70%"
  },
  weatherList1: {
    display: "flex"
  },
  primaryItemText1: {
    fontSize: "1.5rem",
    color: "#fff"
  },
  secondaryItemText1: {
    fontWeight: 300
  },
  typoSpan: {
    display: "block",
    whiteSpace: "nowrap",
    color: "rgba(255,255,255,0.7)"
  },
  divTime: {
    fontFamily: "Oswald, sans- serif",
    textAlign: "center",
    fontSize: "1.25rem",
    color: "#fff",
    fontWeight: 400,
    marginBottom: "1rem",
    letterSpacing: 1.3
  },
  item2: {
    justifyContent: "center"
  },
  listText2: {
    flex: "0 0 auto",
    color: "#fff"
  },
  primary: {
    flex: "0 0 auto"
  },
  primaryItemText2: {
    fontSize: "1.5rem"
  },
  icon: {
    minWidth: 30
  },
  primaryItemText3: {
    color: "#fff",
    letterSpacing: 1.1,
    fontWeight: 300,
    textAlign: "center"
  },
  listItem: { padding: 6, letterSpacing: 1.1 },
  listPrimary: { fontSize: "0.8rem", color: "#fff" },
  tempPrimary: { fontSize: "2rem", color: "#fff" },
  timePrimary: { fontSize: "1.25rem", color: "#fff" },
  listSecondary: { color: "rgba(250,250,250,0.54)" },
  weatherList3: {
    display: "flex"
  },
  avatar: { backgroundColor: "inherit" }
}));

const LocalWeather = () => {
  const classes = useStyles();
  const data = useWeatherContextValue();
  const {
    main,
    name,
    sys,
    weather,
    wind,
    loading,
    timezone,
    vis,
    clouds
  } = data;
  const icons = [
    WaterPercent,
    WeatherWindy,
    WeatherSunsetUp,
    WeatherSunsetDown
  ];
  // const weatherImg = (weatherId:number)=>{
  //   switch (weatherId) {
  //     case weatherId>199 && weatherId<233:

  //       break;

  //     default:
  //       break;
  //   }
  // }
  const title = !loading && [
    `${main.humidity}%`,
    wind.speed + " " + degreeToDir(wind.deg),
    dataFormat(localTime(new Date(sys.sunrise * 1000), timezone)),
    dataFormat(localTime(new Date(sys.sunset * 1000), timezone))
  ];

  const weatherDescription = (
    <span>
      Currently weather : The high temp is {main.temp_max}&#176;,low temp is{" "}
      {main.temp_min}&#176;. It feels lik {main.feels_like}&#176;. The pressure
      is {main.pressure} and visibility is {vis}. Cloudiness percentage is{" "}
      {clouds}%
    </span>
  );

  const weatherLists = (icons: any, title: any) =>
    icons.map((Icon: any, index: number) => (
      <ListItem key={index} classes={{ root: classes.listItem }}>
        <ListItemIcon className={classes.icon}>
          <Icon style={{ color: "#8A8349" }} />
        </ListItemIcon>
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
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={sunny}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardCont}>
          <List className={classes.weatherList1}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt={`${weather[0].description}`}
                  style={{
                    width: 146,
                    height: 146
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.primaryItemText1,
                  secondary: classes.secondaryItemText1
                }}
                primary={name}
                secondary={
                  <>
                    <Typography component="span" className={classes.typoSpan}>
                      {weather[0].description}
                    </Typography>
                    <Typography component="span" className={classes.typoSpan}>
                      {localTime(new Date(), timezone).toDateString()}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <ListItem className={classes.item2}>
              <ListItemText
                classes={{
                  primary: classes.primaryItemText2
                }}
                primary={Math.floor(main.temp + 0.5)}
                className={classes.listText2}
              />
              <ListItemIcon>
                <TemperatureCelsius style={{ color: "#fff" }} />
              </ListItemIcon>
            </ListItem>
          </List>
          <div className={classes.divTime}>
            {dataFormat(localTime(new Date(), timezone))}
          </div>
          <Divider style={{ backgroundColor: "#F6C50F" }} />
          <List>
            <ListItem>
              <ListItemText
                primary={weatherDescription}
                classes={{ primary: classes.primaryItemText3 }}
              />
            </ListItem>
          </List>
          <Divider style={{ backgroundColor: "#F6C50F" }} />
          <List className={classes.weatherList3}>
            {weatherLists(icons, title)}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default LocalWeather;
