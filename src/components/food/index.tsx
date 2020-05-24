import FoodCourt from "./FoodCourt";
import { TravelStore } from "../../redux-saga/reducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TravelActionType } from "../../redux-saga/actionType";
import { reqZomatoCuisineAction } from "../../redux-saga/actions";

const mapStateToProps = (state: TravelStore) => ({
  cities: state.zCities,
});
const mapDispatchToProps = (dispatch: Dispatch<TravelActionType>) => ({
  reqZomatoCusinesAction: (cuisineId: number, lat: number, log: number) =>
    dispatch(reqZomatoCuisineAction(cuisineId, lat, log)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FoodCourt);
