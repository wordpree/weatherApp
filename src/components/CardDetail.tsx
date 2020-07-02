import React from "react";
import {
  makeStyles,
  Typography,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import { ITriposoPoi, SectionData, ImgData } from "../util/type";
import { secureProtocol } from "../util/utils";
import defaultImg from "../assets/hero.jpg";

interface ICDProps {
  detail: Pick<ITriposoPoi, "structured_content">;
  imgData: ImgData[];
}

const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    paddingTop: "3rem",
  },
  section1: {
    WebkitColumnCount: 1,
    MozColumnCount: 1,
    columnCount: 1,
    [theme.breakpoints.up(768)]: {
      WebkitColumnCount: 2,
      MozColumnCount: 2,
      columnCount: 2,
    },
    [theme.breakpoints.up("md")]: {
      WebkitColumnCount: 3,
      MozColumnCount: 3,
      columnCount: 3,
    },
    borderBottom: "1px solid #EDEDED",
    borderTop: "1px solid #EDEDED",
    padding: "2rem 0.25rem",
  },
  section2: {
    WebkitColumnCount: 1,
    MozColumnCount: 1,
    columnCount: 1,
    [theme.breakpoints.up(768)]: {
      WebkitColumnCount: 2,
      MozColumnCount: 2,
      columnCount: 2,
    },
    padding: "2rem 0.25rem",
    borderTop: "1px solid #EDEDED",
    borderBottom: "1px solid #EDEDED",
  },
  paper: {
    height: 195,
    margin: "1rem auto",
    [theme.breakpoints.up("md")]: {
      margin: "3rem auto",
    },
    [theme.breakpoints.up(768)]: {
      height: 290,
    },
    [theme.breakpoints.up("lg")]: {
      height: 480,
    },
  },
  content: {
    padding: "0.25rem 0.75rem",
    marginTop: "1rem",
  },
  subTitle: {},
  imgWrapper: {
    display: "flex",
  },
}));

const CardDetail = ({ detail, imgData }: ICDProps) => {
  const classes = useStyles();
  const {
    structured_content: { sections },
  } = detail;
  const mediaQuery = useMediaQuery("(min-width:1248px)");
  const getImg = (size: boolean) => (imageData: ImgData[]) => {
    let retImage = defaultImg;
    if (imageData.length > 1) {
      retImage = size
        ? secureProtocol(imageData[1].sizes.original.url)
        : secureProtocol(imageData[1].sizes.medium.url);
    }
    return retImage;
  };

  const renderContent = (data: SectionData[]) =>
    data.map(
      (item) =>
        item.body && (
          <div className={classes.content} key={item.title}>
            <Typography variant="h5" className={classes.subTitle}>
              {item.title}
            </Typography>
            <Typography color="textSecondary">
              {item.body.replace(/<(.*?)>/g, "")}
            </Typography>
          </div>
        )
    );
  return (
    <div className={classes.contentWrapper}>
      <div className={classes.section1}>
        {renderContent(sections.slice(0, 3))}
      </div>
      <Paper
        className={classes.paper}
        style={{
          background: `top left / cover no-repeat url(${getImg(mediaQuery)(
            imgData
          )}) #cecece`,
        }}
      />
      <div className={classes.section2}>{renderContent(sections.slice(3))}</div>
    </div>
  );
};

export default CardDetail;
