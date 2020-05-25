import React from "react";
import { Phone, SilverwareForkKnife, Heart, MapMarker } from "mdi-material-ui";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
interface ILIProps {
  address: string;
  timings: string;
  rating: string;
  vote: string;
  phone: string;
}
const useStyles = makeStyles({
  text: {
    letterSpacing: 0.3,
  },
});
const ListInfo = ({ address, timings, rating, vote, phone }: ILIProps) => {
  const classes = useStyles();
  const info = [
    { icon: <MapMarker color="primary" />, text: address },
    { icon: <SilverwareForkKnife color="primary" />, text: timings },
    {
      icon: <Heart color="primary" />,
      text: rating + " / " + vote + " reviews",
    },
    { icon: <Phone color="primary" />, text: phone },
  ];
  return (
    <div>
      {info.map((item, index) => (
        <ListItem key={index} dense>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              variant: "body2",
              color: "textSecondary",
              className: classes.text,
            }}
          />
        </ListItem>
      ))}
    </div>
  );
};

export default ListInfo;
