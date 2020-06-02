import React from "react";
import {
  ListItemText,
  ListItem,
  ListItemIcon,
  SvgIconTypeMap,
  List,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

type Icon = OverridableComponent<SvgIconTypeMap<{}, "svg">>;

interface IELProps {
  info: {
    label: string;
    icon?: Icon | null;
  }[];
}

const Lists = (Icon: Icon | null) => ({ name }: { name: string }) => (
  <ListItem component="a" href="#">
    {Icon && (
      <ListItemIcon>
        <Icon color="secondary" />
      </ListItemIcon>
    )}
    <ListItemText
      primary={name}
      primaryTypographyProps={{ variant: "body2" }}
    />
  </ListItem>
);

const ExpandList = ({ info }: IELProps) => {
  const expandList = info.map((item) => {
    const ListWithIcon = item.icon ? Lists(item.icon) : Lists(null);
    return <ListWithIcon name={item.label} key={item.label} />;
  });
  return <List disablePadding>{expandList}</List>;
};

export default ExpandList;
