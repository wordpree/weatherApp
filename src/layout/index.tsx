import Layout from "./Layout";
import { connect } from "react-redux";
import { TravelStore } from "../redux-saga/reducer";
import { Dispatch, bindActionCreators } from "redux";
import { TravelActionType } from "../redux-saga/actionType";
import {
  reqNewsAction,
  reqWeatherAction,
  reqZomatoCityAction,
  reqZomatoCollectionAction,
  reqGoogleSearchText,
} from "../redux-saga/actions";

const mapStateToProps = (state: TravelStore) => ({
  detail: state.detail,
});

const mapDispatchToPorps = (dispatch: Dispatch<TravelActionType>) =>
  bindActionCreators(
    {
      reqWeatherAction,
      reqNewsAction,
      reqZomatoCityAction,
      reqZomatoCollectionAction,
      reqGoogleSearchText,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToPorps)(Layout);
