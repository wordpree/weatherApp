import * as TYPE from "../actionType";
import { Detail } from "../../util/type";

const initState = [] as Detail[];
const sygicDetailReducer = (
  state = initState,
  actions: TYPE.ISygicDetailResSuccess
) => {
  switch (actions.type) {
    case TYPE.REQUEST_SYGIC_DETAIL_SUCCEEDED:
      let places = actions.places;
      const placeDets = [] as Detail[];
      const flag = actions.flag;
      for (let i = 0; i < flag.length; i++) {
        let temp = flag[i];
        placeDets.push({ id: temp.id, places: places.slice(0, temp.num) });
        places = places.slice(temp.num);
      }
      return placeDets;
    default:
      return state;
  }
};

export default sygicDetailReducer;
