import React from "react";
import {
  Paper,
  useMediaQuery,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ImgData } from "../../util/type";
import { secureProtocol } from "../../util/utils";
import externalImg from "../../assets/hero.jpg";

interface IHProps {
  imgData: ImgData;
  title: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 420,
    position: "relative",
  },
  dropback: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.28)",
  },
  title: {
    textAlign: "center",
    width: "90%",
    maxWidth: 260,
    position: "absolute",
    top: "50%",
    left: "50%",
    fontWeight: "bold",
    transform: "translate(-50%,-50%)",
    border: "4px solid #fff",
    color: "#fff",
    padding: "0.47rem 0.75rem ",
    [theme.breakpoints.up("md")]: {
      padding: "0.75rem 1.5rem ",
      fontSize: "2.25rem",
      maxWidth: 380,
    },
  },
}));
const Hero = ({ imgData, title }: IHProps) => {
  const classes = useStyles();
  const md = useMediaQuery("(min-width:960px)");
  const imgDataIsFound = (data: ImgData) => {
    if (data) {
      return md
        ? secureProtocol(imgData.sizes.original.url)
        : secureProtocol(imgData.sizes.medium.url);
    }
    return externalImg;
  };
  const img = imgDataIsFound(imgData);
  return (
    <Paper
      style={{
        background: `center / cover no-repeat url(${img}) #cecece`,
      }}
      className={classes.paper}
    >
      <div className={classes.dropback} />
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
    </Paper>
  );
};

export default Hero;
