import React from "react";
import { useNewsContextValue, K } from "../util/apiCall";
import {
  Grid,
  Container,
  makeStyles,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import Loading from "./Loading";
import Title from "./Title";
import imgFromUnsplash from "../assets/en-unsplash.jpg";

const useStyles = makeStyles(theme => ({
  secOAction: {
    position: "relative"
  },
  secOMeta: {
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translate(-50%)",
    backgroundColor: "rgba(0,0,0,0.32)",
    color: "#fff",
    letterSpacing: 1.1,
    textAlign: "center",
    width: "100%"
  },
  secOMedia: {
    paddingTop: "56.75%"
  },
  secOTypo1: {
    marginBottom: "0.5em",
    backgroundColor: "#FFCC0E",
    padding: "0.1em 0.25em",
    color: "#000"
  },
  secThdTitle: {
    fontSize: "1rem"
  },
  icon: { color: "#fff" },
  secTCard: {
    position: "relative"
  },
  secTCardCont: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.35)"
  },
  secTMedia: {
    paddingTop: "115%"
  },
  secTwHt: {
    fontSize: "1.2rem"
  },
  secTwHd: {
    minHeight: 125
  },
  secTTypoMeta: {
    display: "block",
    marginBottom: "0.75em",
    backgroundColor: "#FFCC0E",
    color: "#000",
    padding: "0.25em 0.1em"
  },
  secTTypoCont: {
    letterSpacing: 1
  },
  thrTypoTitle: {
    minHeight: "4.5rem",
    padding: "0.25em 0.1em ",
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",
    borderBottom: "1px solid #FFCC0E",
    textAlign: "center"
  },
  thrTMedia: {
    paddingTop: "56.25%"
  },
  thrTypoContainer: {
    textAlign: "center"
  },
  thrTypoMeta: {
    marginTop: "1.5em",
    backgroundColor: "#FFCC0E",
    color: "#000",
    padding: "0.5em",
    display: "inline-block"
  },
  thrTypoCont: {
    padding: "0.45em 0.2em",
    borderTop: "1px solid #FFCC0E",
    textAlign: "center",
    letterSpacing: 1.1
  },
  fourGrid: {
    "&>div": {
      marginBottom: "1.75em",
      padding: "0.75em 0.25em"
    }
  },
  fEntry: {
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  fEntryRev: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row-reverse"
    }
  },
  fourTypoCont: {
    padding: "0.45em 0.2em",
    textAlign: "center",
    letterSpacing: 1.1
  },
  fourCardMedia1: {
    paddingTop: "63.5%",
    width: "100%"
  },
  fourCard1: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
      flex: "1 0 auto"
    }
  },
  fourCardMedia2: {
    paddingTop: "63.5%"
  },
  fourTypoWrapper1: {
    padding: "0.45em 0.75em",
    textAlign: "center"
  },
  textPrimary: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#FFCC0E"
    }
  },
  credit: {
    textAlign: "right",
    color: "rgba(0,0,0,0.45)"
  }
}));

