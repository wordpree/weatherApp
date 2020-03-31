import React from "react";
// import {
//   Card,
//   CardMedia,
//   Typography,
//   CardContent,
//   CardActionArea,
//   Container
// } from "@material-ui/core";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { makeStyles } from "@material-ui/core/styles";
// import { AlarmPlus, Web } from "mdi-material-ui";
// import { useUnspPhotoContextValue } from "../util/apiCall";
// import Loading from "./Loading";
// import Title from "./Title";
// import Slider from "react-slick";

// const useStyles = makeStyles(theme => ({
//   card: {
//     position: "relative",
//     height: "100%"
//   },
//   cardAction: {
//     height: "100%",
//     padding: 2
//   },
//   cardMedia: {
//     paddingTop: "116%",
//     "&:hover": {
//       transform: "scale(1.01)",
//       transition: "all 0.8s"
//     }
//   },
//   content: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     textAlign: "center",
//     background: "rgba(0,0,0,0.3)",
//     width: "100%"
//   },
//   anchorAuthor: {
//     textDecoration: "none",
//     textTransform: "uppercase",
//     color: "#131313",
//     letterSpacing: 1,
//     backgroundColor: "#FFCC0D",
//     padding: "2px 8px",
//     marginRight: 8,
//     borderRadius: 2,
//     fontSize: 11,
//     display: "inline-block",
//     marginBottom: 2,
//     fontWeight: 300,
//     "&:hover": {
//       textDecoration: "underline"
//     }
//   },
//   typoSite: {
//     padding: "1px 2px",
//     color: "rgba(255,255,255,0.6)",
//     fontSize: "0.9rem"
//   },
//   typoAuthor: {
//     marginBottom: "1rem"
//   },
//   des: {
//     color: "#fff",
//     fontSize: "1.25rem",
//     textTransform: "uppercase",
//     fontWeight: 500,
//     lineHeight: 1.4,
//     letterSpacing: 1
//   },
//   spanMeta: {
//     display: "flex",
//     fontSize: "0.75rem",
//     justifyContent: "center",
//     alignItems: "center",
//     letterSpacing: 1.2,
//     "&>*": {
//       marginRight: "4px"
//     }
//   },
//   meta: {
//     color: "#fff",
//     marginTop: "1rem",
//     fontSize: 11
//   },
//   media: {
//     paddingTop: "114%",
//     [theme.breakpoints.up("md")]: {
//       paddingTop: "164%"
//     },
//     "&:hover": { transform: "scale(1.02)" },
//     transition: "all 1s ease-in-out",
//     cursor: "pointer"
//   },
//   typo: {
//     color: "rgba(207,201,122,0.6)",
//     fontWeight: 300
//   },
//   anchorWeb: {
//     textDecoration: "none",
//     color: "inherit",
//     "&:hover": {
//       color: "rgba(255,255,255,0.8)"
//     }
//   }
// }));

const TourPhoto = () => {
  //   const { results, loading, site } = useUnspPhotoContextValue();
  //   const classes = useStyles();
  //   const lg = useMediaQuery("(min-width:1280px)");
  //   const md = useMediaQuery("(min-width:960px)");
  //   const sm = useMediaQuery("(max-width:600px)");
  //   const silides = lg ? 4 : md ? 3 : sm ? 1 : 2;

  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     slidesToShow: silides,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 800,
  //     autoplaySpeed: 3000
  //   };

  //   const sliderData = results.map((photo, index) => {
  //     const spot = site.split(",")[0];
  //     return (
  //       <div key={index}>
  //         <Card elevation={4} className={classes.card}>
  //           <CardActionArea className={classes.cardAction}>
  //             <CardMedia
  //               image={md ? photo.urls.regular : photo.urls.small}
  //               className={classes.cardMedia}
  //             />
  //             <CardContent className={classes.content}>
  //               <Typography className={classes.typoAuthor}>
  //                 <span style={{ color: "#fff" }}>By</span>{" "}
  //                 <a
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                   className={classes.anchorAuthor}
  //                   href={photo.links.html}
  //                 >
  //                   {photo.user.name}
  //                 </a>
  //               </Typography>
  //               <Typography className={classes.des}>
  //                 {photo.alt_description
  //                   ? photo.alt_description
  //                   : `one shot of ${spot}`}
  //               </Typography>
  //               <Typography className={classes.typoSite}>{site}</Typography>
  //               <div className={classes.meta}>
  //                 <span className={classes.spanMeta}>
  //                   <AlarmPlus fontSize="inherit" />
  //                   {new Date(photo.created_at).toDateString()}
  //                   {" -- "}
  //                   <Web fontSize="inherit" />
  //                   <a
  //                     href="https://unsplash.com/"
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     className={classes.anchorWeb}
  //                   >
  //                     Unsplash
  //                   </a>
  //                 </span>
  //               </div>
  //             </CardContent>
  //           </CardActionArea>
  //         </Card>
  //       </div>
  //     );
  //   });
  //   return !loading ? (
  //     <Container maxWidth="lg" style={{ padding: 0, margin: "2.5rem auto" }}>
  //       <Title text="Discover your amazing photos" />
  //       <Slider {...settings}>{sliderData}</Slider>
  //     </Container>
  //   ) : (
  //     <Loading value={100} />
  //   );
  return <div />;
};

export default TourPhoto;
