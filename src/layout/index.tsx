import Layout from "./Layout";
import { connect } from "react-redux";
import { TravelStore } from "../redux-saga/reducer";
import { Dispatch, bindActionCreators } from "redux";
import { TravelActionType } from "../redux-saga/actionType";
import {
  reqNewsAction,
  reqWeatherAction,
  reqGoogleSearchText,
  reqTriposoPopularPoiAction,
  reqTriposoLocationAction,
  reqTriposoCitiesAction,
  reqZomatoCuisineAction,
} from "../redux-saga/actions";

const mapStateToProps = (state: TravelStore) => ({
  populars: state.tPopular,
  islands: state.tLocation.islands,
  parks: state.tLocation.parks,
});

const mapDispatchToPorps = (dispatch: Dispatch<TravelActionType>) =>
  bindActionCreators(
    {
      reqWeatherAction,
      reqNewsAction,
      reqGoogleSearchText,
      reqTriposoPopularPoiAction,
      reqTriposoLocationAction,
      reqTriposoCitiesAction,
      reqZomatoCuisineAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToPorps)(Layout);
