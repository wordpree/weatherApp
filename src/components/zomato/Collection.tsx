import React from "react";
import { Collection } from "../index";
import { IZomatoCollection } from "../../util/type";
import { withStyles, createStyles, Theme } from "@material-ui/core";

interface ISCProps {
  zCol: IZomatoCollection;
  image: string;
  bpNumber: any;
}

const zStyles = (theme: Theme) =>
  createStyles({
    gradient: {
      background:
        "linear-gradient(180deg, transparent 0%,transparent 65%,rgb(0,0,0) 100%)"
    },
    media: {
      paddingTop: "100%",
      [theme.breakpoints.up(450)]: {
        paddingTop: "65%"
      },
      [theme.breakpoints.up(600)]: {
        paddingTop: "55%"
      }
    }
  });

const ZCollection = (props: ISCProps) => <Collection {...props} />;

export default withStyles(zStyles)(ZCollection);
