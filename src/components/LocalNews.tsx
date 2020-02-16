import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNewsContextValue } from "../util/apiCall";
import Loading from "./Loading";
const useStyles = makeStyles({
  primary: {
    fontFamily: "Oswald, sans-serif"
  },
  secondary: {
    fontFamily: "Oswald, sans-serif"
  },
  textPrimary: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

const LocalNews = () => {
  const classes = useStyles();
  const data = useNewsContextValue();
  console.log(data);
  return data.loading ? (
    <Loading value={100} />
  ) : (
    !data.loading && (
      <Grid item xs={12} md={5}>
        <List>
          {data.articles.slice(0, 4).map((item, key) => (
            <React.Fragment key={key}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    variant="square"
                    src={`${item.urlToImage}`}
                  />
                </ListItemAvatar>
                <ListItemText
                  classes={{
                    primary: classes.primary,
                    secondary: classes.secondary
                  }}
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
                  secondary={`${item.description.substr(0, 100)}...`}
                />
              </ListItem>

              <Divider component="li" variant="inset" />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    )
  );
};

export default LocalNews;
