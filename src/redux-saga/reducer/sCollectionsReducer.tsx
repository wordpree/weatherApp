import { ISygicCollection } from "../../util/type";
import * as TYPE from "../actionType";
const initState = [] as ISygicCollection[];

const sygicColsRudecer = (
  state = initState,
  actions: TYPE.ISygicColsResSuccess
) => {
  switch (actions.type) {
    case TYPE.REQUEST_SYGIC_COLS_SUCCEEDED:
      return actions.collections;
    default:
      return state;
  }
};
export default sygicColsRudecer;
