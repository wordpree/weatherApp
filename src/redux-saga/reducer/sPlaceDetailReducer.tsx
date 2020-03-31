import * as TYPE from "../actionType";
import { ISygicPlace } from "../../util/type";

const initState = [] as { id: number; places: ISygicPlace[] }[];
const sygicDetailReducer = (
  state = initState,
  actions: TYPE.ISygicDetailResSuccess
) => {
  switch (actions.type) {
    case TYPE.REQUEST_SYGIC_DETAIL_SUCCEEDED:
      const newPlaces = actions.id.map((id, index) => ({
        id: id,
        places: actions.places.slice(9 * index, (index + 1) * 9)
      }));
      return newPlaces;
    default:
      return state;
  }
};

export default sygicDetailReducer;
