import React from "react";
import { Collection } from "../index";
import { ISygicCollection } from "../../util/type";
import { withStyles, createStyles, Theme } from "@material-ui/core";

interface ISCProps {
  sCol: ISygicCollection;
  image: string;
  bpNumber: any;
}

const sStyles = (theme: Theme) =>
  createStyles({
    gradient: {
      background:
        "linear-gradient(180deg, transparent 0%,transparent 80%,rgba(1,13,15,1) 100%)"
    },
    media: {
      paddingTop: "100%",
      [theme.breakpoints.up(450)]: {
        paddingTop: "65%"
      },
      [theme.breakpoints.up(600)]: {
        paddingTop: "125%"
      }
    }
  });

const SygicCollection = (props: ISCProps) => (
  <Collection {...props} path="attractions" />
);

export default withStyles(sStyles)(SygicCollection);
