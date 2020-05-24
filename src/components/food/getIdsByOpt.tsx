import { Option } from "../../util/type";
import { isCity } from "../../util/utils";

const getIdsByOpt = (options: Option, value: string) => {
  let result;
  const ret = options.find((item) => {
    if (isCity(item)) {
      return item.name === value;
    } else {
      return item.cuisine_name === value;
    }
  });
  if (ret) {
    if (isCity(ret)) {
      result = ret.coordinates;
    } else {
      result = ret.cuisine_id;
    }
  }
  return result;
};

export default getIdsByOpt;
