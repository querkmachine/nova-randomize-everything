import { cities } from "../data/cities";
import {
  prefixes,
  suffixes,
  extraSuffixes,
  names,
} from "../data/street-address";
import { usStates } from "../data/us-states";
import {
  pickFromArray,
  generateString,
  generateNumber,
} from "./util/utilities";

export function addressStreet() {
  let addr = generateNumber(1, 100) + " ";
  addr += Math.random() < 0.1 ? pickFromArray(prefixes) + " " : "";
  addr += pickFromArray(names) + " " + pickFromArray(suffixes) + " ";
  addr += Math.random() < 0.1 ? pickFromArray(extraSuffixes) + " " : "";
  return addr.trim();
}

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
