import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import { ITriposoPoi } from "../util/type";

interface ICDProps {
  detail: Pick<ITriposoPoi, "structured_content">;
}

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "0.25rem 0.75rem",
    marginTop: "1rem",
  },
  subTitle: {},
  imgWrapper: {
    float: "none",
    marginRight: 0,
    [theme.breakpoints.up(768)]: {
      float: "left",
      marginRight: "1rem",
    },
  },
  img: {
    maxWidth: "100%",
    maxHeight: 335,
  },
}));

const CardDetail = ({ detail }: ICDProps) => {
  const classes = useStyles();

  return (
    <>
      {detail.structured_content.sections.map(
        (item) =>
          item.body && (
            <div className={classes.content} key={item.title}>
              <Typography variant="h5" className={classes.subTitle}>
                {item.title}
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{ __html: item.body }}
                color="textSecondary"
              />
            </div>
          )
      )}
    </>
  );
};

export default CardDetail;
