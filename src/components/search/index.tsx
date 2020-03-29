import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import Search from "./Search";
import {
  submitAction,
  inputAction,
  clearAutoCompleteAction
} from "../../redux-saga/actions";
import { TravelActionType } from "../../redux-saga/actionType";
import { TravelStore } from "../../redux-saga/reducer";

const mapDispatchToProps = (dispatch: Dispatch<TravelActionType>) =>
  bindActionCreators(
    { submitAction, inputAction, clearAutoCompleteAction },
    dispatch
  );

const mapStateToProps = (state: TravelStore) => ({
  predictions: state.predictions
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
