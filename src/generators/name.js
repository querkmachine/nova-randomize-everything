import { firstNames } from "../data/first-names";
import { lastNames } from "../data/last-names";

export function nameFirst() {
  return firstNames[(firstNames.length * Math.random()) | 0];
}

export function nameLast() {
  return lastNames[(lastNames.length * Math.random()) | 0];
}

export function nameFull() {
  return `${nameFirst()} ${nameLast()}`;
}
