import React from "react";
import {
  Typography,
  TextField,
  Box,
  Divider,
  Grid,
  Card,
  CardMedia,
  CardHeader
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { usePexelsPhotoContextValue } from "../util/apiCall";
import Search from "./Search";

const useStyles = makeStyles({
  box: {
    padding: "1rem 0.25rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&>*": {
      marginRight: "2rem",
      padding: "1rem 0.5rem"
    }
  },
  media: {
    paddingTop: "56.25%"
  }
});

const TourPhoto = () => {
  const data = usePexelsPhotoContextValue();
  //console.log(data);
  const classes = useStyles();
  return (
    <>
      <Grid container>
        {data.photos.map((photo, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card>
              <CardHeader></CardHeader>
              <CardMedia
                image={photo.urls.regular}
                className={classes.media}
              ></CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TourPhoto;
