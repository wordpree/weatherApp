import React from "react";
import {
  Container,
  Paper,
  useMediaQuery,
  makeStyles,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@material-ui/core";
import { Link, LinkProps } from "react-router-dom";

import { useParams } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./";

import { ITriposoPoi } from "../util/type";

interface ICDProps {
  data: ITriposoPoi[];
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2rem",
    "&::after": {
      content: "''",
      display: "table",
      clear: "both",
    },
  },
  paper: {
    paddingTop: "67%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "56.25%",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "43.75%",
    },
    height: 0,
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
  content: {
    padding: "0.25rem 0.75rem",
    marginTop: "1rem",
  },
  subTitle: {},
  imgWrapper: {
    float: "none",
    marginRight: 0,
    [theme.breakpoints.up(768)]: {
      float: "left",
      marginRight: "1rem",
    },
  },
  img: {
    maxWidth: "100%",
    maxHeight: 335,
  },
  text: {},
  typo: {
    paddingTop: "1.5rem",
    textAlign: "center",
  },
  avatar: {
    width: 150,
    height: 100,
    borderRadius: 5,
  },
  itemText: {
    paddingLeft: "0.5rem",
    color: "#000",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const CardDetail = ({ data }: ICDProps) => {
  const classes = useStyles();
  const md = useMediaQuery("(min-width:960px)");
  const { id } = useParams();
  let detail;
  if (id && data.length) {
    detail = data.find((item) => item.id === id) as ITriposoPoi;
  } else {
    return null;
  }
  const img = md
    ? detail.images[0].sizes.original.url
    : detail.images[0].sizes.medium.url;
  const ListLink = (id: string) =>
    React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => (
      <Link to={`/explore-nature/${id}`} ref={ref} {...props} />
    ));
  return (
    <>
      <ScrollToTop />
      <Header />
      <Container className={classes.container}>
        <Paper
          style={{
            background: `center / cover no-repeat url(${img}) #cecece`,
          }}
          className={classes.paper}
        >
          <div className={classes.dropback} />
          <Typography variant="h5" className={classes.title}>
            {detail.name}
          </Typography>
        </Paper>
        <Grid container spacing={1}>
          <Grid item md={7} xs={12}>
            {detail.content.sections.map((item) => (
              <div className={classes.content} key={item.title}>
                <div className={classes.imgWrapper}>
                  {item.image && (
                    <img
                      src={item.image.sizes.medium.url}
                      alt={item.title}
                      className={classes.img}
                    />
                  )}
                </div>
                <Typography variant="h5" className={classes.subTitle}>
                  {item.title}
                </Typography>
                <Typography
                  className={classes.text}
                  dangerouslySetInnerHTML={{ __html: item.body }}
                  color="textSecondary"
                />
              </div>
            ))}
          </Grid>
          <Grid item md={5} xs={12}>
            <Typography variant="h5" className={classes.typo}>
              More popular attractions
            </Typography>
            <List>
              {data
                .filter((item) => item.id !== id && item.name !== "Uluru")
                .slice(0, 7)
                .map((item) => (
                  <React.Fragment key={item.name}>
                    <ListItem component={ListLink(item.id)}>
                      <ListItemAvatar>
                        <Avatar
                          className={classes.avatar}
                          src={item.images[0].sizes.thumbnail.url}
                          alt={item.name}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        className={classes.itemText}
                        primary={item.name}
                        secondary={item.intro.substring(0, 164) + "..."}
                      />
                    </ListItem>
                    <Divider style={{ background: "rgba(234,175,4,0.7)" }} />
                  </React.Fragment>
                ))}
            </List>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default CardDetail;
