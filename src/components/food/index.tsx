import React from "react";
import FoodCourt from "./FoodCourt";
import { TravelStore } from "../../redux-saga/reducer";
import { connect } from "react-redux";

const mapStateToProps = (state: TravelStore) => ({
  cities: state.zCities,
});

export default connect(mapStateToProps)(FoodCourt);
