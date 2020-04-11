import React from "react";
import { connect } from "react-redux";
import { TravelStore } from "../redux-saga/reducer";
import { IGoogleTextsearch } from "../util/type";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Container,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

interface IPProps {
  pois: IGoogleTextsearch[];
}

const useStyles = makeStyles({
  container: {
    marginTop: "4rem",
  },
  tile: {
    position: "relative",
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: 400,
    color: "#ccc",
  },
  span: {
    padding: "1.25%",
    fontWeight: 400,
    color: "#ccc",
    background: "#01B3A7",
    position: "absolute",
    right: 0,
    top: 0,
  },
});
const Photos = ({ pois }: IPProps) => {
  let cols = 1;
  const G_API_KEY = "AIzaSyBIDPYFVWcF6oMGjC09UXAjXz7L735A36Y";
  const G_PLACE = "https://maps.googleapis.com/maps/api/place";
  const classes = useStyles();
  const googlePlacePhoto = (reference: string, maxWidth: number) =>
    `${G_PLACE}/photo?maxwidth=${maxWidth}&photoreference=${reference}&key=${G_API_KEY}`;
  const photos = pois.length
    ? pois
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 15)
        .map((poi, index) => ({
          img: googlePlacePhoto(poi.photos[0].photo_reference, 960),
          name: poi.name,
          rating: poi.rating,
          counts: poi.user_ratings_total,
          address: poi.formatted_address,
          cols: index % 6 === 5 ? 2 : index % 6 === 0 ? 2 : 1,
        }))
    : [];
  const md = useMediaQuery("(min-width:960px)");
  const sm = useMediaQuery("(min-width:450px)");
  cols = md ? 4 : sm ? 2 : 1;

  return photos.length ? (
    <Container className={classes.container}>
      <div>
        <GridList cellHeight={340} cols={cols}>
          <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
            <ListSubheader component="div">More pictures</ListSubheader>
          </GridListTile>
          {photos.map((tile) => (
            <GridListTile
              cols={tile.cols}
              key={tile.name}
              className={classes.tile}
            >
              <img src={tile.img} alt={tile.name} />
              <GridListTileBar
                title={tile.name}
                subtitle={tile.address}
                classes={{
                  title: classes.title,
                  subtitle: classes.subtitle,
                }}
              />
              <span className={classes.span}>{tile.rating}</span>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Container>
  ) : null;
};

const mapStateToProps = (state: TravelStore) => ({
  pois: state.gPois,
});

export default connect(mapStateToProps)(Photos);
