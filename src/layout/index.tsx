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
} from "../redux-saga/actions";

const mapStateToProps = (state: TravelStore) => ({
  detail: state.detail,
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToPorps)(Layout);
