import React from "react";
import Title from "../Title";

import { Container, Grid, Card, Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {
  StyledCardMedia,
  StyledCardActionArea,
  StyledImgBackDrop,
  StyledTypoName,
  StyledRating,
  StyledTags
} from "./styled";
import fuoy from "../../assets/fuoy.png";

const Restaurants = () => {
  return <div></div>;
  // const { loading, buzi } = useYelpBuzContextValue();

  // const grids = (buz: IYelpData[], md: any) =>
  //   buz.map((item: IYelpData, index: any) => (
  //     <Grid item key={index} xs={12} md={md}>
  //       <Card>
  //         <StyledCardActionArea>
  //           <StyledCardMedia image={item.image_url} />
  //           <StyledImgBackDrop>
  //             <StyledTypoName>{item.name}</StyledTypoName>
  //           </StyledImgBackDrop>
  //         </StyledCardActionArea>
  //       </Card>
  //       <div>
  //         <Box borderColor="transparent">
  //           <Typography
  //             component="legend"
  //             variant="body2"
  //             color="textSecondary"
  //             style={{ padding: "8px 4px" }}
  //           >
  //             {item.location.display_address.join(", ")}
  //           </Typography>
  //           <StyledRating>
  //             <Rating
  //               name="rating-read"
  //               value={item.rating}
  //               precision={0.5}
  //               readOnly
  //             />
  //             <Box ml={2}>{item.review_count} reviews</Box>
  //             <Box ml={2}>
  //               <a
  //                 style={{
  //                   display: "block",
  //                   width: 26,
  //                   height: 20,
  //                   background: `center / cover no-repeat url(${fuoy})`
  //                 }}
  //                 href={item.url}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               > </a>
  //             </Box>
  //           </StyledRating>
  //           <StyledTags>
  //             <span>
  //               {item.categories.map((item, index) => item.title).join(" , ")}
  //             </span>
  //             <div> . {item.price}</div>
  //           </StyledTags>
  //         </Box>
  //       </div>
  //     </Grid>
  //   ));

  // return !loading ? (
  //   <Container>
  //     <Title text="What is your best cuisine" />
  //     <Grid container spacing={3} style={{ margin: "2rem auto" }}>
  //       {grids(buzi.slice(0, 2), 6)}
  //     </Grid>
  //     <Grid container spacing={2}>
  //       {grids(buzi.slice(2, 5), 4)}
  //     </Grid>
  //   </Container>
  // ) : (
  //   <div />
  // );
};

export default Restaurants;
