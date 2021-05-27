import { cities } from "../data/cities";
import { usStates } from "../data/us-states";
import { pickFromArray, generateString } from "./util/utilities";

export function addressCity() {
  return pickFromArray(cities);
}

export function addressUSStateName() {
  return pickFromArray(usStates).name;
}

export function addressUSStateCode() {
  return pickFromArray(usStates).code;
}

export function addressUSZipCode() {
  return generateString(5, "0123456789");
}

export function addressUSZipCodePlus4() {
  return `${addressUSZipCode()}-${generateString(4, "0123456789")}`;
}
