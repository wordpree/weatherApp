import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link, LinkProps } from "react-router-dom";
import { ITriposoPoi } from "../../util/type";

interface IMAProps {
  more: ITriposoPoi[];
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: 5,
  },
  itemText: {
    color: "#000",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  typo: {
    paddingTop: "1.5rem",
    textAlign: "center",
  },
}));

const MoreAttraction = ({ more }: IMAProps) => {
  const classes = useStyles();

  const ListLink = (id: string) =>
    React.forwardRef<any, Omit<LinkProps, "to">>((props, ref) => (
      <Link to={`/explore-nature/${id}`} ref={ref} {...props} />
    ));
  return (
    <>
      <Typography variant="h5" className={classes.typo}>
        More popular attractions
      </Typography>
      <List>
        {more.map((item) => (
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
                secondary={item.intro.substring(0, 34) + "..."}
              />
            </ListItem>
            <Divider style={{ background: "rgba(234,175,4,0.7)" }} />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default MoreAttraction;
