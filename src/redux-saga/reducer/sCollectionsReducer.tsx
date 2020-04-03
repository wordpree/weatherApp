import { ISygicCollection } from "../../util/type";
import * as TYPE from "../actionType";
const initState = [] as ISygicCollection[];

const colsMock = [
  {
    id: 184,
    name_long: "What to See in London",
    place_ids: [1, 2, 3]
  },
  {
    id: 185,
    name_long: "London: Editor's Choice",
    place_ids: [1, 2, 3]
  },
  {
    id: 186,
    name_long: "Best Hotels in London",
    place_ids: [1, 2, 3]
  }
];

const sygicColsReducer = (
  state = colsMock,
  actions: TYPE.ISygicColsResSuccess
) => {
  switch (actions.type) {
    case TYPE.REQUEST_SYGIC_COLS_SUCCEEDED:
      return actions.collections;
    default:
      return state;
  }
};
export default sygicColsReducer;
