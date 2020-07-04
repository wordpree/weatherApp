import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";
import { imgUrl, titleLmt, authorConfirm } from "../../util/utils";
import LeftPart from "./LeftPart";
import { NewsProps, TITLE_LENGTH } from "./index";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    padding: "0.5em 0.1em ",
    color: "#000",
    textAlign: "center",
    fontWeight: 500,
    border: "1px solid #cecece",
    borderTop: "none",
  },
  cardMedia: {
    paddingTop: "63.5%",
  },

  subtitle: {
    fontWeight: 500,
    fontSize: "0.875em",
  },
  textPrimary: {
    textDecoration: "none",
    color: "inherit",
    [theme.breakpoints.down(500)]: {
      fontSize: "0.875rem",
    },
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#FFCC0E",
    },
  },
  item: {
    [theme.breakpoints.down(400)]: {
      padding: "0 !important",
    },
  },
}));

const NewsPartFour = ({ news }: NewsProps) => {
  const classes = useStyles();
  const smQuery = useMediaQuery("(max-width:500px)");
  const mdQuery = useMediaQuery("(max-width:959px)");
  const leftPartNews = news.slice(0, 5);
  return (
    <Grid container spacing={4} style={{ margin: "2rem 0" }}>
      <LeftPart news={leftPartNews} />
      <Grid item xs={12} lg={5}>
        <Grid container spacing={smQuery ? 1 : 2}>
          {news.slice(5, 11).map((item, key) => (
            <Grid item key={key} xs={6}>
              <Card variant="outlined">
                <CardActionArea
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={imgUrl(item.urlToImage)}
                  />
                </CardActionArea>
              </Card>
              <div className={classes.titleContainer}>
                <Typography
                  variant="subtitle1"
                  classes={{ subtitle1: classes.subtitle }}
                >
                  {titleLmt(item.title, TITLE_LENGTH, mdQuery)}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
        <List>
          {news.slice(11, 16).map((item, key) => (
            <React.Fragment key={key}>
              <ListItem alignItems="flex-start" className={classes.item}>
                <ListItemAvatar>
                  <Avatar
                    style={{ width: 150, height: 100 }}
                    alt={authorConfirm(item.author)}
                    variant="square"
                    src={imgUrl(item.urlToImage)}
                  />
                </ListItemAvatar>
                <ListItemText
                  style={{ marginLeft: "0.5em" }}
                  primary={
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.textPrimary}
                      href={`${item.url}`}
                    >
                      {titleLmt(item.title, TITLE_LENGTH, mdQuery)}
                    </a>
                  }
                  secondary={!smQuery && item.description}
                />
              </ListItem>
              <Divider style={{ backgroundColor: "#000" }} />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default NewsPartFour;
