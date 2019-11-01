import React from "react";
import NavList from "./NavList";
import { List } from "@material-ui/core";
import { Home, Camera, Airballoon, Newspaper } from "mdi-material-ui";

interface INavListsProps {
  styles?: {
    display: string;
    flexGrow: number;
  };
}
const NavLists = ({ styles }: INavListsProps) => {
  const iconLists = [
    { Icon: Home, label: "Forecast", to: "/" },
    { Icon: Airballoon, label: "Travel", to: "/travel" },
    { Icon: Camera, label: "Photos", to: "/photos" },
    { Icon: Newspaper, label: "News", to: "/news" }
  ];
  return (
    <List style={styles}>
      {iconLists.map(({ Icon, label, to }) => (
        <NavList icon={<Icon />} key={label} label={label} to={to} />
      ))}
    </List>
  );
};

export default NavLists;
