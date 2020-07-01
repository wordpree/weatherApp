import React from "react";
import {
  Paper,
  Button,
  useMediaQuery,
  makeStyles,
  Avatar,
  Typography,
} from "@material-ui/core";
import { Link, CircleDouble, ChevronRight } from "mdi-material-ui";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ImgData } from "../../util/type";
import { secureProtocol } from "../../util/utils";
import externalImg from "../../assets/hero.jpg";

interface IHProps {
  imgData: ImgData;
  title: string;
  next: { path: string; info: string };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 300,
    position: "relative",
    [theme.breakpoints.up("md")]: {
      height: 380,
    },
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
  },
  dropback: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0,0,0,0.32)",
  },

  main: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    fontWeight: "bold",
    transform: "translate(-50%,-50%)",
    color: "#fff",
    padding: "0.47rem 0.75rem ",
    width: "100%",
  },
  title: {
    fontSize: "2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  },
  iconWrapper: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    padding: "0 0.5rem",
    "&> svg": {
      paddingRight: "0.25rem",
    },
    "&> a": {
      color: "#fff",
      textDecoration: "none",
    },
    "&> a:hover": {
      color: "#dedede",
      textDecoration: "underline",
    },
  },
  author: {
    maxWidth: 330,
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    background: "rgb(234,175,4)",
    color: "#fff",
    marginRight: "1rem",
  },
  ownerDetail: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  next: {
    maxWidth: 330,
  },
  rightArrow: {
    display: "flex",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%)",
    minWidth: "89%",
    bottom: "10%",
    fontWeight: "bold",
    color: "#fff",
    "&>a": {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "80%",
    },
  },
  link: { width: "100%" },
  nextBtn: {
    color: "#fff",
    justifyContent: "space-between",
  },
  subTitle: {
    fontWeight: "bold",
  },
  info: {
    color: "rgba(255,255,255,0.78)",
    padding: "0.25rem 1rem",
  },
}));
const Hero = ({ imgData, title, next }: IHProps) => {
  const classes = useStyles();
  const { path, info } = next;
  const { source_id, owner_url, owner } = imgData;
  const md = useMediaQuery("(min-width:960px)");
  const sm = useMediaQuery("(min-width:450px)");
  const imgDataIsFound = (data: ImgData) => {
    if (data) {
      return md
        ? secureProtocol(imgData.sizes.original.url)
        : secureProtocol(imgData.sizes.medium.url);
    }
    return externalImg;
  };
  const getInfo = (info: string) => {
    return md ? info.substring(0, 130) : sm ? info.substring(0, 40) : "";
  };
  const nextLink = React.forwardRef<any, any>((props, ref) => (
    <RouterLink {...props} ref={ref} to={path} />
  ));
  const img = imgDataIsFound(imgData);
  const arrowHoverVariants = {
    hover: {
      scale: 1.04,
      x: [0, 24],
      transition: {
        yoyo: Infinity,
        duration: 0.3,
        type: "spring",
      },
    },
  };
  const btnHoverVariants = {
    hover: {
      scale: 1.04,
    },
  };
  return (
    <Paper
      style={{
        background: `center / cover no-repeat url(${img}) #cecece`,
      }}
      className={classes.paper}
    >
      <div className={classes.dropback} />
      <div className={classes.main}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.iconWrapper}>
          <Typography component="span" className={classes.icon}>
            <CircleDouble fontSize="small" />
            <span>{source_id}</span>
          </Typography>
          <Typography component="span" className={classes.icon}>
            <Link fontSize="small" />
            <a href={owner_url}>Attribute address</a>
          </Typography>
        </div>
      </div>
      <div className={classes.meta}>
        <div className={classes.author}>
          <Avatar className={classes.avatar}>
            {owner.substring(0, 1).toUpperCase()}
          </Avatar>
          <span className={classes.ownerDetail}>By {owner}</span>
        </div>
        <div className={classes.next}>
          <motion.div variants={btnHoverVariants} whileHover="hover">
            <Button
              className={classes.nextBtn}
              endIcon={
                <motion.div
                  className={classes.rightArrow}
                  variants={arrowHoverVariants}
                >
                  <ChevronRight />
                </motion.div>
              }
              component={nextLink}
            >
              <Typography color="secondary" className={classes.subTitle}>
                Next story
              </Typography>
            </Button>
          </motion.div>
          <Typography variant="body2" className={classes.info}>
            {getInfo(info)}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default Hero;
