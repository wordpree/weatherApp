import Layout from "./Layout";
import { connect } from "react-redux";
import { TravelStore } from "../redux-saga/reducer";
import { Dispatch, bindActionCreators } from "redux";
import { TravelActionType } from "../redux-saga/actionType";
import {
  reqNewsAction,
  reqSygicCollections,
  reqWeatherAction
} from "../redux-saga/actions";

const mapStateToProps = (state: TravelStore) => ({
  state: {
    collections: state.collections,
    weather: state.weather,
    news: state.news
  }
});

const mapDispatchToPorps = (dispatch: Dispatch<TravelActionType>) =>
  bindActionCreators(
    { reqNewsAction, reqSygicCollections, reqWeatherAction },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToPorps)(Layout);
