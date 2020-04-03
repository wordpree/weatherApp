import Layout from "./Layout";
import { connect } from "react-redux";
import { TravelStore } from "../redux-saga/reducer";
import { Dispatch, bindActionCreators } from "redux";
import { TravelActionType } from "../redux-saga/actionType";
import {
  reqNewsAction,
  reqSygicCollections,
  reqWeatherAction,
  reqSygicDetail,
  reqZomatoCityAction,
  reqZomatoCollectionAction
} from "../redux-saga/actions";

const mapStateToProps = (state: TravelStore) => ({
  detail: state.detail,
  collections: state.collections
});

const mapDispatchToPorps = (dispatch: Dispatch<TravelActionType>) =>
  bindActionCreators(
    {
      reqSygicCollections,
      reqSygicDetail,
      reqWeatherAction,
      reqNewsAction,
      reqZomatoCityAction,
      reqZomatoCollectionAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToPorps)(Layout);
