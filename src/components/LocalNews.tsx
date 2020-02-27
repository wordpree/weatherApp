import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Button,
  Tooltip
} from "@material-ui/core";
import { Link, LinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";
import { makeStyles } from "@material-ui/core/styles";
import { useNewsContextValue } from "../util/apiCall";
import Loading from "./Loading";
const useStyles = makeStyles({
  textPrimary: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  divBtn: {
    textAlign: "center",
    padding: "0.25rem"
  },
  moreBtn: {
    margin: "0 auto",
    background: "rgba(255, 204, 14,0.8)",
    letterSpacing: 1.2,
    "&:hover": {
      background: "rgb(255, 204, 14)"
    }
  },
  tooltip: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  credit: {
    textAlign: "right",
    color: "rgba(0,0,0,0.45)"
  }
});

interface LNProps {
  query: string;
}

const LocalNews = ({ query }: LNProps) => {
  const classes = useStyles();
  const data = useNewsContextValue();
  const link = React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => (
    <Link ref={ref} {...props} to="/news" />
  ));

  return data.loading ? (
    <Loading value={100} />
  ) : (
    !data.loading && (
      <Grid item xs={12} md={5}>
        <List>
          {data.articles.slice(0, 5).map((item, key) => (
            <React.Fragment key={key}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={`${item.author ? item.author : "unkown"}`}
                    variant="square"
                    src={`${item.urlToImage}`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.textPrimary}
                      href={`${item.url}`}
                    >
                      {item.title}
                    </a>
                  }
                  secondary={`${item.description.substr(0, 50)}...`}
                />
              </ListItem>

              <Divider component="li" variant="inset" />
            </React.Fragment>
          ))}
        </List>
        <div className={classes.credit}>
          <a
            className={classes.tooltip}
            href="https://newsapi.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powed by newsapi
          </a>
        </div>
        <div className={classes.divBtn}>
          <Tooltip
            title={
              <a
                className={classes.tooltip}
                href="https://newsapi.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powed by newsapi
              </a>
            }
            interactive
          >
            <Button
              className={classes.moreBtn}
              variant="contained"
              component={link}
            >
              Learn More
            </Button>
          </Tooltip>
        </div>
      </Grid>
    )
  );
};

export default LocalNews;
