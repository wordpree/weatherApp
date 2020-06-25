import React from "react";
import { INData } from "../util/type";
import { connect } from "react-redux";
import { TravelStore } from "../redux-saga/reducer";
import {
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { FrMotionButton } from "./";
import Loading from "./Loading";

const useStyles = makeStyles({
  textPrimary: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  divBtn: {
    textAlign: "center",
    padding: "0.25rem",
  },
  tooltip: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  credit: {
    textAlign: "right",
    color: "rgba(0,0,0,0.45)",
  },
});

interface LNProps {
  news: INData[];
}

const LocalNews = ({ news }: LNProps) => {
  const classes = useStyles();
  if (news.length === 0) return <Loading value={100} />;
  return (
    <Grid item xs={12} md={5}>
      <List>
        {news.slice(0, 5).map((item, key) => (
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
        <Link to="/blog">
          <FrMotionButton variant="contained" color="primary">
            Learn More
          </FrMotionButton>
        </Link>
      </div>
    </Grid>
  );
};

const mapStateToProps = (state: TravelStore) => ({
  news: state.news,
});
export default connect(mapStateToProps)(LocalNews);
