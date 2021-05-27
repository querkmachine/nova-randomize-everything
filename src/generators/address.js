import { cities } from "../data/cities";
import { usStates } from "../data/us-states";
import { pickFromArray } from "./util/utilities";

export function addressCity() {
  return pickFromArray(cities);
}

export function addressUSStateName() {
  return pickFromArray(usStates).name;
}

export function addressUSStateCode() {
  return pickFromArray(usStates).code;
}
