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
    link?: string;
  }[];
}

const Lists = (Icon: Icon | null) => ({
  name,
  link,
}: {
  name: string;
  link: string;
}) => (
  <ListItem component="a" href={link} target="_blank">
    {Icon && (
      <ListItemIcon>
        <Icon style={{ color: "#fff" }} />
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
    return (
      <ListWithIcon
        name={item.label}
        key={item.label}
        link={item.link ? item.link : ""}
      />
    );
  });
  return <List disablePadding>{expandList}</List>;
};

export default ExpandList;
