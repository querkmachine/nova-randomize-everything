import { pickFromArray } from "./util/utilities";
import { firstNames } from "../data/first-names";
import { lastNames } from "../data/last-names";

export function nameFirst() {
  return pickFromArray(firstNames);
}

export function nameLast() {
  return pickFromArray(lastNames);
}

export function nameFull() {
  return `${nameFirst()} ${nameLast()}`;
}
