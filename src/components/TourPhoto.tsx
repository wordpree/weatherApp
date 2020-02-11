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

type Props = {
  onTextFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles({
  box: {
    margin: "0 auto",
    display: "flex",
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

const TourPhoto = ({ onTextFieldChange }: Props) => {
  const data = usePexelsPhotoContextValue();
  console.log(data);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Typography variant="h5">
          What is your dreaming destination ?
        </Typography>
        <TextField label="spot" onChange={onTextFieldChange} />
      </Box>
      <Divider />
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