const NewsLists = () => {
  const classes = useStyles();
  const { loading, articles } = useNewsContextValue();

  const titleLmt = (url: null | undefined | string) => {
    if (!url) {
      return 'Header line\'s going missing';
    } else {
      if (url.length > 80) {
        return url.substring(0, 80) + "...";
      }
    }
    return url;
  };

  const imgUrl = (url: null | undefined | string) => {
    if (!url) {
      return imgFromUnsplash;
    } else {
      if (!url.includes("http")) return "http://" + url;
    }
    return url;
  };
  const authorConfirm = (author: null | undefined | string) => {
    if (!author) {
      return "Author Unkown";
    }
    return author;
  };
  const sectionOne = (data: Array<K>) => (
    <Grid container spacing={1} style={{ margin: "2rem 0" }}>
      {data.map((item, key) => (
        <Grid item xs={12} md={6} key={key}>
          <Card variant="outlined">
            <CardActionArea
              className={classes.secOAction}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardMedia
                image={item.urlToImage}
                className={classes.secOMedia}
              />
              <CardContent className={classes.secOMeta}>
                <Typography variant="caption" className={classes.secOTypo1}>
                  By {authorConfirm(item.author)} on{" "}
                  {new Date(item.publishedAt).toLocaleDateString()}
                </Typography>
                <Typography variant="subtitle1">
                  {titleLmt(item.title)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardContent>
              <Typography variant="body2" component="p">
                {item.content.substring(0, 250) + "..."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  const sectionTwo = (data: Array<K>) => (
    <Grid container spacing={2} style={{ margin: "2rem 0" }}>
      {data.map((item, key) => (
        <Grid key={key} item xs={12} md={6} lg={3}>
          <Card variant="outlined" className={classes.secTCard}>
            <CardHeader
              title={titleLmt(item.title)}
              classes={{ title: classes.secThdTitle }}
            />
            <CardActionArea
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardMedia
                image={item.urlToImage}
                className={classes.secTMedia}
              />
            </CardActionArea>
            <CardContent className={classes.secTCardCont}>
              <Typography variant="caption" className={classes.secTTypoMeta}>
                Publish At: {new Date(item.publishedAt).toDateString()}
              </Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.secTTypoCont}
              >
                {item.content.substring(0, 160) + " ..."}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  const sectionThree = (data: Array<K>) => (
    <Grid container spacing={3} style={{ margin: "2rem 0" }}>
      {data.map((item, key) => (
        <Grid key={key} item xs={12} md={6} lg={4}>
          <div className={classes.thrTypoTitle}>
            <Typography variant="subtitle1">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.textPrimary}
              >
                {titleLmt(item.title)}
              </a>
            </Typography>
          </div>
          <Card variant="outlined">
            <CardMedia image={item.urlToImage} className={classes.thrTMedia} />
          </Card>
          <div className={classes.thrTypoContainer}>
            <Typography
              variant="body2"
              component="p"
              className={classes.thrTypoCont}
            >
              {item.content.substring(0, 160) + " ..."}
            </Typography>
            <Typography variant="caption" className={classes.thrTypoMeta}>
              By {authorConfirm(item.author)} Published At{" "}
              {new Date(item.publishedAt).toDateString()}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
  const sectionFour = (data: Array<K>) => (
    <Grid container spacing={4} style={{ margin: "2rem 0" }}>
      <Grid item xs={12} lg={7} className={classes.fourGrid}>
        {data.slice(0, 5).map((item, key) => (
          <div
            key={key}
            className={key % 2 === 0 ? classes.fEntry : classes.fEntryRev}
          >
            <Card variant="outlined" className={classes.fourCard1}>
              <CardMedia
                image={imgUrl(item.urlToImage)}
                className={classes.fourCardMedia1}
              />
            </Card>
            <div className={classes.fourTypoWrapper1}>
              <Typography variant="h6">{titleLmt(item.title)}</Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.fourTypoCont}
              >
                {item.content.substring(0, 180) + " ..."}
              </Typography>
            </div>
          </div>
        ))}
      </Grid>
      <Grid item xs={12} lg={5}>
        <Grid container spacing={4}>
          {data.slice(5, 11).map((item, key) => (
            <Grid item key={key} xs={6}>
              <Card variant="outlined">
                <CardMedia
                  className={classes.fourCardMedia2}
                  image={item.urlToImage}
                />
              </Card>
              <div className={classes.thrTypoTitle}>
                <Typography variant="subtitle1">
                  {titleLmt(item.title)}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
        <Divider />
        <List>
          {data.slice(11, 15).map((item, key) => (
            <React.Fragment key={key}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    style={{ width: 150, height: 100 }}
                    alt={authorConfirm(item.author)}
                    variant="square"
                    src={`${imgUrl(item.urlToImage)}`}
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
                      {titleLmt(item.title)}
                    </a>
                  }
                  secondary={`${item.description.substr(0, 50)}...`}
                />
              </ListItem>
              <Divider style={{ backgroundColor: "#000" }} />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );

  return loading ? (
    <Loading value={100} />
  ) : (
    <>
      <Title text="Headline news from locals" />
      <Container>
        {sectionOne(articles.slice(0, 2))}
        {sectionTwo(articles.slice(2, 6))}
        {sectionThree(articles.slice(6, 9))}
        {sectionFour(articles.slice(9, 24))}
        <div className={classes.credit}>
          <a
            className={classes.textPrimary}
            href="https://newsapi.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powed by newsapi
          </a>
        </div>
      </Container>
    </>
  );
};

export default NewsLists;
